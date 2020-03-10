from flask import Flask
from flask_restless import APIManager
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
import os
from dotenv import load_dotenv


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

# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
animals_blueprint = manager.create_api(Animals, methods=['GET'])
plants_blueprint = manager.create_api(Plants, methods=['GET'])
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

# start the flask loop
application.run()
