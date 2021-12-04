import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicial from './pages/inicial/index';
import DtIngresso from './pages/dtIngresso/index';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/inicial" exact={true} component={DtIngresso} />
            </Switch>
        </BrowserRouter>
    )
}