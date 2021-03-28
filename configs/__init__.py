from firebase_admin import credentials
import firebase_admin
from os import path, curdir

# credential_path = path.join(curdir,"creds", "firebase.json")
cred = credentials.Certificate("creds/firebase.json")

firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chat-demo-cacab-default-rtdb.firebaseio.com"
})