#frontend
FROM node:10

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

EXPOSE 3000

CMD ["npm", "start"]