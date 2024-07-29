import { TicketNum } from "./TicketNum.jsx";
import "./Ticket.css"

function Ticket({ticket}) {
    return (
        <div className="Ticket">
            <p>Ticket</p>
           {ticket.map((num, idx) => {
                <TicketNum num={num} key={idx}></TicketNum>
            })}
           
        </div>
    );
};

export {Ticket};