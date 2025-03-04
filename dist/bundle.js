(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "stats": {
    "suites": 1,
    "tests": 2,
    "passes": 1,
    "pending": 0,
    "failures": 1,
    "start": "2022-05-28T18:03:43.364Z",
    "end": "2022-05-28T18:04:01.432Z",
    "duration": 18068,
    "testsRegistered": 2,
    "passPercent": 50,
    "pendingPercent": 0,
    "other": 0,
    "hasOther": false,
    "skipped": 0,
    "hasSkipped": false
  },
  "results": [
    {
      "uuid": "75d6ce36-ed1b-4a4b-889e-8b4c12beb0e8",
      "title": "",
      "fullFile": "cypress/integration/kemal/kemal.spec.js",
      "file": "cypress/integration/kemal/kemal.spec.js",
      "beforeHooks": [],
      "afterHooks": [],
      "tests": [],
      "suites": [
        {
          "uuid": "c8f4f99b-6f54-467d-bd95-7fd9c3d3df2d",
          "title": "First Test",
          "fullFile": "",
          "file": "",
          "beforeHooks": [],
          "afterHooks": [],
          "tests": [
            {
              "title": "Fill out Contact Form and do not submit",
              "fullTitle": "First Test Fill out Contact Form and do not submit",
              "timedOut": null,
              "duration": 5983,
              "state": "passed",
              "speed": "medium",
              "pass": true,
              "fail": false,
              "pending": false,
              "context": null,
              "code": "cy.get('#name').type('QStack', {\n  force: true\n});\ncy.get('#email').type('kemalsekic@gmail.com', {\n  force: true\n});\ncy.get('#subject').type('Test Form Fill', {\n  force: true\n});\ncy.get(':nth-child(3) > .form-control').type('Sample Message from QStack OS', {\n  force: true\n});",
              "err": {},
              "uuid": "3d11bbab-f286-4d62-92b7-2d74f8e6b615",
              "parentUUID": "c8f4f99b-6f54-467d-bd95-7fd9c3d3df2d",
              "isHook": false,
              "skipped": false
            },
            {
              "title": "This is a Failing Test",
              "fullTitle": "First Test This is a Failing Test",
              "timedOut": null,
              "duration": 6305,
              "state": "failed",
              "speed": null,
              "pass": false,
              "fail": true,
              "pending": false,
              "context": "{\n  \"title\": \"cypress-mochawesome-reporter-screenshots\",\n  \"value\": [\n    [\n      {\n        \"title\": \"Failed screenshot\",\n        \"value\": \"\\\\kemal.spec.js\\\\First Test -- This is a Failing Test (failed).png\"\n      }\n    ]\n  ]\n}",
              "code": "cy.get('.btn-get-started').should('contain.text', 'Learning More');",
              "err": {
                "message": "AssertionError: Timed out retrying after 4000ms: expected '<a.btn-get-started.scrollto>' to contain text 'Learning More', but the text was 'Learn More'",
                "estack": "AssertionError: Timed out retrying after 4000ms: expected '<a.btn-get-started.scrollto>' to contain text 'Learning More', but the text was 'Learn More'\n    at Context.eval (https://qstack.tech/__cypress/tests?p=cypress\\integration\\kemal\\kemal.spec.js:118:32)",
                "diff": "- 'Learn More'\n+ 'Learning More'\n"
              },
              "uuid": "fad76f51-8cc7-406c-a626-b3f7ab7a10ee",
              "parentUUID": "c8f4f99b-6f54-467d-bd95-7fd9c3d3df2d",
              "isHook": false,
              "skipped": false
            }
          ],
          "suites": [],
          "passes": [
            "3d11bbab-f286-4d62-92b7-2d74f8e6b615"
          ],
          "failures": [
            "fad76f51-8cc7-406c-a626-b3f7ab7a10ee"
          ],
          "pending": [],
          "skipped": [],
          "duration": 12288,
          "root": false,
          "rootEmpty": false,
          "_timeout": 2000
        }
      ],
      "passes": [],
      "failures": [],
      "pending": [],
      "skipped": [],
      "duration": 0,
      "root": true,
      "rootEmpty": true,
      "_timeout": 2000
    }
  ],
  "meta": {
    "mocha": {
      "version": "7.0.1"
    },
    "mochawesome": {
      "options": {
        "quiet": true,
        "reportFilename": "mochawesome",
        "saveHtml": false,
        "saveJson": true,
        "consoleReporter": "spec",
        "useInlineDiffs": false,
        "code": true
      },
      "version": "7.1.3"
    },
    "marge": {
      "options": {
        "id": "default",
        "reportDir": "cypress/reports",
        "quiet": true,
        "overwrite": true,
        "charts": true,
        "reportPageTitle": "QStack Report",
        "embeddedScreenshots": true,
        "html": false,
        "json": true
      },
      "version": "6.2.0"
    }
  }
}
},{}]},{},[1]);
