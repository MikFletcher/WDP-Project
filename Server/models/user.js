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

async function userExists(user) {
  let sql = `
      SELECT * FROM User
      WHERE Username="${user.username}"
  `
  let cuser = await con.query(sql)
  return cuser[0]
}

//CREATE(register)
async function register(user){
    let cuser = await userExists(user)
    if(cuser) throw Error("Username Unavailable")

    let sql = `
        INSERT INTO user(Username, Password, Email)
        VALUES("${user.username}", "${user.password}", "${user.email}");
    `
    //firstname lastname?? idk
    await con.query(sql)
    return await userExists(user) 
}

//READ(login)
async function login(user) {
    let cuser = await userExists(user)
    if(!cuser) throw Error("Username does not exist")
    if(user.password !== cuser.Password) throw Error("Incorrect Password")

    return cuser
}

//getUser on ID or Name
async function getUser(user) {
    let sql
    if(user.UserID){
        sql = `SELECT * FROM User
        WHERE UserID = ${user.UserID}
        `
    }else{
        sql = `SELECT * FROM User
        WHERE Username = "${user.username}"
        `
    }
    return await con.query(sql)
}

//UPDATE(edit)
async function editUser(user) {
    const sql = `UPDATE User SET
    username = "${user.username}"
    WHERE UserID = ${user.UserID}
    ;`//something is off here

    await con.query(sql);
    const newUser = await get //Need to make getUser function
    return newUser
}


module.exports = {getAllUsers, register, login}