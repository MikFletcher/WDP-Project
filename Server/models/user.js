const users = [
    {
        userId: 12345,
        userName: "personGuy734",
        password: "pswdhere",
        email: "email@place.com",
        fullName: "John Doe",
        birthdate: "02/16/95"
    }
]

function getAllUsers(){
    return users
}

module.exports = {getAllUsers}