import { Switch, Route } from "react-router-dom";

import routeConfig from "../routers/routeConfig";

const Routes = () => {
    return (
        <Switch>
            {routeConfig.map(({ path, component }) => (
                <Route key={path} path={path} exact component={component} />
            ))}
        </Switch>
    );
};

export default Routes;
