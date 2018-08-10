var bleep= new Audio();
bleep.src="C:/Users/asus/Desktop/flamant rose/res/son.mp3";
var abc=document.getElementsByClassName("button");
var lien1="https://www.jumia.com.tn/fashion-make-up/";
var lien2="http://www.makeupforever-tunisie.com/";
var lien3="https://beautystore.tn/";
var lien4="https://younescoif.com/13-maquillage";
var lien5="http://www.fatales.tn/template.php?menu_principale=11&code_menu=11";
var lien6="http://www.splendidegold.tn/products/67";
var lien7="http://makeup.tn/";
var lien8="https://www.cosmeto.tn/shop/categorie/maquillage/";
var lien9="http://www.kera-shop.com/tn/maquillage?SID=52ofdavb57doa7t6d3f13dkpc6";

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
          window.location=lien6;
        }
    , 2000);
  });
  abc[6].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien7;
        }
    , 2000);
  });
  abc[7].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien8;
        }
    , 2000);
  });
  abc[8].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien9;
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

