import { FastifyReply, FastifyRequest } from "fastify";
import imgbbUploader from "imgbb-uploader";

import { env } from "../../env";
import { z } from "zod";

export async function upload(request: FastifyRequest, reply: FastifyReply) {
	const schemaBody = z.object({
		base64: z.string(),
	});

	try {
		const { base64 } = schemaBody.parse(request.body);

		const { url } = await imgbbUploader({
			apiKey: env.IMGBB_API_KEY,
			base64string: base64,
		});

		reply.code(201).send({ url });
	} catch {
		reply.code(400).send({ message: "Erro ao enviar imagem." });
	}
}
