import { FastifyReply, FastifyRequest } from "fastify";
import { makeTokenUseCase } from "../../use-cases/factories/make-token-use-case";
import { z } from "zod";
import { InvalidCredentialsError } from "../../use-cases/errors/invalid-credencial-error";

export async function token(request: FastifyRequest, reply: FastifyReply) {
	const schemaBody = z.object({
		email: z.string().email("Email is invalid"),
		password: z.string().min(6, "Password must be at least 6 characters"),
	});

	const { email, password } = schemaBody.parse(request.body);

	try {
		const tokenUseCase = makeTokenUseCase();
		const { user } = await tokenUseCase.execute({
			email,
			password,
		});

		const token = await reply.jwtSign(
			{},
			{
				sign: {
					sub: user.id,
				},
			}
		);

		const refreshToken = await reply.jwtSign(
			{},
			{
				sign: {
					sub: user.id,
					expiresIn: "7d",
				},
			}
		);

		return reply
			.status(200)
			.setCookie("refreshToken", refreshToken, {
				path: "/",
				secure: true,
				httpOnly: true,
			})
			.send({ token });
	} catch (err) {
		if (err instanceof InvalidCredentialsError) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
