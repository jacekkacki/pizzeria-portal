import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEventsEdit.module.scss';

const TablesEventsEdit = ({ match }) => (
  <div className={styles.component}>
    <h2>TablesEventsEdit view</h2>
    <p>{`Event id is: ${match.params.id}`}</p>
  </div>
);

TablesEventsEdit.propTypes = {
  match: PropTypes.object,
};

export default TablesEventsEdit;