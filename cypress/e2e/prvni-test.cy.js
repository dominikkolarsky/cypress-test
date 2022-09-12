describe("Load home page", () => {
    let count = 0;

    beforeEach(()=>{
        count++;
        cy.log('count',count)

    });
    after(()=>{
        cy.log('count',count)
    })

    it("open home page", () => {
        let sum = 0;
        cy.visit("/");
        sum += 5;
        cy.log("hodnota sumy", sum);
        cy.get(":nth-child(3) > .sc-jSMfEi")
            .click()
            .then(() => {
                cy.url().should("include", "gallery");
                sum += 5;
                cy.wrap(sum).as("newSum");
            });
        cy.wait(6000).then(() => {
            cy.log("hodnota sumy", sum);
            cy.task("setValue", sum);
        });

    });

    it("chcek projects", () => {
        cy.task("getValue").then((value) => {
            cy.log("hodnota je", value);
        });
        cy.get('[name="project-1"] > .sc-ikZpkk')
            .should("be.visible")
            .then(() => {
                cy.get('[name="project-1link-detail"]')
                    .invoke("text")
                    .then((text) => {
                        cy.get('[name="project-1link-detail"]').should("contain", text);
                    });
            });
    });
});
