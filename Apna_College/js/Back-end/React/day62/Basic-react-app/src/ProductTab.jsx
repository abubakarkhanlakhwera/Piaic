import { Product } from "./Product";
function ProductTab(){
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
    return (
        <div style={styles}>
          
        <Product  title="Logitech MX Master" idx={0}></Product>
        <br /><br />
        <Product title="Apple" idx={1}></Product>
        <br /><br />
        <Product title="ZEB-transformer" idx={2}></Product>
        <br /><br />
        <Product title="Pencil" idx={3}></Product>
      </div> 
    );
}

export default ProductTab;