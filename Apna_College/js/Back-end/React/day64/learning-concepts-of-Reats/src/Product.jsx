// import "./Product.css";
import { Price } from "./Price";
function Product({title,idx }){ 
    let oldPrices = ['12,456','65,900','1,599','599'];
    let newPrices = ['9999','5425','7684','86'];
    let description = [["8000 DPI","5 Programmable button"],["intuitive surface","designed foriPad Pro"],["designed foriPad Pro","intuitive surface"],["4Stake","Multi Colour"]];
    return (
        < div className="Product" >
       <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}></Price>
        </div>
    );
};

export  {Product};