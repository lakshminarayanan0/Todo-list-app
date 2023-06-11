import React from "react";
import Header from './header';
import Main from "./main";
import Footer from "./footer";
import './app.css'


function App() {
  
  return (
    <div className="App">
   <Header title={'Todo List App'} />
   <Main/>
   <Footer companyName='Fullstack Developer'/>
      
    </div>

    
  );
  
  
  }
  Header.defaultProps={
    title:'Todo List  App'
  }
  Footer.defaultProps={
    companyName:'Company'
  }
export default App;
