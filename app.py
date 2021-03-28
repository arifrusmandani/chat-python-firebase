from flask import Flask, render_template, request, jsonify
from firebase_admin import db
from datetime import datetime
from os import path, curdir
import configs
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    current_time = datetime.now().strftime("%H:%M:%S")

    firebaseRealtimeDB = db.reference(f'messages/room-{request.form.get("room_id")}').push(
        {
            "room_id": request.form.get('room_id'),
            "sender": request.form.get('sender'),
            "message": request.form.get('message'),
            "sended_time": current_time,
        }
    )
    return jsonify({"status":True})
    
