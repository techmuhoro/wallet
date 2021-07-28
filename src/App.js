import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { homePage, customErrorPage, dashboardPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={homePage} />
        <Route exact path='/dashboard' component={dashboardPage} />
        <Route component={customErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
