
import requests

# Don't need to change any of this

endpoint = "https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export"

# scientific name, status
plantColumns = "columns=/species@sn,status"

# prevent null = scientific name, common name, domestic/foreign
# allowed null = dps, aquatic, bcc, range_state, conservation_plan
validFilters = "filter=/species@sn != ''&filter=/species@sn is not null&filter=/species@cn != ''&filter=/species@cn is not null&filter=/species@cn != 'None'&filter=/species@country != ''&filter=/species@country is not null"

statusFilters = "filter=/species@status = 'Endangered' or /species@status = 'Recovery' or /species@status = 'Threatened'"

# 955
plantFilters = "filter=/species@gn = 'Conifers and Cycads' or /species@gn = 'Ferns and Allies' or /species@gn = 'Flowering Plants'"

r = requests.get(endpoint + "?" + plantColumns + "&" + validFilters + "&" + statusFilters + "&" + plantFilters)
rawData = r.json()['data']

plantsList = []

for plantData in rawData:
	plantsList.append(tuple((plantData[0]['value'], plantData[1])))

# uncomment to print plantsList
# print(plantsList)

"""
README

plantsList is a list of tuples
plantsList[i] refers to the plant at index i
each plant is represented as a tuple with 2 strings - the scientific name and ESA Listing Status

use the scientific name to search and pull the symbol, common name, states, family,
family common name, category, duration, growth habit, and toxicity from the plants database

NOTE: Scientific names may be in the form "latin1 latin2", "latin1 (=latin2) latin3 (=latin 4)", "latin1 latin2 var. latin3", etc.
      You will have to figure out how to transform the given name so that the plants database returns at least one search result

the output should be a list of dicts - each dict is a plant, with keys being the plants' attributes like "scientific name"

Example:
input: plantsList = [ ("plant1", "Endangered"), ("plant2", "Threatened") ]

output: plantsData = [ {"scientificName" : "plant1", "status" : "Endangered", "family" : "Cactus"},
                       {"scientificName" : "plant2", "status" : "Threatened", "family" : "Fern"} ]
"""

plantsData = []

# your code here

# print(plantsData)
