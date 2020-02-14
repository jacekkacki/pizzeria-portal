import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBookingEdit.module.scss';

const TablesBookingEdit = ({ match }) => (
  <div className={styles.component}>
    <h2>TablesBookingEdit view</h2>
    <p>{`Booking id is: ${match.params.id}`}</p>
  </div>
);

TablesBookingEdit.propTypes = {
  match: PropTypes.object,
};

export default TablesBookingEdit;