export class UserAlreadyExists extends Error {
	constructor() {
		super("Cadastro não pode ser efetuado, pois o e-mail já utilizado!");
	}
}
