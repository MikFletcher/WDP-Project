const con = require("./db_connect")

async function createUsertable(){
    let sql = `
        CREATE TABLE IF NOT EXISTS User(
            UserID INT NOT NULL AUTO_INCREMENT,
            Username VARCHAR(25) NOT NULL UNIQUE,
            Password VARCHAR(25) NOT NULL,
            Email VARCHAR(255) NOT NULL UNIQUE,
            FirstName VARCHAR(255) NOT NULL
            LastName VARCHAR(255) NOT NULL
            CONSTRAINT userPK PRIMARY KEY(userID)
        );
    `
    await con.query(sql)
}

createUsertable()

async function getAllUsers(){
    let sql = `
    SELECT * FROM User;
    `

    return await con.query(sql)
}

module.exports = {getAllUsers}