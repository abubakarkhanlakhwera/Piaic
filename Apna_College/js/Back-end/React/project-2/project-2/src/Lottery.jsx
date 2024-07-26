import { useState } from "react";
// import "./Lottery.css"
import { genTiket, sum } from "./helper";

function Lottery() {
    let [ticket, setTiket] = useState(genTiket(3));
    let isWinning = sum(ticket) == 15;
    let buyTicket = () => {
        setTiket(genTiket(3));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{isWinning? "You have won the lottery":"Try again"}</h3>
        </div>
    );
};

export {Lottery};