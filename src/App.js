import React from 'react';
import './App.css';
import CardDirectory from "./components/compounds/card-directory";
import ErrorRadios from "./components/elements/radio";
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {BarChart} from "@material-ui/icons";
import VerticalBar from "./components/compounds/barchart";




function App() {

  return (
    <div className="App container">
        <CssBaseline />
        <CardDirectory/>
        <div style={{margin:"auto"}}>
            <BarChart/>
            <VerticalBar/>
        </div>
    </div>
  );
}

export default App;
