import Web3 from 'web3';

const client = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

const getPicturesAbi = () => [{ constant: true, inputs: [], name: 'getPictures', outputs: [{ name: '', type: 'bool[9][]' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'getPicture', outputs: [{ name: '', type: 'bool[9]' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: 'tl', type: 'bool' }, { name: 'tc', type: 'bool' }, { name: 'tr', type: 'bool' }, { name: 'cl', type: 'bool' }, { name: 'cc', type: 'bool' }, { name: 'cr', type: 'bool' }, { name: 'bl', type: 'bool' }, { name: 'bc', type: 'bool' }, { name: 'br', type: 'bool' }], name: 'addPicture', outputs: [{ name: 'status', type: 'bool' }], payable: false, type: 'function' }, { inputs: [], payable: false, type: 'constructor' }, { anonymous: false, inputs: [{ indexed: false, name: 'message', type: 'string' }, { indexed: true, name: 'author', type: 'address' }, { indexed: false, name: 'pixels', type: 'bool[9]' }], name: 'PictureAdded', type: 'event' }];

export function getRecentBlocks() {
  const places = [0, 1, 2];

  const blocks = places.map(x => client.eth.getBlock(client.eth.blockNumber - 1000 - x));

  return blocks;
}

export function getAccounts() {
  const accounts = client.eth.accounts;
  client.eth.defaultAccount = client.eth.accounts[0];
  return accounts.map(account => ({ hash: account }));
}

export function getDefaultAccount() {
  return client.eth.defaultAccount;
}

export function setDefaultAccount(hash) {
  client.eth.defaultAccount = hash;
  console.log(`selectAccount: default account is: ${client.eth.defaultAccount}`);
}

export async function getPictures() {
  console.log(`getPictures: default account is: ${client.eth.defaultAccount}`);

  const abi = getPicturesAbi();
  const contractAddress = '0x0B5A779233Bb6c167c03619cEbfDFD683a728b10';
  const contract = client.eth.contract(abi).at(contractAddress);

  let result;
  try {
    result = await contract.getPicture();
  } catch (e) {
    console.log(`OOP: ${e}`);  // eslint-disable-line no-console
  }

  const endResult = [{
    tl: result[0],
    tc: result[1],
    tr: result[2],
    cl: result[3],
    cc: result[4],
    cr: result[5],
    bl: result[6],
    bc: result[7],
    br: result[8],
  }];

  return endResult;
}
