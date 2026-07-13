"use strict";

const express = require("express");
const app = express();
const http = require('http');
const fs = require('fs');
const path = require("path");
const { render } = require("ejs");
const bodyParser = require("body-parser");
const portNumber = 5000;
const httpResponseStatusCodeOK = 200;
const httpResponseStatusCodeNotFound = 404;

if (process.argv.length != 3) {
  process.stdout.write(`Usage supermarketServer.js jsonFile`);
  process.exit(1);
}
const list = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8')).itemsList;


app.listen(portNumber); 
console.log(`SM Web server is running at http://localhost:${portNumber}`);

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "templates"));

//landing
app.get("/", (request, response) => { /* You implement */
    response.render("index");
});

//item display
app.get("/catalog", (request, response) => { /* You implement */ 
    let variables = {
        itemsTable: "<table>\n<tr>\n<th>Item</th>\n<th>Cost</th>\n</tr>"
    };
     list.forEach(element => {
        variables.itemsTable += `<tr><td>${element.name}</td><td>${element.cost.toFixed(2)}</td></tr>\n`;
    });
    variables.itemsTable += "</table>\n"
    response.render("displayItems", variables);
});

//order page
app.get("/order", (request, response) => { /* You implement */ 
    let vars = {
        items: ""
    };
    list.forEach(element => {
        vars.items += `<option value="${element.name}">"${element.name}</option>\n`;
    });
    response.render("placeOrder", vars);
});

class Order{
    #total = 0;
    constructor(name, email, delivery, itms = []){
        this.name = name;
        this.email = email;
        this.delivery = delivery;
        this.itms = itms;
    }

    get total(){
        return this.#total;
    }

    makeTable(){
        let resp = "<table>\n<tr>\n<th>Item</th>\n<th>Cost</th>\n</tr>\n";
        list.forEach(element =>{
           if(this.itms.includes(element.name)){
                this.#total += element.cost;
                resp += `<tr><td>${element.name}</td><td>${element.cost.toFixed(2)}</td></tr>\n`;
            }
        });
        resp += `<tr><td>Total Cost:</td><td>${this.total.toFixed(2)}</td></tr></table>` 
        return resp;
    }
}


//order proccessing and final page
app.use(bodyParser.urlencoded({extended:false}));

app.post("/order", (request, response) => { /* You implement */ 
    let {name, email, delivery, itemsSelected, orderInformation} =  request.body;
    let bigO = new Order(name, email, delivery, itemsSelected);
    bigO.orderTable = bigO.makeTable();
    response.render("orderConfirmation", bigO);
});

//console interation
const prompt = "Type itemsList or stop to shutdown the server: ";
process.stdin.setEncoding("utf8"); /* encoding */
process.stdout.write(prompt);

process.stdin.on('readable', () => {  /* on equivalent to addEventListener */
    const dataInput = process.stdin.read();
    if (dataInput !== null) {
		const command = dataInput.trim();
		if (command === "stop") {
			// Not using console.log as it adds a newline by default
			process.stdout.write("Shutting down the server"); 
            process.exit(0);  /* exiting */
        } else if(command === "itemsList"){
            //read from JSON 
            let resp = "[\n";
            //need a "," at end for all but last element 
            list.forEach(element => {
                resp += `\t{ name: '${element.name}', cost: ${element.cost} },\n`
            });
            let commaIdx = resp.length - 2;
            resp = resp.slice(0,commaIdx) + resp.slice(commaIdx + 1);
            resp += "]";
            console.log(resp);
        } else {
			/* After invalid command, we cannot type anything else */
			process.stdout.write(`Invalid command: ${command}\n`);
		}
        process.stdout.write(prompt);
		process.stdin.resume(); // Allows the code to process next request
    }
});