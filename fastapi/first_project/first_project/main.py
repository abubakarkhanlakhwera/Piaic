from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def helloWorld():
    return "Hello, World!"

@app.get("/gettodos/{id}")
def getTodos(id: int):  # Specify the type of 'id'
    print("Get todos called", id)
    return id

@app.post("/gettodos")
def getTodosPost():
    print("Post method called")
    return "Post method called"

@app.put("/getSingleTodo")
def getSingleTodo(userName: str, rollno: int):
    return f"This is my username {userName} and this is my rollno {rollno}"

@app.put("/updateTodo")
def updateTodo():
    return "updateTodo called"

