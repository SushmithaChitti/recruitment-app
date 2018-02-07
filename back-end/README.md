### NPM Modules

#### Global

* Sequelize CLI
* Gulp
* Nodemon

npm install eslint --save-dev

#### Local

* Lodash
* Async
* Bunyan Logger
* Express Bunyan
* Express Validator

#### Enable Migration

````
npm install -g sequelize-cli
````

#### Create migration

````
sequelize migration:create --name "<file_name>"
````

It will create JS file with data time prefix i.e `20171205-user-add-column.js` with Up and Down Functions

+ Use **queryInterface** to make any changes on Tables
+ Up funtion to transforming to new state
+ Down function to reverting the changes

#### Run migration

`sequelize --config config/db.js db:migrate` to run the Migrations

#### Export and Import Commands Postgres

`pg_dump -h "host" -U "user_name" -c "db_name" > "file_name.sql"`<br />
`psql -h "host" -U "user_name" "db_name" < "file_name.sql"`


#### ESLint