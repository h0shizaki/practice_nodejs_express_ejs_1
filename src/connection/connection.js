const mysql = require('mysql')

const dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database: 'nodejsapi'
})

dbCon.connect( (error)=>{
    if(error){
        console.log(error);
        throw error
    }
    else{
        console.log("DB connected!")
    }
});

module.exports = dbCon ;