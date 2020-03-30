#frontend
FROM node:10

RUN npm install --save-dev prop-types
RUN npm install --save google-maps-react
RUN npm install react-bootstrap bootstrap
RUN npm install styled-components
RUN npm install react-select
RUN npm install --save react-router-dom
RUN npm install dotenv
RUN pip install flask
RUN npm install mocha --save-dev
RUN npm install chai --save-dev
RUN pip install requests
RUN pip install sqlalchemy
RUN pip install dotenv
