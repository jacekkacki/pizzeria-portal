import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';


const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to="/waiter/order/new" className={styles.link}>New Order</Link>
    <Link to="/waiter/order/:id" className={styles.link}>Edit Order</Link>
  </div>
);

export default Waiter;