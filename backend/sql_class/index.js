const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  database:'delta_app',
  password:'Utkarsh@9955'      
});


// insert into users using placeholder

let q = "INSERT INTO users (id,username,email,password_hash) VALUES ?";
let users1 = [
  ["101","123_ab","abc@gmail.com","abc121b"],
  ["102","123_abc","utkarsh@gmail.com","abc121b"]
];

try{
  connection.query(q, [users1], (err,result) => {
    if(err) throw err;
    console.log(result);
  });

}
catch(err){    
  console.log(err); 
}


// try{
//   connection.query("SHOW TABLES",(err,result) =>{
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
//   });

// }
// catch(err){
//   console.log(err);
// }

let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    name: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser());
