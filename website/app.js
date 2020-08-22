var userName = "Ameen Alam";


function createUserName() {
    userName = "Ameen Alam";
    console.log(userName);  

}

function modifyUserName() {
    // if(userName)
        userName = "Daniyal Nagori";
        console.log(userName);  

};

function showUserName() {
    console.log(userName);  
}
console.log(userName);  

createUserName();
showUserName(); // Ameen Alam 

modifyUserName();
showUserName(); // Daniyal Nagori 
