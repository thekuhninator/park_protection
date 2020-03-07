import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

# engine = create_engine('sqlite:///:memory:', echo=True)



# Base = declarative_base()
# class Test(Base):
# 	__tablename__ = "users"

# 	id = Column(Integer, primary_key=True)
# 	name = Column(String)

# 	def __repr__(self):
# 		return "TestI, name=%s" % (self.name)




# Base.metadata.create_all(engine)
# Session = sessionmaker(bind=engine)
# session = Session()





# a1 = Test(id=1, name="a1")

# session.add(a1)

# a1q = session.query(Test).filter_by(name="a1").first()

# session.commit()

# print(a1q)





# engine = create_engine('postgresql://' + os.getenv('DB_USER') + ':' + os.getenv('DB_PASS') + '@' + os.getenv('DB_HOST') + ':' + os.getenv('DB_PORT') + '/' + os.getenv('DB_NAME'), echo=True)

engine = create_engine('sqlite:///:memory:', echo=True)

Base = declarative_base()

class Animal(Base):
	__tablename__ = 'animals'

	id = Column(Integer, primary_key=True)
	com_name = Column(String)
	sci_name = Column(String)
	status = Column(String)
	list_date = Column(String)
	tax_group = Column(String)
	dps = Column(Boolean)
	aquatic = Column(Boolean)
	bcc = Column(Boolean)
	plan = Column(String)
	image = Column(String)

	states = relationship("AnimalState", back_populates="animal", cascade="all, delete, delete-orphan")

	def __repr__(self):
		return "<Animal(id=%d, com=%s, sci=%s, status=%s, date=%s, group=%s, dps=%r, aquatic=%r, bcc=%r, plan=%s, image=%s)>" % \
		(self.id, self.com_name, self.sci_name, self.status, self.list_date, self.tax_group, self.dps, self.aquatic, self.bcc, self.plan, self.image)

class AnimalState(Base):
	__tablename__ = 'animal_states'

	id = Column(Integer, primary_key=True)
	name = Column(String, nullable=False)
	animal_id = Column(Integer, ForeignKey('animals.id'))

	animal = relationship("Animal", back_populates="states")

	def __repr__(self):
		return "<State(name=%s)>" % self.name

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()
