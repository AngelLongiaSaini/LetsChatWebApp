function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       var firebaseConfig = {
            apiKey: "AIzaSyBwqBBUEWAkqoEj_lxvqXzBk_nNp29GLJQ",
            authDomain: "kwitterwebapp-45bb4.firebaseapp.com",
            projectId: "kwitterwebapp-45bb4",
            storageBucket: "kwitterwebapp-45bb4.appspot.com",
            messagingSenderId: "739257465427",
            appId: "1:739257465427:web:572d870c7fa07beed624a6",
            measurementId: "G-17PKXW4LZX"
          };
          firebase.initializeApp(firebaseConfig);
          user_name= localStorage.getItem("user_name");
          document.getElementById("user_name").innerHTML="Welcome"+ user_name;
 
          function addRoom();
          {
               room_name= document.getElementById("room_name").value;
               firebase.database().ref("/").child(room_name).update({
                    purpose : "adding room name"
               });
               localStorage.setItem("room_name", room_name);
               window.location= "kwitter_page.html";
          }   
     
 function getData(){
      firebase.database().ref("/").onValue, 
      function (snapshot){document.getElementById("output").innerHTML;}
      Room_names= childKey;
      console.log("room_name-" + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+= row;
     }
function logout(){
     document.getElementById("logout").value;

     window.location(index.html);
}
     
     
     
     
     
     });});}

 
