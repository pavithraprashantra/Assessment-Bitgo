const { Given, When, Then, And } = require("@cucumber/cucumber")


When("Launch Browser and Validate the Header", async function () {

    //URL Navigation
    await browser.url("https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732 ")
    console.log("Navigated to the URL Successfully")


    //Header verification
    const transactionHeader = $("//div[@class='transactions']/h3")
    var headerText = await transactionHeader.getText();
    console.log("Header Text:", headerText);
    expect(headerText).toBe("25 of 2875 Transactions")
})

Then("Parse through the Transactions Available", async function () {
    //Parsing through the transactions

    const transactionBox = await $$("//div[@class='transaction-box']")

    for (const el of transactionBox) {
        const vinsEls = await el.$$(".vin");
        const voutsEls = await el.$$(".vout");
        //         console.log('vins count, ', vinsEls.length);
        //         console.log('vouts count, ', voutsEls.length);

        if (vinsEls.length === 1 && voutsEls.length === 2) {
            console.log('Transaction with 1 input and 2 outputs found: ', el);
        }

    }

})   