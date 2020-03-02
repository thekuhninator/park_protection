
import requests

endpoint = "https://park-protection-image-search.cognitiveservices.azure.com/bing/v7.0/images/search?q="
headers = {"Ocp-Apim-Subscription-Key" : "c9d766d86e304e8397498b7dc08eaa86"}
queries = ["Abbott's Booby", "Acklins Ground Iguana", "Akiapolaau", "Aleutian Holly Fern", "Amargosa Niterwort", "Prickly Applecactus"]

images = dict()
for q in queries:
	r = requests.get(endpoint + q, headers=headers)
	images[q] = r.json()["value"][0]["thumbnailUrl"] # or contentUrl
print(images)