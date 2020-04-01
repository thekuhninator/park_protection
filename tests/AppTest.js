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
    it("expect no error returned", function(done) {
      request(url, function(error, response, body) {
        expect(error).to.equal(null);
        done();
      });
    });
    it("verify that homepage is loading properly", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.not.equal(null);
        done();
      });
    });

  });

  // describe("Parks", function() {

  //   var url = "https://parkprotection.me/Parks";

  //   it("returns status 200", function(done) {
  //     request(url, function(error, response, body) {
  //       expect(response.statusCode).to.equal(200);
  //       done();
  //     });
  //   });

  // });

  // describe("Plants", function() {

  //   var url = "https://parkprotection.me/Plants";

  //   it("returns status 200", function(done) {
  //     request(url, function(error, response, body) {
  //       expect(response.statusCode).to.equal(200);
  //       done();
  //     });
  //   });

  // });

  // describe("Animals", function() {

  //   var url = "https://parkprotection.me/Animals";

  //   it("returns status 200", function(done) {
  //     request(url, function(error, response, body) {
  //       expect(response.statusCode).to.equal(200);
  //       done();
  //     });
  //   });

  // });

  // describe("About", function() {

  //   var url = "https://parkprotection.me/About";

  //   it("returns status 200", function(done) {
  //     request(url, function(error, response, body) {
  //       expect(response.statusCode).to.equal(200);
  //       done();
  //     });
  //   });

  // });
});

describe("Local", function() {

  describe("Homepage", function() {

    var url = "http://localhost:3000/";

    it("returns status 200 on homepage", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("expect no error returned on homepage", function(done) {
      request(url, function(error, response, body) {
        expect(error).to.equal(null);
        done();
      });
    });
    it("verify that homepage is loading properly", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.not.equal(null);
        done();
      });
    });

  });

  describe("Parks", function() {

    var url = "http://localhost:3000/Parks";

    it("expect no error returned on parks page", function(done) {
      request(url, function(error, response, body) {
        expect(error).to.equal(null);
        done();
      });
    });
    it("verify that parks page is loading properly", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.not.equal(null);
        done();
      });
    });

  });

  describe("Instance", function() {

    var url = "http://localhost:3000/Animals/32";

    it("expect no error returned on instance page", function(done) {
      request(url, function(error, response, body) {
        expect(error).to.equal(null);
        done();
      });
    });
    it("verify that instance page is loading properly", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.not.equal(null);
        done();
      });
    });

  });



});
