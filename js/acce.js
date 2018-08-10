var bleep= new Audio();
bleep.src="C:/Users/asus/Desktop/flamant rose/res/son.mp3";
var abc=document.getElementsByClassName("button");
var lien1="https://www.zara.com/tn/fr/femme-accessoires-bijoux-fantaisie-l1015.html";
var lien2="https://www.solamira.tn/categorie/femmes/bijouterie-tunisie/matieres/bijoux-plaque-or/";
var lien3="http://www.bijoulella.com/fr/home";
var lien4="https://elkhomssa.com/categorie-produit/colliers/";
var lien5="https://www.bazar.tn/mode-accessoires-tunisie/femme/accessoires/bijoux";
var lien6="https://www.pullandbear.com/tn/homme/accessoires/bijoux-c1030004113.html";
var lien7="https://www.secretgallery.tn/fr/4-bijoux";
var lien8="https://elkhomssa.com/categorie-produit/colliers/";
var lien9="http://www.strassaccessoires.com/3-bijoux";
var lien10="https://shop.mango.com/tn/femme/bijoux_c23394502";
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
          window.location=lien6;
        }
    , 2000);
  });
  abc[7].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien6;
        }
    , 2000);
  });
  abc[8].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien6;
        }
    , 2000);
  });
  abc[9].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien6;
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

