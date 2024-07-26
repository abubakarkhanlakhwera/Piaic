import { useState } from "react";

function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0,red: 0,yello: 0,green: 0});
    //objet cannot be updated in normal way

    let [arr, SetArr] = useState(["no moves"]);

    
    let updateBlue = () => {
        moves.blue += 1;
        setMoves({...moves , blue: moves.blue + 1});
        // arr.push("blue moves");
        // SetArr(arr);
        // console.log(arr);
    };
    let updateYellow = () => {
        setMoves({...moves , yello: moves.yello + 1} );
    };
    let updateGreen = () => {
        setMoves({...moves, green: moves.green + 1});
    };
    let updateRed = () => {
        setMoves({...moves, red: moves.red + 1});
    };
    return(
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
            <p>Blue moves = {moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
            <p>Yellow moves = {moves.yello}</p>
            <button onClick={updateYellow} style={{backgroundColor: "yellow" }}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1 </button>
            <p>Red moves = {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
            </div>
        </div>
    );
};

export {LudoBoard};