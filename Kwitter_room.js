var firebaseConfig = {
    apiKey: "AIzaSyBng6bLQzfmmchjGki4g5QN6D8n_kmdZpw",
    authDomain: "c-93-a2955.firebaseapp.com",
    projectId: "c-93-a2955",
    storageBucket: "c-93-a2955.appspot.com",
    messagingSenderId: "385839867903",
    appId: "1:385839867903:web:34e594e4c2b97d64c5e9ca",
    measurementId: "G-JX4MS5CGFS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}


function addroom(){
  room_name = document.getElementById("Room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";

}

function getData(){ firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output")

Room_names = childKey;
console.log(" Room Name -"+Room_names);
row = "<div class='room_name' id="+Rooms_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;


;});}
getData();

function redirectToRoomName (name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}

function logout(){
  localStorage.removeItem("user_room");
  localStorage.removeItem("room_name");
  window.location = "Kwitter.html";
}