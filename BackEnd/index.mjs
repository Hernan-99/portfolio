import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end();
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor corriendo en el puerto: http://127.0.0.1:3000");
});
