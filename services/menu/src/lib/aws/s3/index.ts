import { HeadObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { s3Config } from "@config/awsConfig.js";
import { generateFileKey } from "@utils/generateFileKey.js";

type UploadProductImageProps = {
    fileBuffer: Buffer;
    mimetype: string;
};

type UploadProductImageResponse = {
    key: string;
    url: string;
    size?: number;
    contentType?: string;
};

export async function uploadProductImage({ fileBuffer, mimetype }: UploadProductImageProps): Promise<UploadProductImageResponse> {

    const bucket = process.env.AWS_BUCKET_NAME;
    const cdnUrl = process.env.CDN_URL;

    const key = generateFileKey("products", mimetype);

    try {

        const upload = new Upload({
            client: s3Config,

            params: {
                Bucket: bucket,
                Key: key,
                Body: fileBuffer,
                ContentType: mimetype
            },

            queueSize: 4,

            partSize: 5 * 1024 * 1024,

            leavePartsOnError: false
        });

        await upload.done();

        const fileMetadata = await s3Config.send(
            new HeadObjectCommand({
                Bucket: bucket,
                Key: key
            })
        );

        const fileUrl = `${cdnUrl}/${key}`;

        const response: UploadProductImageResponse = {
            key,
            url: fileUrl
        };

        if (fileMetadata.ContentLength !== undefined) {
            response.size = fileMetadata.ContentLength;
        }

        if (fileMetadata.ContentType !== undefined) {
            response.contentType = fileMetadata.ContentType;
        }

        return response;

    } catch (error) {

        console.error("Erro ao enviar imagem:", error);

        throw new Error("Falha ao realizar upload da imagem.");
    }
}