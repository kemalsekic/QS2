module.exports = function (treeData) {
    treeData = {
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
    return treeData;
}

