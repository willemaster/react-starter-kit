import Web3 from 'web3';

export default function getRecentBlocks() {
  const client = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

  const places = [0, 1, 2];

  const blocks = places.map(x => client.eth.getBlock(client.eth.blockNumber - 1000 - x));

  return blocks;
}
