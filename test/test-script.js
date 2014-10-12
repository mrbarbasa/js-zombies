
var expect = chai.expect;
var should = chai.should();
var sandbox;

beforeEach(function() {
  // create a sandbox
  sandbox = sinon.sandbox.create();
  sinon.spy(window.console, "log");
});

afterEach(function() {
  sandbox.restore();
  console.log.restore();
});