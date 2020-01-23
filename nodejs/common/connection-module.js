const mongoose = require("mongoose");
const {
    CONNECTION_STRING
} = require("../common/common-variables");
let connection;
mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(data => {
    console.log('Connected successfully')
    connection = data;
    return;
}).catch(err => {
    console.log(err);
    throw new ErrorHandler(500, 'Server internal error');
});

module.exports = connection;