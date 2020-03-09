from flask import Flask
from flask_restless import APIManager
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv

# Load environemnt variables
load_dotenv()
# Create the Flask application and the Flask-SQLAlchemy object.
application = Flask(__name__)

# application.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///memory'
application.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://' + os.environ['DB_USER'] + ':' + os.environ['DB_PASS'] + '@' + os.environ['DB_HOST'] + ':' + os.environ['DB_PORT'] + '/' + os.environ['DB_NAME']

db = SQLAlchemy(application)

# Create your Flask-SQLALchemy models as usual but with the following two
# (reasonable) restrictions:
#   1. They must have a primary key column of type sqlalchemy.Integer or
#      type sqlalchemy.Unicode.
#   2. They must have an __init__ method which accepts keyword arguments for
#      all columns (the constructor in flask.ext.sqlalchemy.SQLAlchemy.Model
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

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    com = db.Column(db.Unicode)
    sci = db.Column(db.Unicode)
    status = db.Column(db.Unicode)
    ldate = db.Column(db.Unicode)
    agroup = db.Column(db.Unicode)
    dps = db.Column(db.Boolean)
    aquatic = db.Column(db.Boolean)
    bcc = db.Column(db.Boolean)
    states = db.Column(db.Unicode)
    plan = db.Column(db.Unicode)

# Create the database tables.
db.create_all()

# Create the Flask-Restless API manager.
manager = APIManager(application, flask_sqlalchemy_db=db)

# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
manager.create_api(Test, methods=['GET'])
manager.create_api(Animals, methods=['GET'])

@application.route('/')
def index():
    return "Available endpoints: /api/animals"

# start the flask loop
application.run()

