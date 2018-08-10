var bleep= new Audio();
bleep.src="C:/Users/asus/Desktop/flamant rose/res/son.mp3";
var abc=document.getElementsByClassName("button");
var lien1="https://www.zara.com/tn/fr/femme-chaussures-l1251.html";
var lien2="http://www.modeco.tn/226-vente-chaussures-en-ligne-fashion-femme";
var lien3="https://shop.mango.com/tn/femme/chaussures_c10336952";
var lien4="https://www.decathlon.tn/6056-chaussures-femme";
var lien5="https://www.stradivarius.com/tn/femme/chaussures/achetez-par-article/toutes-c1020088038.html";
var lien6="https://www.pullandbear.com/tn/femme/chaussures/chaussures-%C3%A0-talon-c669004.html";
var lien7="https://citymode.tn/84-chaussures-femme";


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

