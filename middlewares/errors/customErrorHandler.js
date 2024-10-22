const CustomError = require('../../helpers/error/CustomError');

const customErrorHandler = (err, req, res, next) => {

    let customError = err;
    console.log(customError.message, customError.status);

    if (err.name === "SyntaxError") {
        customError = new CustomError("Unexpected Syntax", 400);
    }

    res.status(customError.status || 500).json({
        success: false,
        message : customError.message || "Internal Server Error"
    });
};


module.exports = customErrorHandler;