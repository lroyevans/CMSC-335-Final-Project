const { response } = require('express');
const express = require('express');
const server = express();
server.use(express.json());

let dealership = [
    {brand: "Hyundai", model: "Veloster_N", year: 2020}
    ,{brand: "Volkswagen", model: "Golf_R", year: 2017}
    ,{brand: "Ford", model: "Focus_RS", year: 2018}
];

// Sample Fetch:
// fetch('http://localhost:3000/api/dealership/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2024
//   }),
// })
//   .then(response => response.json())
//   .then(data => console.log(data));


//The endpoint we want to use
//api/dealership/:year/:brand/:model
//How we will handle the request, using a callback function

server.post('/api/dealership/', function(request,response){
    if(isNaN(request.body.year) || request.body.brand === 'Yugo'){
        response.status(406).send('406 Make a better request');
    }else{
        const car = {
            brand: request.body.brand,
            model: request.body.model,
            year: request.body.year
        }
        dealership.push(car);
        response.send(dealership);
    }
})

server.get('/api/dealership/', function(request,response){
    response.send(dealership);
})

server.get('/api/dealership/:brand/:model/:year', function(request,response){
    let eq = [];
    for(let i=0; i<dealership.length;i++){
        
        if(dealership[i].brand===request.params.brand &&
            dealership[i].model===request.params.model &&
            dealership[i].year===parseInt(request.params.year)){
                eq.push(dealership[i]);
            }
    }
    response.send(eq);
})

server.delete('/api/dealership', function(request,response){
    let eq = [];
    for(let i=0; i<dealership.length;i++){
        
        if(!(dealership[i].brand===request.body.brand &&
            dealership[i].model===request.body.model &&
            dealership[i].year===parseInt(request.body.year))){
                eq.push(dealership[i]);
            }
    }
    dealership = eq;
    response.send(eq);
})

server.put('/api/dealership/', function(request,response){
    for(let i=0; i<dealership.length;i++){
        
        if(dealership[i].year===request.body.year){
            dealership[i].brand = request.body.brand;
            dealership[i].model = request.body.model;
        }
    }
    response.send(request.body.model);
});



server.listen(3000, ()=>{
    console.log("Connected to port 3000!");
});