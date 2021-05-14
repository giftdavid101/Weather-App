import React from 'react';
import './App.css';
import CardDirectory from "./components/compounds/card-directory";
import ErrorRadios from "./components/elements/radio";
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



function App() {

  return (
    <div className="App container">
        <CssBaseline />
        <Container maxWidth="sm">
        <div className={'er'}>
            <ErrorRadios/>
        </div>
        </Container>
      <CardDirectory/>

    </div>
  );
}

export default App;
