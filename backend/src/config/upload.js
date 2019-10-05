const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);        // extensao do arquivo
            const name = path.basename(file.originalname, ext); // nome original do arquivo

            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};