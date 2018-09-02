const bluebird = require("bluebird");
const Chance = require("chance");

global.Promise = bluebird.Promise;
const chance = new Chance();

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: chance.hash(),
        headers: {
            "Content-type": "application/json"
        }
    };

    context.done();
};

