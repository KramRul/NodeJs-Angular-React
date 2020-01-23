const express = require('express')
const {
    handleError
} = require('./api/helpers/error')
const accountRouter = require("./api/routes/account.router.js");
const shopAdminRouter = require("./api/routes/shop-admin.router.js");
const shopClientRouter = require("./api/routes/shop-client.router.js");

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});
app.use("/api/", shopClientRouter);
app.use("/api/account", accountRouter);
app.use("/api/admin", shopAdminRouter);
app.use((err, req, res, next) => {
    handleError(err, res);
});
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));