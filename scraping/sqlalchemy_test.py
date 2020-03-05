import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import sessionmaker

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





engine = create_engine('postgresql://:@', echo=True)

Base = declarative_base()
class Test(Base):
	__tablename__ = "test"

	id = Column(Integer, primary_key=True)
	com = Column(String)
	sci = Column(String)
	status = Column(String)
	ldate = Column(String)
	agroup = Column(String)
	dps = Column(Boolean)
	aquatic = Column(Boolean)
	bcc = Column(Boolean)
	states = Column(String)
	plan = Column(String)

	def __repr__(self):
		return "TestInst: id=%d,com=%s,sci=%s,status=%s,ldate=%s,agroup=%s,dps=%r,aquatic=%r,bcc=%r,states=%s,plan=%s" % \
		(self.id, self.com, self.sci, self.status, self.ldate, self.agroup, self.dps, self.aquatic, self.bcc, self.states, self.plan)

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()


caq = session.query(Test).filter_by(states="HI").first()

print(caq)





