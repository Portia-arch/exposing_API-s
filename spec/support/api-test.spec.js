
let User = {
   name:'portia',
   ass_name:'hloni',
   age:'21',
   date:'12/02/2020',
   time: '12:30',
   comment: 'yey'
};

let updatedUser = {
  id: 1,
  name: "Kopano",
  ass_name: "Sbongiseni",
  age: "23",
  date: "12/08/2020",
  time: "12:45",
  comment: "Hey y'all"
};


 describe("GET /viewVisitor", function() {

    var axios = require("axios");

     it("should returns all visitors", async function(done) {
         
         const base_url = await axios.get(
           "http://localhost:3001/viewVisitor"
         );

            //  request.get(base_url, function(error, response, body) {
             expect(response.data.visitors).not.toBe([]);
             done();
         });
    });
//  });