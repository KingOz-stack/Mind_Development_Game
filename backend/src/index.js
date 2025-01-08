const server = require("./config/server");
const db_connection = require("./config/database");

const { PORT } = require("./config/constants");


// start the database and the server,  then connect them.

IP_ADDRESS = "127.0.0.1"

db_connection()
    .then(res => {
        console.log("Database Started...");
        
        // initialise the server.
        server.listen(PORT, IP_ADDRESS, () => {
            console.log(`Server started listening at port ${PORT}...`);
        });
    })
    .catch(error => {
        console.log(error);
    });