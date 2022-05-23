// var treeData = require('../testResults.json');
// console.log(treeData)

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

var treeData = {
  name: "Alias element",
  children: [
    {
      name: "Step 1",
      children: [
        {
          name: "Step 1.1",
          children: [
            {
              name: "cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('firstBtn');",
              step: "Step 1"
            },
            {
              name: "cy.get('@firstBtn').click();",
              step: "Step 1"
            },
            {
              name: "cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');",
              step: "Step 1"
            },
          ],
        },
        {
          name: "cy.get('@firstBtn').click();",
        },
        {
          name: "cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');",
        },
      ],
    },
    {
      name: "Step 2",
    },
    {
      name: "Step 3",
      children: [
        {
          name: "cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('firstBtn');",
        },
        {
          name: "cy.get('@firstBtn').click();",
        },
        {
          name: "cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');",
        },
      ],
    },
    {
      name: "Step 4",
    },
  ],
};

var margin = { top: 20, right: 90, bottom: 20, left: 90 };
var width = 1280 - margin.left - margin.right;
var height = 1024 - margin.top - margin.bottom;

var svg = d3
  .select(".container")
  .append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var i = 0;
var duration = 750;
var root;

var treemap = d3.tree().size([height, width]);
root = d3.hierarchy(treeData, function (d) {
  return d.children;
});
root.x0 = height / 2;
root.y0 = 0;
console.log("root ", root);

update(root);

function update(source) {
  var treeData = treemap(root);

  // nodes
  var nodes = treeData.descendants();
  nodes.forEach(function (d) {
    d.y = d.depth * 180;
  });
  var node = svg.selectAll("g.node").data(nodes, function (d) {
    return d.id || (d.id = ++i);
  });
  var nodeEnter = node
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
      return "translate(" + source.y0 + ", " + source.x0 + ")";
    })
    .on("click", click);

  nodeEnter
    .append("circle")
    .attr("class", "node")
    .attr("r", 0)
    .style("fill", function (d) {
      return d._children ? "red" : "#fff";
    });

  nodeEnter
    .append("text")
    .attr("dy", ".35em")
    .attr("x", function (d) {
      return d.children || d._children ? -13 : 13;
    })
    .attr("text-anchor", function (d) {
      return d.children || d._children ? "end" : "start";
    })
    .text(function (d) {
      return d.data.name;
    });

    nodeEnter
    .append("text")
    .attr("dy", "1.85em")
    .attr("x", function (d) {
      return d.children || d._children ? -13 : 13;
    })
    .attr("text-anchor", function (d) {
      return d.children || d._children ? "end" : "start";
    })
    .text(function (d) {
      return d.data.step;
    });

  var nodeUpdate = nodeEnter.merge(node);

  nodeUpdate
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + d.y + ", " + d.x + ")";
    });

  nodeUpdate
    .select("circle.node")
    .attr("r", 8)
    .style("fill", function (d) {
      return d._children ? "red" : "#fff";
    })
    .attr("cursor", "pointer");

  nodeExit = node
    .exit()
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + source.y + "," + source.x + ")";
    })
    .remove();

  nodeExit.select("circle").attr("r", 0);
  nodeExit.select("text").style("fill-opacity", 0);

  // links
  function diagonal(s, d) {
    path = `M ${s.y} ${s.x}
      C ${(s.y + d.y) / 2} ${s.x}
        ${(s.y + d.y) / 2} ${d.x}
        ${d.y} ${d.x}`;
    return path;
  }
  var links = treeData.descendants().slice(1);
  var link = svg.selectAll("path.link").data(links, function (d) {
    return d.id;
  });
  var linkEnter = link
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", function (d) {
      var o = { x: source.x0, y: source.y };
      return diagonal(o, o);
    });
  var linkUpdate = linkEnter.merge(link);
  linkUpdate
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      return diagonal(d, d.parent);
    });

  var linkExit = link
    .exit()
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      var o = { x: source.x0, y: source.y0 };
      return diagonal(o, o);
    })
    .remove();

  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  function click(event, d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }
}
