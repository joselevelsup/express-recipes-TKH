import createServer from "./server.js";

const server = createServer();

server.listen(8080, () => {
  console.log("App listening on port 8080");
});
