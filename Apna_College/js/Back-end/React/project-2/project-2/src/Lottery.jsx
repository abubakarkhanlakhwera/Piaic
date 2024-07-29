import { useState } from "react";
// import "./Lottery.css"
import { genTiket, sum } from "./helper";
import {  Ticket} from "./Ticket";

function Lottery({n = 3, winningSum = 15}) {
    let [ticket, setTiket] = useState(genTiket(n));
    let isWinning = sum(ticket) == winningSum;
    let buyTicket = () => {
        setTiket(genTiket(n));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}></Ticket>
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{isWinning? "You have won the lottery":"Try again"}</h3>
        </div>
    );
};

export {Lottery};