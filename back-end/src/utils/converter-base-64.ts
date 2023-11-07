import { MultipartFile } from "@fastify/multipart";
import fs from "fs";

export async function convertBase64(data: MultipartFile) {
	// Crie um arquivo temporário para salvar a imagem
	const tempFilePath = "/tmp/uploaded_image";

	// Crie um fluxo de escrita para salvar o arquivo
	const writeStream = fs.createWriteStream(tempFilePath);

	// Pipe a parte do upload para o fluxo de escrita
	data.file.pipe(writeStream);

	await new Promise((resolve, reject) => {
		writeStream.on("finish", resolve);
		writeStream.on("error", reject);
	});

	// Leia o arquivo temporário e converta-o para base64
	const fileBuffer = fs.readFileSync(tempFilePath);
	const base64Data = fileBuffer.toString("base64");

	// Exclua o arquivo temporário
	fs.unlinkSync(tempFilePath);

	return base64Data;
}
