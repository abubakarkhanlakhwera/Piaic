function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form as submitted");
};
function Form() {
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="write something" />
            <button >Submit</button>
        </form>
    );
};
export  {Form};