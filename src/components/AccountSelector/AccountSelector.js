import { connect } from 'react-redux';
import React from 'react';
import SelectableAccount from '../SelectableAccount';
import { fetchAccounts, setSelectedAccount } from '../../actions/accounts';

@connect(store => ({
  accounts: store.accounts.accounts,
  selectedAccountHash: store.accounts.selectedAccountHash,
}))
export default class AccountSelector extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchAccounts());
  }

  selectAccount(hash) {
    console.log('selecting account'); // eslint-disable-line no-console
    this.props.dispatch(setSelectedAccount(hash));
  }

  render() {
    const accounts = this.props.accounts.map(
      item => <SelectableAccount key={item.hash} hash={item.hash} isSelected={item.hash === this.props.selectedAccountHash} selectAccount={() => this.selectAccount(item.hash)} />);
    return (
      <div>
        <div>Select account:</div>
        <div>{accounts}</div>
      </div>
    );
  }
}
