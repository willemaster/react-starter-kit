import React from 'react';
import PropTypes from 'prop-types';

const SelectableAccount = ({ selectAccount, isSelected, hash }) => (
  <div>
    <div>Account</div>
    <div>{hash}</div>
    <div>Selected: {isSelected ? 'true' : 'false'}</div>
    <input type="button" onClick={selectAccount} value="Select" />
  </div>
);

SelectableAccount.propTypes = {
  selectAccount: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  hash: PropTypes.string.isRequired,
};

export default SelectableAccount;
