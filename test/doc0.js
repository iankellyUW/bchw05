const Doc0 = artifacts.require("Doc0");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Doc0", function (accounts) {
  it("should assert true", async function () {
    const dd = await Doc0.deployed();
	let amount = 1000;
	var ok = true;
    
    const payment = await dd.getPayment();



    assert.isTrue(true);
    return assert.isTrue(ok);
  });
});
