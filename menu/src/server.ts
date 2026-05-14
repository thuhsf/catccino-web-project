import http from "node:http";
import "@config/redisClient.js";
import { waitForDb } from "@utils/wait-for-db.js";

const server = http.createServer();

const PORT = process.env.PORT || 4000;

async function bootstrap() {
	try {
		await waitForDb(20, 3000);

		server.listen(Number(PORT), () => {
			console.log(`Ouvindo na porta ${PORT}`);
		});
	} catch (err) {
		console.error("Erro ao iniciar aplicação:", err);
		process.exit(1);
	};
};

bootstrap();