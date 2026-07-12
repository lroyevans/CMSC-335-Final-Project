"use strict";

const express = require("express");   /* Accessing express module */
const app = express();  /* app is a request handler */
const portNumber = 6500;

app.get("/", (request, response) => {
   response.send(`Welcome to the cmsc335 home page`);
});

app.get("/syllabus", (request, response) => {
   response.send(`Class Syllabus`);
});

app.get("/class/:semester", (request, response) => {
   response.send(`Information for semester: ${request.params.semester}`);   
});

app.listen(portNumber);
console.log(`Try: http://localhost:${portNumber}`);
console.log(`Try: http://localhost:${portNumber}/syllabus`);
console.log(`Try: http://localhost:${portNumber}/class/summer`);
console.log(`Try: http://localhost:${portNumber}/invalid`);