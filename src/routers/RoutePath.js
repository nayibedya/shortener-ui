import { Route, Switch } from 'react-router-dom';
import Layout  from '../components/Layout';
import UrlShortner from '../views/UrlShortner';
import List from '../views/List';

const RoutePath = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={UrlShortner} root={true} />
                <Route exact path='/list' component={List}  />
            </Switch>
        </Layout>
    )
}

export default RoutePath;