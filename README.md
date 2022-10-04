# buyingstuffsonline-stoopid

![MIT license badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Description

- This is an express.js appliction that supports the back end of an e-commerce site. The express.js application is configured to use the npm package Sequelize in order to allow interaction with a MYsQL database.

- The application also utilises the dotenv package to enable the user to store environment variables to store sensitive data such as the user's MySQL username, password and database name.

- The application also uses the npm package mysql2 to connect to the database.


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Screenshot](#screenshot)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Walkthrough](#walkthrough)

## Installation 

To install the required packages to run the application, firstly run "npm i" or "npm install" in the command line at the root of the directory. This will install all the required packages for the application namely dotenv, express, mysql2 and sequelize.

## Usage

- Following installation of the required npm packages, the user should connect to MYsQL. To do this, run "mysql -u [name of user here (usually will be 'root')] -p" in the command line to open up mysql. The user will then be prompted for their mysql password which they need to input in and hit enter. Folowing this, the user will have entered mysql and then should create the database by running "source db/schema.sql". After this the user should get a screenshot like the below. Then run "exit" to exit the mysql interface back to the terminal.

- Once back in the terminal, the user should then run "npm run seed" to feed in the data from the seeds folder into the database.

- Following this, the user should run "npm start" to start the server.


- After following these steps, the user can then utilise an API client like insomnia to interact with the database. The format of the data is JSON. The user can then make queries to access data from the following tables.

- Catergories
- Products
- Tags

- The application supports get requests (to retrieve data from the tables), put requests (to update data within the tables) and post requests (to create new entries for the tables) for all of the above.

## Screenshots



## License

https://opensource.org/licenses/MIT

This project has been generated under license from MIT.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright 2022 Michael Munn

## Contributing
Michael Munn

## Tests
Not Applicable

## Questions

If you have any queries or questions regarding this project, you can contact me at https://github.com/munnos. My other repositories are available at https://github.com/munnos?tab=repositories.

## Walkthrough

Link to walkthrough video demonstrating use of the application: 
