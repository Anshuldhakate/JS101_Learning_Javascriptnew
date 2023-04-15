// Given stored username and password and input username and password, Print if the user can login or not.
let saved_username= "AnshulDhakate";
let saved_password= "Anshul@95"

let username= "AnshulDhakate";
let password= "Anshul@95"



if(saved_username==username){
  if(saved_password==password){
    console.log("You can login")
  }
  else{
    console.log("please check your username")
  }
}
else{
    console.log("please check your password")
  }
