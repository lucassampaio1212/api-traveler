import crypto from "crypto";
import multer from "multer";
import path,{ resolve, } from "path";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");
export default {
  tmpFolder,
  storage: multer.diskStorage({
      destination: tmpFolder,
      filename: (request, file, callback) => {
          const filehash = crypto.randomBytes(10).toString("hex");
          const fileName = `${filehash}-${file.originalname}`;

          return callback(null, fileName);
      },
  }),
};

