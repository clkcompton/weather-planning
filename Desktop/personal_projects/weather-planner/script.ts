// const mysql = require('mysql');
import { mysql } from 'mysql';

import { Injectable } from '@angular/core';
// import mysql from 'mysql';

// var con: any = mysql.createConnection({
//   host: "localhost",
//   user: "weather",
//   password: "password",
//   database: "weather-planner"
// });

// var mysqlConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'weather-planner',
//   password: 'weather-planner',
//   database: 'weather-planner',
//   multipleStatements: true
//   });

// mysqlConnection.connect((err)=> {
//   if(!err) {
//   console.log('Connection Established Successfully');
//   } else {
//   console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
//   }
// });

@Injectable()
export class TestQueryClass {

  constructor(){}

  testQuery(): void {
    console.log("I'm in here")
    // mysqlConnection.query("SELECT * FROM user", (err, rows, fields)=>{
    //   if(!err){
    //     console.log(rows)
    //   } else {
    //     console.log(err);
    //   }
    // })
  }
}

