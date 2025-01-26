from flask import Flask, jsonify, request, g
from flask_cors import CORS
import database

app = Flask(__name__)
CORS(app)

task_list = []


def get_db():
    if "db" not in g:
        g.db = database.sqlite3.connect("example.db")
    return g.db


@app.teardown_appcontext
def close_db(exception):
    db = g.pop("db", None)
    if db is not None:
        db.close()


def add_task(task):
    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "INSERT INTO TASK_LIST(name) VALUES (?)",
        (task,),
    )
    db.commit()


def delete_task(task):
    pass


def update_task(id):
    pass


# def show_task():
#     db = get_db()
#     cursor = db.cursor()
#     cursor.execute("SELECT * FROM TASK_LIST")
#     rows = cursor.fetchall()

#     for row in rows:
#         print(row)


@app.route("/input-task", methods=["POST"])
def handle_task():
    # print("message")
    try:
        data = request.get_json()
        print(data["task"])
        # add_task(data["task"])
        # show_task()

    except Exception:
        return jsonify({"error": "Invalid JSON"}), 400

    if (
        not data
        or "task" not in data
        or not isinstance(data["task"], str)
        or not data["task"].strip()
    ):
        return (
            jsonify({"error": "Invalid input. Task must be a non-empty string."}),
            400,
        )

    task = data["task"].strip()
    print(f"Received task: {task}")

    add_task(task)
    # result = show_task()

    return jsonify({"message": "Task received successfully!", "task": task}), 200


@app.route("/show-task", methods=["POST"])
def show_task():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM TASK_LIST")
    rows = cursor.fetchall()
    print(rows)
    # for row in rows:
    #     print(row)


# if __name__ == "__main__":
#     app.run(debug=True)
