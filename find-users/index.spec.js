const chai = require("chai");
const expect = chai.expect;

const index = require("./index");

describe("index.js", function() {
    it("finds the environment variables", function() {
        const context = process.env.TEST_ENVIRONMENT;

        expect(context).to.eql("it worked");
    });
});