import sqlite3

conn = sqlite3.connect("example.db")

cursor = conn.cursor()

cursor.execute(
    """
CREATE TABLE IF NOT EXISTS TASK_LIST (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL)
"""
)

# conn.execute(
#     "INSERT INTO users(name, age, email) VALUES (?, ?, ?)",
#     ("Alice", 25, "alice@example.com"),
# )


# cursor.execute("SELECT * FROM tasks")
# rows = cursor.fetchall()

# for row in rows:
#     print(row)

# conn.close()
