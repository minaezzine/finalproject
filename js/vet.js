var bleep= new Audio();
bleep.src="C:/Users/asus/Desktop/flamant rose/res/son.mp3";
var abc=document.getElementsByClassName("button");
var lien1="https://shop.mango.com/tn/femme/vetements_c11360446";
var lien2="http://www.modeco.tn/200-vente-en-ligne-vetements-mode-femme";
var lien3="http://www.mabrouk.tn/femme/collection.html";
var lien4="http://www.neoshop.tn/49-vetement-femme";
var lien5="https://www.stradivarius.com/tn/";
var lien6="https://www.decathlon.tn/5692-vetements-femmes";
var lien7="https://www.zara.com/fr/fr/femme-l1000.html";
var lien8="https://www.jumia.com.tn/vetements-femme/?gclid=Cj0KCQjwzK_bBRDDARIsAFQF7zNu7oADe6oIVbx7jC8pu2eC5ZxgoMhPm7bZ6c5xHrvibik_mMAwh4gaAkRXEALw_wcB";
var lien9="https://www.bazar.tn/mode-accessoires-tunisie/femme/vetements";
var lien10="http://www.sasio.com.tn/3-femme";
var lien11="https://www.joker.tn/index.php/Guest/annonce_par_categorie/23";

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
  abc[9].addEventListener('click', function() {
    bleep.play();
        setTimeout(function(){
          window.location=lien10;
        }
    , 2000);
  });
  function Redirect(lien){
    window.location.href=lien;
    }
    abc[10].addEventListener('click', function() {
      bleep.play();
      setTimeout(function(){
          window.location=lien11;
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

