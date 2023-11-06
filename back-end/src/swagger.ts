import { SwaggerOptions } from "@fastify/swagger";

export const swaggerOptions: SwaggerOptions = {
	swagger: {
		info: {
			title: "Diet Daily API",
			version: "1.0.0",
			description: "Documentation of API v1 of Diet Daily",
			contact: {
				email: "tiagopierre.dev@icloud.com",
			},
		},
		securityDefinitions: {
			apiKey: {
				type: "apiKey",
				name: "Authorization",
				in: "header",
			},
		},
	},
};

export const swaggerSchema = {
	token: {
		description: "Route for user authentication",
		tags: ["Authentication"],
		body: {
			type: "object",
			properties: {
				email: {
					type: "string",
					default: "exemplo@gmail.com",
				},
				password: {
					type: "string",
					default: "senha123",
				},
			},
			required: ["email", "password"],
		},
	},
	refreshToken: {
		description: "Route for user refresh authentication",
		tags: ["Authentication"],
	},
	register: {
		description: "Route for user registration",
		tags: ["User"],
		body: {
			type: "object",
			properties: {
				email: {
					type: "string",
				},
				name: {
					type: "string",
				},
				password: {
					type: "string",
				},
			},
			required: ["email", "name", "password"],
		},
	},
	me: {
		description: "Route for get user details",
		tags: ["User"],
		security: [
			{
				apiKey: [],
			},
		],
	},
	updateMe: {
		description: "Route for update user details",
		tags: ["User"],
		body: {
			type: "object",
			properties: {
				email: {
					type: "string",
				},
				name: {
					type: "string",
				},
				password: {
					type: "string",
				},
			},
			required: [],
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	deleteMe: {
		description: "Route for delete user",
		tags: ["User"],
		security: [
			{
				apiKey: [],
			},
		],
	},
	createSnack: {
		description: "Route for create snack",
		tags: ["Meals"],
		body: {
			type: "object",
			properties: {
				name: {
					type: "string",
				},
				description: {
					type: "string",
				},
				date: {
					type: "string",
					default: new Date(),
				},
				isDiet: {
					type: "boolean",
				},
			},
			required: ["name", "description", "date", "isDiet"],
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	updateSnack: {
		description: "Route for update snack",
		tags: ["Meals"],
		body: {
			type: "object",
			properties: {
				name: {
					type: "string",
				},
				description: {
					type: "string",
				},
				date: {
					type: "string",
					default: new Date(),
				},
				isDiet: {
					type: "boolean",
				},
			},
			required: ["name", "description", "date", "isDiet"],
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	deleteSnack: {
		description: "Route for delete user",
		tags: ["Meals"],
		security: [
			{
				apiKey: [],
			},
		],
	},
	getUniqueSnack: {
		description: "Route for get unique snack details",
		tags: ["Meals"],
		security: [
			{
				apiKey: [],
			},
		],
	},
	dashboard: {
		description: "Route for get user details",
		tags: ["Dashboard"],
		security: [
			{
				apiKey: [],
			},
		],
	},
};
