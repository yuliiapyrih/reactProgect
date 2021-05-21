import logo from './logo.svg';
import './App.css';
import Header from "./component/header/header";
import Sidebar from "./component/sidebar/sidebar";
import Big from "./component/big/big";
import Trio from "./component/trio/trio";
import Center from "./component/center/center";
import Back from "./component/back/back";
import All from "./component/all/all";
import MyChart from "./component/cha/cha";
import None from "./component/none/none";
import Arm from "./component/arm/armChart";
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Test from "./component/test/test";
import MyChartTwo from "./component/cha/another";
import Acto from "./component/arm/anto";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="d-flex" id="wrapper">
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Header/>
                    <div className="container-fluid">

                        <Switch>
                            <Route exact path='/' component={All}/>
                            <Route exact path='/none' component={None}/>
                            <Route exact path='/test' component={Test}/>
                        </Switch>
                    </div>


                </div>
            </div>
        
        </Router>
    );
}

export default App;
