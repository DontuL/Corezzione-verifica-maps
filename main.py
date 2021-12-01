# main.py

from flask import Flask
from flask import send_file
from flask import request
from flask_cors import CORS

app = Flask(__name__)



@app.route("/")
def index():
    return "Hello World"
@app.route("/all")
def buche():
    return send_file('allahegrande.json')
if __name__ == "__main__":
    app.run()