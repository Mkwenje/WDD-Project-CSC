//controls the color when hoverd over Tadiwa
function changeColor(obj) {
  if (obj.style.color == 'white') {
      obj.style.color = '#FF8431'
} else{
    obj.style.color = 'white'


  }

}

//controls the color changes stated in the html file Tadiwa
function changeBgColor(obj, colorName) {
  obj.style.backgroundColor = colorName;
}

//changes the colors of the numbers from orange to white when hoverd over Tadiwa
function changeColor1(obj) {
  if (obj.style.color == 'white') {
      obj.style.color = '#FF8431'
} else{
    obj.style.color = 'white'


  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Show & Hide Tadiwa mkwenje

// Controls the contactinfo for dylan earls underneth avatar Tadiwa
var a;
function show_hide1(){
       if (a==1){
         document.getElementById("text1").style.display="inline";
         return a=0;
       }else{
         document.getElementById("text1").style.display="none";
         return a=1;
       }

}


// Controls the contactinfo for paul webb underneth avatar Tadiwa
var a;
function show_hide2(){
       if (a==1){
         document.getElementById("text2").style.display="inline";
         return a=0;
       }else{
         document.getElementById("text2").style.display="none";
         return a=1;
       }

}
// Controls the contactinfo for tadiwa mkwenje underneth avatar Tadiwa
var a;
function show_hide3(){
       if (a==1){
         document.getElementById("text3").style.display="inline";
         return a=0;
       }else{
         document.getElementById("text3").style.display="none";
         return a=1;
       }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Form validation on the donate page My Details box Tadiwa
function validate() {
  var username = document.getElementById("uname");
    var email = document.getElementById("email");

    if(username.value == "" || email.value == ""){
      alert("Name and Email required");
    }else{}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
