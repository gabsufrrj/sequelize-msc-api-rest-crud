const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFile = [
  './src/api',   
];

swaggerAutogen(outputFile, endpointsFile);