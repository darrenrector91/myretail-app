# myRetail RESTful service

A RESTful service that can retrieve product and price details by ID

## Technologies Used

* AngularJs
* Node.js
* MongoDB
* Chai
* Mocha
* Sinon
* ngMock
* Express.js
* Mongoose
* Angular Material

## To run a copy of this on your local machine folow the instructions below

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB Download](https://www.mongodb.com/download-center/community)

### Installing
* Clone repository from Github.
* Run ```npm install --save```
* Run ```npm install --save-dev nodemon``` for instant server refesh on save
* Open package.json and add "start": "node server/server.js" to the scripts section right below the    "test" line and don't forget the comma after the line above
* Go the the menu on the side of the filestack and click on the bug icon
* Click the gear icon then the  dropdown above and select 'Launch Program' and then select 'Nodejs'    from the pop up menu 
* Start mongo ```mongod```
* Run ```nodemon```
* Copy and paste ```movies.js``` file to setup basic mock data and uncomment the use at the top of th efile before copying and pasting everything inot the Mopngo Shell

## Notes
* "The Big Lebowski (Blu Ray)" is pulling in from the API whle everything else is directly form MongoDB

## Base Functionality
- [x] Responds to an HTTP GET request at /products/{id} and delivers product data as JSON.
- [x] Performs an HTTP GET to retrieve the product name from an external API
- [x] Reads pricing information from a NoSQL data store and combines it with the product id and name from the HTTP request into a single response

## Stretch Goals
- [ ] Accepts an HTTP PUT request at the same path (/products/{id}), containing a JSON request body similar to the GET response, and updates the product’s price in the data store