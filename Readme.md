
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Getting Started](#getting-started)
    - [Download and install dependencies:](#download-and-install-dependencies)
    - [Initializing prisma](#initializing-prisma)
    - [Connecting to your database](#connecting-to-your-database)
    - [Running your API](#running-your-api)



# Getting Started
postgresql=>create the database

running on localhost:4000
### Download and install dependencies:

To install  run the command:
npm install express
npm install nodemon
npm install prisma -d


### Initializing prisma
Run the following commad in your terminal npx prisma init which comes with .env file and prisma folder

### Connecting to your database
To connect to your database open .env file, you will find a pre-written code, e.g, DATABASE_URL="postgresql://username:password@localhost:5432/databaseName?schema=public where username: your username, password is your password, databaseName is the name of your database

Run the following command to sync your PostgreSQL database . This also creates the  tables defined in prisma/schema.prisma: **npx prisma migrate dev --name init**


### Running your API
Using the API
Testing with Postman/Insomnia
Open Postman/Insomnia and create a new request. Select the HTTP method (GET, POST, PUT, DELETE) and enter the endpoint URL. For POST and PUT requests, go to the Body tab, select raw, and choose JSON format. Enter the request body as shown in the examples. Send the request and review the response.

 Using the REST API You can access the REST API using the following endpoints:


1- Get all products
Method GET /products Fetch all products in the table.
i.e. localhost:4000/products

2 - Get a single product
Method GET /products/:id Fetch a single product by its ID.

i.e. localhost:3005/products/3


3 - Create a single product
Method POST /products Create a new product.

i.e localhost:4000/products

Request body:

{
  "productthumbnail": "http://dummyImage",
  "producttitle": "Oil",
  "productdescription": "This is the first product",
  "productcost": 4,
  "onoffer": true
}
4 - Updating a product
Method PATCH /products/:id: Toggle the publish value of a post by its ID.

i.e localhost:3005/products/4

Request body:

{
  "productthumbnail": "http://dummyImage4",
  "producttitle": "Backing Floor",
  "productdescription": "This is the second product",
  "productcost": 50,
  "onoffer": false
}
5 - Deleting a product
Method DELETE /products/:id: Toggle the publish value of a post by its ID.

i.e localhost:4000/products/4
Create a readme file for localhost 4000 with this format
