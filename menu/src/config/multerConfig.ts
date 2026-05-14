import multer from "multer";
import crypto from "node:crypto";
import path from "node:path";
import fs from "node:fs";

type MimeTypes = string[];

const uploadDir = "uploads/images";

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = crypto.randomUUID();

        const extension = path.extname(file.originalname);

        const fileName = `${uniqueSuffix}${extension}`;

        cb(null, fileName);
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: (req, file, cb) => {

        const allowedMimeTypes: MimeTypes = [
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/webp"
        ];

        if (!allowedMimeTypes.includes(file.mimetype)) {
            return cb(new Error("Tipo invalido de arquivo"));
        };

        cb(null, true);
    }
});

export { upload };