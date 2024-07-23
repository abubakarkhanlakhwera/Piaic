 import { Product } from "./Product";
 function Price({oldPrices,newPrices}) {
    let oldstyles = {
        textDecorationLine: "line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"
    }
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrices}</span>
        </div>
    )
}

export {Price};