  // obtains access to the port
describe("Server", () => {

const axios = require("axios");
const { Pool } = require("pg")

  const visitor = {
    name: "Portia",
    ass_name: "Hloni",
    age: "13",
    date: "12/06/2010",
    comment: "Ssssh!"
  }

  let port;

  beforeAll(() => {
    port = require("../../src/app");
  });

    fit("should add a new visitorObj using POST / addNewVisitor", async function(req, res, next) {
      visitorObj = await axios.post('http://localhost:3001/addNewVisitor', visitor);
      visitorObj =  visitorObj.data.visitor

      try {
        expect(visitorObj.name).toEqual(visitor.name)
        expect(visitorObj.ass_name).toEqual(visitor.ass_name)
        expect(visitorObj.age).toEqual(visitor.age)
        expect(visitorObj.date).toEqual(visitor.date)
        expect(visitorObj.time).toEqual(visitor.time)
        expect(visitorObj.comment).toEqual(visitor.comment)
    } catch (error) {
      console.log(error);
    }
  });

  it("should view a new visitors using GET/ viewVisitor", async function (req, res, next) {
    visitorObj = await axios.gett("http://localhost:3001/viewVisitor", {
      name: "Portia",
      ass_name: "Hloni",
      age: "13",
      date: "12/06/2010",
      comment: "Ssssh!"
    });
    try {
      expect(visitorObj.data).toEqual([Object({ visitorname: 'portia', asssistantname: 'hloni', visitorage: 13, visitdate: '12/06/2010', visittime: '00:30:00', comments: 'Ssssh' })])
    } catch (error) {
      console.log(error);
    }
  });

  it("should add a new visitorObj using POST / addNewVisitor", async function (req, res, next) {
    visitorObj = await axios.post("http://localhost:3001/addNewVisitor", {
      name: "Portia",
      ass_name: "Hloni",
      age: "13",
      date: "12/06/2010",
      comment: "Ssssh!"
    });
    try {
      expect(visitorObj.data).toEqual([Object({ visitorname: 'portia', asssistantname: 'hloni', visitorage: 13, visitdate: '12/06/2010', visittime: '00:30:00', comments: 'Ssssh' })])
    } catch (error) {
      console.log(error);
    }
  });

  it("should add a new visitorObj using POST / addNewVisitor", async function (req, res, next) {
    visitorObj = await axios.post("http://localhost:3001/addNewVisitor", {
      name: "Portia",
      ass_name: "Hloni",
      age: "13",
      date: "12/06/2010",
      comment: "Ssssh!"
    });
    try {
      expect(visitorObj.data).toEqual([Object({ visitorname: 'portia', asssistantname: 'hloni', visitorage: 13, visitdate: '12/06/2010', visittime: '00:30:00', comments: 'Ssssh' })])
    } catch (error) {
      console.log(error);
    }
  });
  
  });