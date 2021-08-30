const BIC20 = artifacts.require("./BIC20.sol");

module.exports = async(deployer) => {
    const name = process.env.NAME;
    const ticker = process.env.TICKER;
    const decimals = process.env.DECIMALS;
    await deployer.deploy(BIC20, name, ticker, decimals, { gas: 5000000 });
    const contract = await BIC20.deployed();
    console.log('CONTRACT ADDRESS IS*||*' + contract.address + '*||*')
};