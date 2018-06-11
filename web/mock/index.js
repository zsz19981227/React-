const data = require('./data.json')
module.exports = function(app) {
    app.get("/api", function(req, res, next) {
        res.send(data);
    });
};