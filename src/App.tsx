import React, {Component, lazy, Suspense} from 'react';
import 'antd/dist/antd.min.css';
import './App.less';
import {Route, Switch} from "react-router-dom";
import Loading from "./component/loading/Loading";
import LcRightMenu from "./designer/right/LcRightMenu";

const LightChaserList = lazy(() => import('./component/list/LightChaserList'));
const LCDesigner = lazy(() => import('./designer'));
const Preview = lazy(() => import('./component/show/LcShow'));

class App extends Component<any> {
    render() {
        return (
            <>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route path={'/list'} component={LightChaserList}/>
                        <Route path={'/designer'} component={LCDesigner}/>
                        <Route path={'/view'} component={Preview}/>
                        <Route path={'/loading'} component={Loading}/>
                    </Switch>
                </Suspense>
                <LcRightMenu/>
            </>
        );
    }
}

export default App;
