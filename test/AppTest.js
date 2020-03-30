import request from 'request';
import chai from 'chai';

var expect = chai.expect;
describe("Website", function() {

  describe("Homepage", function() {

    var url = "https://parkprotection.me/";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

  describe("Parks", function() {

    var url = "https://parkprotection.me/Parks";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

  describe("Plants", function() {

    var url = "https://parkprotection.me/Plants";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

  describe("Animals", function() {

    var url = "https://parkprotection.me/Animals";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

  describe("About", function() {

    var url = "https://parkprotection.me/About";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });

  describe("Local", function() {

    var url = "http://localhost:3000/";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });



});