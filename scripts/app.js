console.log("app 5.12");


function checkURL() {
    
    //flush out all divs before checking
    var theButtons = document.getElementById("myButtons");
    var theSignUp = document.getElementById("mySignUp");
    var theLogin = document.getElementById("myLogin");
    
    theButtons.style.display = "none";
    theLogin.style.display = "none";
    theSignUp.style.display = "none";

    
   var urlParams = new URLSearchParams(window.location.search);
   if(urlParams.has('action'))
       {
           var query = urlParams.get('action');
           if(query=="login")
               setupLogin();
           else if(query=="signup")
               setupSignUp();

       }
    else if(urlParams.get('action')==null)
        setupButtons();
    
console.log("query: " + query); 
 
    
}
    
function setupLogin()
{
    console.log("setupLogin()");
    theLogin.style.display = "block";
    var theLogin = document.getElementById("myLogin");
    const lemail = document.getElementById("loginEmail");
    const lpass = document.getElementById("loginPassword");
    
    btnLogin.addEventListener('click', e => {
        
        const email = lemail.value;
        const pass = lpass.value;
        const auth = firebase.auth();
        
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
        
        
    });
    
    
    
    
}

function setupSignUp()
{
    console.log("setupSignUp()");
    theSignUp.style.display = "block";
    var theSignUp = document.getElementById("mySignUp");
    
    btnSignUp.addEventListener('click', e => {
        
         const email = lemail.value;
        const pass = lpass.value;
        const auth = firebase.auth();
        
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
        
        
    });
    
  
}

function setupButtons()
{
    console.log("setupButtons()");
    var theButtons = document.getElementById("myButtons");
    theButtons.style.display = "block";
}




firebase.auth().onAuthStateChanged(firebaseUser => {
    
    if(firebaseUser){
        console.log(firebaseUser);
    }
    else{
        console.log('not logged in');  
    }
    
})
















    
//    var bigOne = document.getElementById('bigOne');
//    var dbRef = firebase.database().ref().child('text');
//    dbRef.on('value', snap => bigOne.innerText = snap.val());


    
    