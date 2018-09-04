const bluebird = require("bluebird");
const Chance = require("chance");

global.Promise = bluebird.Promise;
const chance = new Chance();

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log('TEST_ENVIRONMENT:' + process.env.TEST_ENVIRONMENT);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "New Content: " + chance.hash(),
        headers: {
            "Content-type": "application/json"
        }
    };

    context.done();
};

