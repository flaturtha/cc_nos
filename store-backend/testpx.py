import bcrypt

hashed = b'$2b$12$yxze3QQa7FmtXxh5TgBStu8CzsSywrKzpmEVT.GGeyf1snJP2JoIq'  # Replace with your actual hash
password = b'user.500'  # Replace with your actual plaintext password

if bcrypt.checkpw(password, hashed):
    print("Password matches")
else:
    print("Password does not match")

