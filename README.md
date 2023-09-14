
## HNGX STAGE 2 PROJECT

This Readme is a guide to this project from HNGx stage 2 project

## Authors

- [@olasmart](https://github.com/olasmart18)


## Table of content
- prerequisite
- dependencies installations
- Environment variable
- Run Locally
- Project Navigations
 - Project UML

##  Prerequisites
Running this project require you to have the following on your machine and have met some basic knoledge:

- NodeJs and NPM installed on your machine.
- Basic knoledge of expressJs, javaScript and database usage


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`: add a port for this project to run in development mode

`CLOUD_DB_CONNECTION_STRING` this project is been deploy and require you to provide a database connection URI.


## Run Locally

Clone the project

```bash
  git clone https://github.com/olasmart18/Zuri_HNGx_stage2-project.git
```

Go to the project directory

```bash
  cd Zuri_HNGx_stage2-project
```

Install dependencies

```bash
  npm install
```

Start the server,
your server should be running now on any port you have set in your .env
```bash
  npm run start
```


## person's database modelling

The UML diagram below represent the database model and it reationShip 
![My Image](/uml/uml_image.png)

## Test & Response

### Create a new person
`method`: POST
`endpoint`: `/api` :- this endpoint will create a new person object.
`postman test result`: ![My Image](/Documentation/create_Person.png)

### Fetch person's Data
`method`: GET
`endpoint`: `/api/user_id` :- this endpoint will fetch a person's data related to the `ID`.
`postman test result`: ![My Image](/Documentation/fetch_person.png)

### Update person's Data
`method`: PUT
`endpoint`: `/api/user_id` :- this endpoint will update person's data associated with the `ID`.
`postman test result`: ![My Image](/Documentation/update_person.png)

### Delete person's Data
`method`: DELETE
`endpoint`: `/api/user_id` :- this endpoint will delete person's Data with the `ID`.
`postman test result`: ![My Image](/Documentation/delete_person.png)