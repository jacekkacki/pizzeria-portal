import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrderEdit.module.scss';

const WaiterOrderEdit = ({ match }) => (
  <div className={styles.component}>
    <h2>WaiterOrderEdit view</h2>
    <p>{`Id is: ${match.params.id}`}</p>
  </div>
);

WaiterOrderEdit.propTypes = {
  match: PropTypes.object,
};

export default WaiterOrderEdit;