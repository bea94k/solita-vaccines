# solita-vaccines

Recruitment tech task at Solita - calculating and showing data about vaccines for the period of 2nd Jan 2021 - 12th Apr 2021.

# Tech

- React (create-react-app)
- Node.js as serverless backend using [Serverless Framework](https://www.serverless.com/)
- MySQL
- [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)

# Prerequisites

## Serverless

You need globally installed serverless. To check if you already have it (check the version), run

```
$ serverless -v
```

If it doesn't show the version numbers, install by running

```
$ npm install -g serverless
```

## MySQL

You need MySQL server up and running. To install it on Mac through Homebrew, run

```
$ brew install mysql
```

Check [MySQL page](https://www.mysql.com/) for instructions for Windows and for installation files.

By default, this app uses user `root` with password `''` (empty string, no password). If you want to use a different user, change the credentials in `backend/functions/mysql/config.js`.

The `mysql` node package doesn't support MySQL 8 default authentication method, so the app might throw errors ([more info](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)). Since this app is a private project and not meant for production, it is to be used with the less secure `mysql_native_pasword`. To set this up, log into MySQL in the terminal and run

```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''
```

(or with different user and password, but remember to change it in `config.js`).

# Setup

## Installation of packages

Install npm packages in frontend and in backend by running

```
$ cd frontend
$ yarn install
$ cd ..
$ cd backend
$ yarn install
```

## MySQL - database creation and population

Create a database by logging into MySQL in the terminal and running

```
mysql> DROP DATABASE IF EXISTS solitaVaccines;
     CREATE DATABASE solitaVaccines;
```

Caution! If you previously had a database named exactly `solitaVaccines`, it will be deleted! If needed, change the database name in this command and in `backend/functions/mysql/config.js`.

Populate the database by running

```
$ node backend/mySqlPopulate.js
```

The process is done when you see

```
Populate vaccinations OK
Populating orders OK
Closing the database connection.
```

## The app

Spin up the backend by

```
$ cd backend
$ yarn start
```

Leave the terminal open. Serverless should show the available endpoints. If there are errors about lack of connection, open the connection to your MySQL server by

```
$ curl http://localhost:3001/dev/start-mysql-connection
```

In a new terminal window, run

```
$ cd frontend
$ yarn start
```

to open the frontend at `http://localhost:3000`.
