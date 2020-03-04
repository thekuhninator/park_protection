
import requests

endpoint = "https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export"
 
animalColumns = "columns=/species@sid,cn,sn,status,gn,dps,is_aquatic,is_bcc,country;/species/range_state@abbrev;/species/conservation_plans@plan_title"

# prevent null = scientific name, common name, domestic/foreign
# allowed null = dps, aquatic, bcc, range_state, conservation_plan
validFilters = "filter=/species@sn != ''&filter=/species@sn is not null&filter=/species@cn != ''&filter=/species@cn is not null&filter=/species@cn != 'None'&filter=/species@country != ''&filter=/species@country is not null"

statusFilters = "filter=/species@status = 'Endangered' or /species@status = 'Recovery' or /species@status = 'Threatened'"

# 1365
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
		animalDict['commonName'] = animalData[1]
		animalDict['scientificName'] = animalData[2]['value']
		animalDict['status'] = animalData[3]
		animalDict['group'] = animalData[4]
		animalDict['dps'] = animalData[5]
		animalDict['aquatic'] = animalData[6]
		animalDict['bcc'] = animalData[7]
		animalDict['country'] = animalData[8]
		animalDict['states'] = list() if animalData[9] is None else [animalData[9]]
		animalDict['plan'] = None if animalData[10] is None else animalData[10]['value']
		animalsData.append(animalDict)

# turn states list into states string
for i in range(len(animalsData) - 1, -1, -1):
	animalsData[i]['states'] = ", ".join(animalsData[i]['states'])
	# if animalsData[i]['states'] == "":
	# 	del animalsData[i]

print(len(animalsData))
print(animalsData)
