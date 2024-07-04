const {
  ChainlinkPlugin,
  MainnetPriceFeeds,
} = require("@chainsafe/web3-plugin-chainlink");

const { Web3 } = require("web3");
const web3 = new Web3(
  //infura api key here
  ""
);

//create a new instance of chainlink plugin
const chainlinkPlugin = new ChainlinkPlugin();

//register chainlink plugin
web3.registerPlugin(chainlinkPlugin);
const getPrice = async () => {
  const priceUSD = await chainlinkPlugin.getPrice(MainnetPriceFeeds.EthUsd);

  return priceUSD;
};

const getEthPrice = async (req, res) => {
  try {
    const price = await getPrice();

    return res.status(200).json({
      ethereum_price_usd: String(price.answer).slice(0, 4),
    });
    // console.log("Ethereum price in USD:", String(price.answer).slice(0, 4));
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
module.exports = {
  getEthPrice,
};
