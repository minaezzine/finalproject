var bleep= new Audio();
bleep.src="C:/Users/asus/Desktop/flamant rose/res/son.mp3";
var abc=document.getElementsByClassName("button");
var lien1="https://www.jumia.com.tn/femme-sacs-pochettes/?oos=1&gclid=Cj0KCQjwzK_bBRDDARIsAFQF7zPVGcqlwM-TOMq3oJePv5DKU4AaZu1wjRDTFNAluU_AuuouDfWtMC0aAmp1EALw_wcB";
var lien2="https://shop.mango.com/tn/femme/sacs_c18162733";
var lien3="https://www.zara.com/tn/fr/femme-sacs-l1024.html";
var lien4="https://www.crk.tn/";
var lien5="http://www.sasio.com.tn/36-SAC";
var lien6="https://www.stradivarius.com/tn/femme/accessoires/achetez-par-article/sacs-et-sacs-%C3%A0-dos/afficher-tout-c1718540.html";


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

