import requests

res = requests.get("http://127.0.0.1:8000")

print("Text",res.txt)
print("Json",res.json())
print("Status Code",res.status_code)
