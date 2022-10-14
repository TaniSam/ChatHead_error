var firebaseConfig = {
    apiKey: "AIzaSyBlAtiSTz96iT0JldKbYh6IO3wrae-0cPo",
    authDomain: "chathead-ce49b.firebaseapp.com",
    databaseURL: "https://chathead-ce49b-default-rtdb.firebaseio.com",
    projectId: "chathead-ce49b",
    storageBucket: "chathead-ce49b.appspot.com",
    messagingSenderId: "1093231822588",
    appId: "1:1093231822588:web:eed1b04953c6a5f141b979"
  };
  
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

   row= "<div class='room_name' id=' "+Room_names +"onclick='redirectToRoomName(this.id)'>#" +Room_names + "</div> <hr>";
   document.getElementById("output").innerHTML += row;
    });});}
getData();

 var user_name= localStorage.getItem("Username",user_name);
document.getElementById("salutation").innerHTML= "Welcome "+ user_name + " !";

function add_room_name(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="ChatHead_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="ChatHead_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}