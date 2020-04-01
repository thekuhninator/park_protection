FROM node:13

COPY . /app
WORKDIR /app

RUN npm install --save-dev prop-types
RUN npm install --save google-maps-react
RUN npm install react-bootstrap bootstrap
RUN npm install styled-components
RUN npm install react-select
RUN npm install --save react-router-dom
RUN npm install dotenv
RUN npm install mocha --save-dev
RUN npm install chai --save-dev

FROM python:3

RUN pip install --upgrade pip
RUN pip install requests
RUN pip install sqlalchemy
RUN pip install -U python-dotenv


EXPOSE 3000

CMD ["npm", "start"]