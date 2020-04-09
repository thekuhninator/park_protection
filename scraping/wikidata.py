#!/usr/bin/python3

"""
    parse.py

    MediaWiki API Demos
    Demo of `Parse` module: Parse content of a page

    MIT License
"""

import requests
import re

S = requests.Session()

URL = "https://en.wikipedia.org/w/api.php"

# do a get request first

# put name of what you want to search for in SEARCHPAGE

SEARCHPAGE = "Mesodon clarki nantahala"

PARAMS = {
    "action": "query",
    "format": "json",
    "list": "search",
    "srsearch": SEARCHPAGE
}

R = S.get(url=URL, params=PARAMS)
DATA = R.json()


# use the first result as the page for a parse

PARAMS = {
    "action": "parse",
    "page": DATA['query']['search'][0]['title'],
    "format": "json",
    "prop": "wikitext"
}

R = S.get(url=URL, params=PARAMS)
DATA = R.json()

pagetext = DATA["parse"]["wikitext"]["*"]
# remove speciesbox
paragraph = re.sub('({{([^}])+}})', '', pagetext)
paragraph = re.search('(\'\'\'(.+\n+)+?(==))', paragraph).group()
paragraph = re.sub('(==)', '', paragraph)
# parse and remove tags
print(re.sub('(<.+?>)', '', paragraph))

# Animal pages tend to have a "The " that will get parsed out by the regex. We can add this in manually if we know we're searching an animal.

