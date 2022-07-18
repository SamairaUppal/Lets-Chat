 function addUser() {
        var userName = document.getElementById("userInput").value 
        localStorage.setItem("userName", userName)
        window.location= "kwitter_room.html"
    
 }