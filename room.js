var userName = localStorage.getItem('User Name');
document.getElementById('name').innerHTML = userName

var firebaseConfig = {
    apiKey: "AIzaSyB5Qf78J-Dr1BBq5mA9RXN-JdH1GuOoiTg",
    authDomain: "chat-bird-9bccd.firebaseapp.com",
    databaseURL: "https://chat-bird-9bccd.firebaseio.com",
    projectId: "chat-bird-9bccd",
    storageBucket: "chat-bird-9bccd.appspot.com",
    messagingSenderId: "388547524",
    appId: "1:388547524:web:65d1d39418a163a214da91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
    window.location.replace('login.html');
    localStorage.removeItem('User Name');
}

function addRoom() {
    roomname = document.getElementById("roomName").value;
    firebase.database().ref("/").child(roomname).update({
        purpose: "Room Name"
    });
    row = "<div style='cursor:pointer;' class='room_name' id='" + Room_names + "' onclick='redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById('output').innerHTML += row;
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Names:\n" + Room_names);
            row = "<div class='room_name' id='" + Room_names + "' onclick='redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById('output').innerHTML += row;
            //End code
        });
    });
}
getData();

function redirect_to_roomname(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "page.htm";
}