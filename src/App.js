import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserSettings from './components/UserSettings.jsx';
import PlanBilling from './components/PlanBilling.jsx';

function App() {
    return (
        <Router>
            <div className='App'>
                <Sidebar />
                <Switch>
                    <Route path='/settings'>
                        <UserSettings />
                    </Route>
                    <Route path='/planbilling'>
                        <PlanBilling />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
