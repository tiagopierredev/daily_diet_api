export class UserAlreadyExists extends Error {
	constructor() {
		super("A conta não pode ser criada, ja existe um cadastro com este email.");
	}
}
