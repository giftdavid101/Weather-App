import React from 'react';
import './App.css';
import CardDirectory from "./components/compounds/card-directory";
// import ErrorRadios from "./components/elements/radio";
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import {BarChart} from "@material-ui/icons";
// import VerticalBar from "./components/compounds/barchart";
import {dayNight} from "./helpers/changeDay";




function App() {

  return (
    <div className="App " style={{backgroundImage:`url(${dayNight()})`}}>
        <div className={'web-screen'} >
            <div  className={' large-screen container'}>
                <CssBaseline />
                <CardDirectory/>
            </div>
        </div>

        {/*<div className={'mobile-weather'} style={{backgroundImage:`url(/images/mobile.jpg`}}>*/}

        {/*</div>*/}

    </div>
  );
}

export default App;
