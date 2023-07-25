import Board from "./components/Board";
import { createContext,useState } from 'react'
import ReactDOM from "react-dom/client";
import { TicContextProvider } from "./context/TicContext";
import { Answer } from "./components/Answer";

import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App(){
  return(
    <div>
      <Container >
        <Header/>
        <TicContextProvider >
          <Board />
          <Answer />
        </TicContextProvider>
      </Container>
      </div>
    
  )
}


export default App;