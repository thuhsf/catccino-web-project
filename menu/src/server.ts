import http from "node:http";
import { waitForDb } from "@utils/wait-for-db.js";
import { AppServer } from "./app.js";

const server = http.createServer(AppServer);

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