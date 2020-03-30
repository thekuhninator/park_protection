import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean, Float
from sqlalchemy.orm import sessionmaker
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
import os
from dotenv import load_dotenv

load_dotenv()

# use sqlite in memory for testing and postgresql to store in RDS; BE VERY CERTAIN WHEN COMMITTING TO RDS
engine = create_engine('postgresql://' + os.getenv('DB_USER') + ':' + os.getenv('DB_PASS') + '@' + os.getenv('DB_HOST') + ':' + os.getenv('DB_PORT') + '/' + os.getenv('DB_NAME'))
Base = declarative_base()

class Plant(Base):
	__tablename__ = 'plants'

	id = Column(Integer, primary_key=True)
	com_name = Column(String)
	sci_name = Column(String)
	status = Column(String)
	list_date = Column(String)
	family = Column(String)
	family_com = Column(String)
	category = Column(String)
	duration = Column(String)
	growth = Column(String)
	toxicity = Column(String)
	plan = Column(String)
	image = Column(String)

	states = relationship("PlantState", back_populates="plant", cascade="all, delete, delete-orphan")

	def __repr__(self):
		return "<Plant(id=%d, com=%s, sci=%s, status=%s, date=%s, family=%s, family_com=%s, category=%s, duration=%s, growth=%s, toxicity=%s, plan=%s, image=%s)>" % \
		(self.id, self.com_name, self.sci_name, self.status, self.list_date, self.family, self.family_com, self.category, self.duration, self.growth, self.toxicity, self.plan, self.image)

class PlantState(Base):
	__tablename__ = 'plant_states'

	id = Column(Integer, primary_key=True)
	name = Column(String, nullable=False)
	plant_id = Column(Integer, ForeignKey('plants.id'))

	plant = relationship("Plant", back_populates="states")

	def __repr__(self):
		return "<State(name=%s)>" % self.name

Session = sessionmaker(bind=engine)
session = Session()

todel = session.query(Plant).join(PlantState).filter(PlantState.name.in_(['DC', 'GU', 'MP', 'AS', 'FM', 'PW', 'AK', 'HI', 'PR'])).all()
print(len(todel))

for el in todel:
	session.delete(el)

todel = session.query(Plant).join(PlantState).filter(PlantState.name.in_(['DC', 'GU', 'MP', 'AS', 'FM', 'PW', 'AK', 'HI', 'PR'])).all()
print("\n\nHERE\n\n")
print(todel)

# session.commit()


