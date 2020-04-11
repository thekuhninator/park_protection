from flask import Flask
from flask_restless import APIManager
from flask_cors import CORS, cross_origin
import os
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy

# Load environemnt variables
load_dotenv()
# Create the Flask application and the Flask-SQLAlchemy object.
application = Flask(__name__)
cors = CORS(application)
application.config['CORS_HEADERS'] = 'Content-Type'

# application.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///memory'
application.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://' + os.environ['DB_USER'] + ':' + os.environ['DB_PASS'] + '@' + os.environ['DB_HOST'] + ':' + os.environ['DB_PORT'] + '/' + os.environ['DB_NAME']

db = SQLAlchemy(application)

# Create your Flask-SQLALchemy models as usual but with the following two
# (reasonable) restrictions:
#   1. They must have a primary key db.Column of type sqlalchemy.Integer or
#      type sqlalchemy.Unicode.
#   2. They must have an __init__ method which accepts keyword arguments for
#      all db.Columns (the constructor in flask.ext.sqlalchemy.SQLAlchemy.Model
#      supplies such a method, so you don't need to declare a new one).
class Animals(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    com_name = db.Column(db.Unicode)
    sci_name = db.Column(db.Unicode)
    status = db.Column(db.Unicode)
    list_date = db.Column(db.Unicode)
    tax_group = db.Column(db.Unicode)
    dps = db.Column(db.Boolean)
    aquatic = db.Column(db.Boolean)
    bcc = db.Column(db.Boolean)
    plan = db.Column(db.Unicode)
    image = db.Column(db.Unicode)
    des = db.Column(db.Unicode)

class AnimalStates(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode)
    animal_id = db.Column(db.Integer, db.ForeignKey('animals.id'))

    animal = db.relationship(Animals, backref=db.backref("states"))

class Plants(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    com_name = db.Column(db.Unicode)
    sci_name = db.Column(db.Unicode)
    status = db.Column(db.Unicode)
    list_date = db.Column(db.Unicode)
    family = db.Column(db.Unicode)
    family_com = db.Column(db.Unicode)
    category = db.Column(db.Unicode)
    duration = db.Column(db.Unicode)
    growth = db.Column(db.Unicode)
    toxicity = db.Column(db.Unicode)
    plan = db.Column(db.Unicode)
    image = db.Column(db.Unicode)
    des = db.Column(db.Unicode)

class PlantStates(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode)
    plant_id = db.Column(db.Integer, db.ForeignKey('plants.id'))

    plant = db.relationship(Plants, backref=db.backref("states"))

class Parks(db.Model):
    code = db.Column(db.Unicode, primary_key=True)
    name = db.Column(db.Unicode)
    designation = db.Column(db.Unicode)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    url = db.Column(db.Unicode)
    desc = db.Column(db.Unicode)
    weather = db.Column(db.Unicode)
    directions = db.Column(db.Unicode)
    address = db.Column(db.Unicode)
    phone = db.Column(db.Unicode)
    email = db.Column(db.Unicode)
    images = db.Column(db.Unicode)

class ParkStates(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode)
    park_code = db.Column(db.Unicode, db.ForeignKey('parks.code'))
    park = db.relationship(Parks, backref=db.backref("states"))

def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'example.com'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    # Set whatever other headers you like...
    return response


# Create the database tables.
db.create_all()

# Create the Flask-Restless API manager.
manager = APIManager(application, flask_sqlalchemy_db=db)

class Searching:
    plant_search_terms = None

def get_many_preprocessor(search_params=None, **kw):
    # make the results like 1000 or something
    print('PRE PROCESSOR WAS CALLED')
    if(search_params != None):
        print('SEARCH PARAMS IS NOT NONE')
        keywords = search_params['search_query'].split()
        attributes = ['category', 'com_name', 'duration', 'family', 'family_com', 'growth', 'sci_name', 'status', 'toxicity']
        listDicts = []
        # for each keywrod
        # add 9 ilike dictionaries where you add a  percentage for each field
        # then do states and name with any and uppercase
        for keyword in keywords:
            for attribute in attributes:
                new_dict = dict(name=attribute, op='ilike', val=keyword)
                listDicts.append(new_dict)
                print(listDicts)
            states_dict = dict(name='states__name', op='any', val=keyword.upper())
            listDicts.append(states_dict)

        search_params["filters"] = [{"or": listDicts}]

        # code that we can throw away
        '''
        assert ('search_query' in search_params)
        search_query = search_params['search_query']
        Searching.plant_search_terms = search_query.split()
        print('PLANT SEARCH TERMS IS NOW')
        print(Searching.plant_search_terms)
        '''
    pass



# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
from itertools import filterfalse
def search_process(result=None, **kw):
    print('POST PROCESSOR CALLED')
    #print(result)
    #print('the size of results is')
    #print(result)

    print('\n\n\n\n\n\n\n')
    print('plant search terms')
    print(Searching.plant_search_terms)
    if(Searching.plant_search_terms != None):
        print('\n\n\n\n\n\n\n')
        print('plant search terms is not null, now filtering')
        def search_filter(plant):
            #include_result = False
            for attribute in list(plant):
                for keyword in Searching.plant_search_terms:
                    #print('attribute, keyword', attribute, keyword)
                    if(isinstance(plant[attribute],str) and keyword in plant[attribute]):
                        print('keeping this one')
                        return False
            print('not keeping this one')
            return True
        print('results before')
        print(len(result['objects']))
        result['objects'][:] = filterfalse(search_filter, result['objects'])
        print('after')
        print(len(result['objects']))



    result['FART'] = 'ASS'

    #print('PAGE 1 ')
    #result = {'hello':  'world'}
    #print(result)
    #print(kw)
    pass
    #return result

# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
# manager.create_api(Person, methods=['GET', 'POST', 'DELETE'])
# manager.create_api(Article, methods=['GET'])


animals_blueprint = manager.create_api(Animals, methods=['GET'])
plants_blueprint = manager.create_api(Plants, methods=['GET'],
                        preprocessors={'GET_MANY': [get_many_preprocessor]},
                        #postprocessors={'GET_MANY': [search_process]} ,
                        max_results_per_page=1000,
                        results_per_page=1000
                        )
parks_blueprint = manager.create_api(Parks, methods=['GET'])

'''
# add the cors header
animals_blueprint.after_request(add_cors_headers)
plants_blueprint.after_request(add_cors_headers)
parks_blueprint.after_request(add_cors_headers)

application.register_blueprint(animals_blueprint)
application.register_blueprint(plants_blueprint)
application.register_blueprint(parks_blueprint)
'''

@application.route('/')
@cross_origin()
def index():
    return "Available endpoints: /api/animals /api/plants /api/parks"

def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    return response

application.after_request(add_headers)

# start the flask loop
application.run()
