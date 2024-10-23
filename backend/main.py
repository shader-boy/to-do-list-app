from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

task_list = []


@app.route("/message", methods=["GET"])
def home():
    message = {"message": "Hello from Flask!"}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)
