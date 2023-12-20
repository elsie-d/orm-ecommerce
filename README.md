# ORM E-Commerce Inventory
    
## Description
This project will help bussines owners keep an inventory of the products the have. 
With this tool, users will be able to create, read, update and procuts and associated fields such as categories and tags.  
            
## Table of Contents
            
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributions)        
- [Questions](#questions)
            
## Installation
- Node.js + dependencies: 
    - dotenv 
    - express
    - mysql2
    - sequelize    
            
            
## Usage
To get started clone this project into your repository and open on your local machine. 
1. Initialize your database by using mysql
   - `SOURCE schema.sql`
   - `USE ecommerce_db`
2. Ensure packages have been installed via server.js
    - Run `npm i`

3. Seed data into database
    - `node seeds/index.js`    

3. Start the connection between your server and the database from server
    -  `npm --watch server.js`

*make sure credential to mysql are stored in .env file for security*    

Once the connection has been established, the user should be able to open an open source app such as Insomnia to Create, Read, Update, and Delete(CRUD) from their local host using the appropriate http request. 

Check out a [demo here](https://drive.google.com/file/d/15aZUeyLxDTQHEZ_D9BGNt4yCBX47Zw6B/view)
            
## Contributions
Reach out to repo owner
              
            
## Questions?
Find me on GitHub: <a href="https://github.com/elsie-d" target="_blank">elsie-d</a>
            
OR
            
Email me at: <a href="mailto:elsie.dh@gmail.com" target="_blank">elsie.dh@gmail.com</a>
  