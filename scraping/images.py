
import requests
import os
from dotenv import load_dotenv

load_dotenv()
endpoint = "https://park-protection-image-search.cognitiveservices.azure.com/bing/v7.0/images/search?q="
headers = {"Ocp-Apim-Subscription-Key" : os.getenv("IMAGES_KEY")}
queries = ["Abbott's Booby", "Acklins Ground Iguana", "Akiapolaau", "Aleutian Holly Fern", "Amargosa Niterwort", "Prickly Applecactus"]

images = dict()
for q in queries:
	r = requests.get(endpoint + q, headers=headers)
	images[q] = r.json()["value"][0]["thumbnailUrl"] # or contentUrl
print(images)