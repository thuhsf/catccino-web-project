import type { Request, Response } from "express";

function ListProductControlelr(req: Request, res: Response) {
	try {


	} catch (err: Error | any) {
		if (err) throw new Error();

		res
			.status(400)
			.json({
				status: 400,
				message: "Houve um erro interno",
				error: err
			});
	};
};

export { ListProductControlelr };
