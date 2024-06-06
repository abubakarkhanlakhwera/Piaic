#from fastapi import FastAPI
#app = FastAPI()
# @app.get("/")
# #@app.put("/")
# #@app.update("/")
# #@app.get("/")
# def hello():
#     return "hello brother.."

# @app.get("/items")
# def items():
#     return "items" 
# from fastapi import FastAPI

# app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"message": "Welcome to the API"}

# @app.get("/")
# def piaic():
#     return{"school":"private-sector"}

# @app.get("/url/{data_to_be_stored}")
# def store(data_to_be_stored:str):
#     return {"id":data_to_be_stored}
# @app.get("/{product}/file/{file_path:path}")
# def item(file_path:str,product:str):
#     return {"path":file_path,"product-name":product}
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def demo():
    return "Hello Ahmad"