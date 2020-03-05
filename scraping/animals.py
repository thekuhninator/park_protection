
import requests
import re
import psycopg2

endpoint = "https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export"
 
animalColumns = "columns=/species@sid,cn,sn,status,listing_date,gn,dps,is_aquatic,is_bcc;/species/range_state@abbrev;/species/conservation_plans@plan_title"

# prevent null = scientific name, common name, domestic/foreign
# allowed null = dps, aquatic, bcc, range_state, conservation_plan
validFilters = "filter=/species@sn != ''&filter=/species@sn is not null&filter=/species@cn != ''&filter=/species@cn is not null&filter=/species@cn != 'None'"

statusFilters = "filter=/species@status = 'Endangered' or /species@status = 'Recovery' or /species@status = 'Threatened'"

# 653
animalFilters = "filter=/species@gn = 'Amphibians' or /species@gn = 'Arachnids' or /species@gn = 'Birds' or /species@gn = 'Clams' or /species@gn = 'Corals' or /species@gn = 'Crustaceans' or /species@gn = 'Fishes' or /species@gn = 'Insects' or /species@gn = 'Mammals' or /species@gn = 'Reptiles' or /species@gn = 'Snails'"

r = requests.get(endpoint + "?" + animalColumns + "&" + validFilters + "&" + statusFilters + "&" + animalFilters)
rawData = r.json()['data']

animalsData = []
duplicates = dict()
for animalData in rawData:
	id = animalData[0]
	if id in duplicates:
		# don't append, modify old entry - can be duplicate due to states or conservation plans
		newState = animalData[9]
		newPlan = animalData[10]
		if newState is not None:
			if animalsData[duplicates[id]]["states"] is None:
				animalsData[duplicates[id]]["states"] = newState
			elif newState not in animalsData[duplicates[id]]["states"]:
				animalsData[duplicates[id]]["states"].append(newState)
				animalsData[duplicates[id]]["states"].sort()
		if newPlan is not None:
			if animalsData[duplicates[id]]["plan"] is None:
				animalsData[duplicates[id]]["plan"] = newPlan

	else:
		# append new animal
		duplicates[animalData[0]] = len(animalsData)
		animalDict = dict()
		animalDict['id'] = animalData[0]
		animalDict['common'] = animalData[1]
		animalDict['scientific'] = animalData[2]['value']
		animalDict['status'] = animalData[3]
		animalDict['date'] = animalData[4]
		animalDict['group'] = animalData[5]
		animalDict['dps'] = animalData[6]
		animalDict['aquatic'] = animalData[7] if animalData[7] is not None else True
		animalDict['bcc'] = animalData[8]
		animalDict['states'] = list() if animalData[9] is None else [animalData[9]]
		animalDict['plan'] = None if animalData[10] is None else animalData[10]['value']
		animalsData.append(animalDict)

# turn states list into states string
for i in range(len(animalsData) - 1, -1, -1):
	animalsData[i]['states'] = ", ".join(animalsData[i]['states'])
	if animalsData[i]['states'] == "":
		del animalsData[i]
	else:
		if animalsData[i]['plan'] is None:
			animalsData[i]['plan'] = "None"
		animalsData[i]['common'] = re.sub(" [(]=.*[)]", "", animalsData[i]['common'])
		animalsData[i]['scientific'] = re.sub(" [(]=.*[)]", "", animalsData[i]['scientific'])

# print(len(animalsData))
# print(animalsData)

conn = psycopg2.connect(database = "", user = "", password = "", host = "", port = "")
print("Opened database successfully")

cur = conn.cursor()

# for i in range(0, 10):
# 	animal = animalsData[i]
# 	cur.execute("INSERT INTO TEST (ID, COM, SCI, STATUS, LDATE, AGROUP, DPS, AQUATIC, BCC, STATES, PLAN) VALUES (" + str(animal['id']) +
# 		", '" + animal['common'] + "', '" + animal['scientific'] + "', '" + animal['status'] + "', '" + animal['date'] + "', '" + animal['group'] + "', " + str(animal['dps']) + ", " + str(animal['aquatic']) + ", " + 
# 		str(animal['bcc']) + ", '" + animal['states'] + "', '" + animal['plan'] + "')")
# conn.commit()
# print("Records created successfully")

cur.execute("SELECT * from TEST")
rows = cur.fetchall()
for row in rows:
	print(row)
print("Operation done successfully")

conn.close()
