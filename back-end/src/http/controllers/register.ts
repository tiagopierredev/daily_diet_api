import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeRegisterUseCase } from "../../use-cases/factories/make-register-use-case";
import { UserAlreadyExists } from "../../use-cases/errors/user-already-exists";

export async function register(request: FastifyRequest, reply: FastifyReply) {
	const schemaBody = z.object({
		email: z.string().email("Email inválido!"),
		name: z.string(),
		password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres!"),
		confirmPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres!"),
		photo: z.string().url("A URL da imagem é inválida!").optional(),
	}).refine(data => data.password === data.confirmPassword, {
		message: "As senhas não correspondem!",
	});

	try {
		const { email, name, password, photo } = schemaBody.parse(request.body);
		const createUserUseCase = makeRegisterUseCase();
		await createUserUseCase.execute({
			email,
			name,
			password,
			photo: photo || "",
		});
		reply.status(201).send({
			message: "Cadastro realizado com sucesso!",
		});
	} catch (err) {
		if (err instanceof UserAlreadyExists) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
