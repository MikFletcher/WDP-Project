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

createPostTable()

function getAllPosts(){
    return posts
}

//CREATE
async function createPost(post) {
    let sql = `
        INSERT INTO post(PostTitle, PostText)
        VALUES("${post.PostText}","${post.PostTitle}");
    `
    return await con.query(sql)

}
async function postExists(PostTitle){
    let sql = `
    SELECT * FROM Post
    WHERE PostTitle = "${PostTitle}"
    `
    return await con.query(sql);
}

//READ
async function findPost (post){
    let cpost = await postExists(post.PostTitle)
    if (!cpost) throw Error("Post you are looking for could not be found")

    return cpost
}

//GET POST
async function getPost(post){
    let sql;
    if(post.PostID){
        sql = `SELECT * FROM Post
        WHERE PostID = ${post.PostID}`
    }else{
        sql = `SELECT * FROM Post
        WHERE PostTitle = "${post.PostTitle}"
        `
    }
    return await con.query(sql)
}
//UPDATE
async function editPost(post){
    const sql = `UPDATE Post SET
    PostText = "${post.PostText}"
    WHERE PostID = "${post.PostID}"
    `;

    await con.query(sql)
    const newPost = await getPost(post)
    return newPost

}

//DELETE
async function deletePost(PostID){
    const sql = `DELETE FROM Post
    WHERE PostID = ${PostID}
    `;
    await con.query(sql)
}

module.exports = {getAllPosts, createPost, editPost, getPost, deletePost, postExists, findPost}