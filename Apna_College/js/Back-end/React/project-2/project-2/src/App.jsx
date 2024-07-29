import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Lottery } from "./Lottery";
// import "./Lottery.css"
import { TicketNum } from './TicketNum';
import { Ticket } from './Ticket';

function App() {
  

  return (
    <>
      <Lottery n={3} winningSum={50}></Lottery>
    </>
  );
};

export default App
