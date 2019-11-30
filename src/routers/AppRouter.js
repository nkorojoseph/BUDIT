import React from 'react';
import {BrowserRouter, Route, Switch,NavLink, Link} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import CreateExpensePage from '../components/CreateExpensePage';
import HelpPage from '../components/HelpPage';
import AboutPage from '../components/AboutPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';

const AppRouter = ()=> (
<BrowserRouter>
    <div>
      <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage } exact={true} />
      <Route path="/create" component={CreateExpensePage}  />
      <Route path="/edit/:id" component={EditExpensePage}  />
      <Route path="/help" component={HelpPage}  />
      <Route path="/about" component={AboutPage}  />
      <Route component={ErrorPage} />
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;