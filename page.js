var lc_name = localStorage.getItem("Room_name");;

//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDuyH8ckHLmbQV-lyqgkSGDZxxVFdpIRk0",
    authDomain: "chat-bird-ca80b.firebaseapp.com",
    databaseURL: "https://chat-bird-ca80b.firebaseio.com",
    projectId: "chat-bird-ca80b",
    storageBucket: "chat-bird-ca80b.appspot.com",
    messagingSenderId: "852143111899",
    appId: "1:852143111899:web:347fc3d62b563966a816fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function setName() {
    document.querySelector('#name').innerHTML = lc_name;
}
document.getElementById('emoji-btn').onclick = ()=>{
    if (document.getElementById('emoji-div').style.display == 'inline-block') {
    document.getElementById('emoji-div').style.display = 'none';
    } else {
        document.getElementById('emoji-div').style.display = 'inline-block';
    }
}