import { createRoot } from 'react-dom/client';
// import Parent from "./props/Parent";
import Inputt from "./components/Inputt";
// import ReactDOM from 'react-dom';   
import React from 'react';

const App = () =>{
    return <div>
      <Inputt/>
    </div>
}

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);