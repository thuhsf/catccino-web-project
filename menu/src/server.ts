import http from "node:http";

const server = http.createServer();

const PORT = process.env.PORT || 4000;

server.listen(Number(PORT), () => {
	console.log(`Ouvindo na porta ${PORT}`)
})
