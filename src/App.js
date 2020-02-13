import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingEdit from './components/views/TablesBookingEdit/TablesBookingEdit';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsEdit from './components/views/TablesEventsEdit/TablesEventsEdit';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import WaiterOrderEdit from './components/views/WaiterOrderEdit/WaiterOrderEdit';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Dashboard}
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/tables`}
            component={Tables} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/booking/:id`}
            component={TablesBookingEdit} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/tables/booking/new`}
            component={TablesBookingNew} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/event/:id`}
            component={TablesEventsEdit} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/tables/events/new`}
            component={TablesEventsNew} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/waiter`}
            component={Waiter} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/waiter/order/new`}
            component={WaiterOrderNew} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/waiter/order/:id`}
            component={WaiterOrderEdit} 
          />
          <Route 
            exact
            path={`${process.env.PUBLIC_URL}/kitchen`}
            component={Kitchen} 
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
