const firebaseConfig = {
    apiKey: "AIzaSyCYK4gi-rVjVOUO_UOn-qP2hz98oGHApF4",
    authDomain: "covid-19chatbot-9eak.firebaseapp.com",
    projectId: "covid-19chatbot-9eak",
    storageBucket: "covid-19chatbot-9eak.appspot.com",
    messagingSenderId: "732256007969",
    appId: "1:732256007969:web:332e16a167f7444768f060"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var userName=localStorage.getItem("userName")
document.getElementById("name").innerHTML = "Welcome " + userName + "!"

function addRoom() {
    var roomName = document.getElementById("roomInput").value
    console.log(roomName)
    localStorage.setItem("roomName", roomName)
    firebase.database().ref("/").child(roomName).update({
          purpose: "Adding Room Name"
    })
    window.location = "kwitterPage.html"

}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
