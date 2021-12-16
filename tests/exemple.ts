const chais = require("chai");
const expects = chais.expect;

describe("smoke test", function () {
  it("checks equality", function () {
    let value = true;
    expects(value).to.be.true;
    ;
  });
});