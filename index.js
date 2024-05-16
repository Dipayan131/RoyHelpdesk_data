const jsonServer = require("json-server"); // importing json-server library

//Server 1
const server1 = jsonServer.create();
const router1 = jsonServer.router("db1.json");
const middlewares1 = jsonServer.defaults();
const port1 = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server1.use(middlewares1);
server1.use(router1);

server1.listen(port1);

// Server 2
const server2 = jsonServer.create();
const router2 = jsonServer.router("db2.json");
const middlewares2 = jsonServer.defaults();
const port2 = process.env.PORT + 1 || 8081; // Use a different port for the second server

server2.use(middlewares2);
server2.use(router2);

server2.listen(port2)
