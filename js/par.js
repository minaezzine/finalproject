var bleep= new Audio();
bleep.src="C:/Users/asus/Desktop/flamant rose/res/son.mp3";
var abc=document.getElementsByClassName("button");
var lien1="http://www.farmasi.tn/parfums-farmasi-tunisie.html";
var lien2="http://www.veronatunisie.tn/323-parfums-femmes-";
var lien3="http://www.netshop.tn/20-farmasi-tunisie-parfums-femme";
var lien4="http://www.fatales.tn/template.php?menu_principale=10&code_menu=20";
var lien5="http://www.feerie.tn/341-parfums";
var lien6="http://happyshop.tn/beaute-bien-etre/parfum/parfum-femme?category_type=shop&page=2";


function Redirect(lien){
window.location.href=lien;
}
abc[0].addEventListener('click', function() {
  bleep.play();
  setTimeout(function(){
      window.location=lien1;
  }
  , 2000);
});
abc[1].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien2;
        }
    , 2000);
  });
  abc[2].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien3;
        }
    , 2000);
  });
  abc[3].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien4;
        }
    , 2000);
  });
  abc[4].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien5;
        }
    , 2000);
  });
  abc[5].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien5;
        }
    , 2000);
  });
  
  
  var config = {
    apiKey: "AIzaSyAPOVqTpkPOvnIgg4O_kgbmX2ypMVGNJQk",
    authDomain: "formulaire-5b378.firebaseapp.com",
    databaseURL: "https://formulaire-5b378.firebaseio.com",
    projectId: "formulaire-5b378",
    storageBucket: "formulaire-5b378.appspot.com",
    messagingSenderId: "701284548517"
  };
  firebase.initializeApp(config);

function getInputVal(id){
    return document.getElementById(id).value
}
document.getElementById("contactForm").addEventListener("submit",submitForm)
function submitForm(e)
{
   e.preventDefault()
    alert("done")
    var email=getInputVal("email")
    var question=getInputVal("question")
   

    saveMessage(email,question)
}
var message=firebase.database().ref("mode")
function saveMessage(email,question){
    var newMessage=message.push()
    newMessage.set({
        email:email,
       question:question
         })
}

