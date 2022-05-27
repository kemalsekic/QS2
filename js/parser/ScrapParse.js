// var treeData = require('../../testResults.json');
// console.log(treeData)

// $.get('../testResults.json')
//     .done(data => {
//         let theData;
//         try{
//             theData = JSON.parse(data);
//         } catch(err){
//             theData = {};
//         }
//     });
import fetch from "node-fetch";

fetch('../../testResults.json')
    .then(data => data.json())
    .then(data => {
        console.log(data);
    });

var testResults = {
    title: ".as() - alias a DOM element for later use",
    fullTitle: "Aliasing .as() - alias a DOM element for later use",
    timedOut: null,
    duration: 822,
    state: "passed",
    speed: "fast",
    pass: true,
    fail: false,
    pending: false,
    context: null,
    code: "// https://on.cypress.io/as\n// Alias a DOM element for use later\n// We don't have to traverse to the element\n// later in our code, we reference it with @\ncy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('firstBtn'); // when we reference the alias, we place an\n// @ in front of its name\ncy.get('@firstBtn').click();\ncy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');",
    err: {},
    uuid: "10568ed4-ca23-41f3-ae84-5d6b79094d57",
    parentUUID: "e47ba7c1-3eb3-47b1-8348-b74f3b430764",
    isHook: false,
    skipped: false,
  };
    