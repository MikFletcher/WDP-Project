const con = require("./db_connect")

async function createPostTable(){
    let sql = `
        CREATE TABLE IF NOT EXISTS Post(
            PostID INT NOT NULL AUTO_INCREMENT,
            PostTitle VARCHAR(255) NOT NULL,
            PostText VARCHAR(max) NOT NULL,
            UserID INT,
            CONSTRAINT postPK PRIMARY KEY(PostID),
            CONSTRAINT userFK FOREIGN KEY(userID) REFERENCES User(UserID)
        );
    `
    await con.query(sql)
}

function getAllPosts(){
    return posts
}

module.exports = {getAllPosts}