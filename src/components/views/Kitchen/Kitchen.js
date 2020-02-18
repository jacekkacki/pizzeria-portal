import React from 'react';
import styles from './Kitchen.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const kitchenContent = [
  {id: '1', table:'---', order:'123abc', products:'NONNA ALBAS PIZZA', status:'done'},
  {id: '2', table:'1', order:'124abc', products:'ZIO STEFANOS DOUGHNUT', status:'done'},
  {id: '3', table:'2', order:'125abc', products:'NONNA ALBAS PIZZA', status:'done'},
  {id: '4', table:'3', order:'126abc', products:'ZIA GIULIAS BREAKFAST', status:'prepared'},
  {id: '5', table:'6', order:'127abc', products:'NONNO ALBERTOS SALAD', status:'prepared'},
  {id: '6', table:'---', order:'128abc', products:'NONNA ALBAS PIZZA', status:'ordered'},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <h2>Kitchen view</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Sequence</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Products</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {kitchenContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.products}
            </TableCell>
            <TableCell>
              <Button>
                {row.status}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;