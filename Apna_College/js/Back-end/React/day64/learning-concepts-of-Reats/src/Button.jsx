 function handlemouseClick(event) {
    console.log("onclick");
    console.log(event);
 };
 function handleMouseOver(){
    console.log("Mouseover");
 };
 function  handleBDLlclick(){
    console.log("Double click");
 };
 function Button() {
    return (
        <div><button onClick={handlemouseClick}>Click ME!</button>
        <p onMouseOver={handleMouseOver}>This para is for event onMouseOver demo</p>
        <button onDoubleClick={handleBDLlclick}>Double click!</button>

        </div>
        
    )
};

export {Button};