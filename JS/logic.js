// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

console.log(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
console.log("here we go");

$("#submit-form").click(function (event) {
    event.preventDefault();
    console.log(123);

    var name = $("#name").val().trim();
    var phone = $("#email").val().trim();
    var email = $("#phone").val().trim();
    var message = $("#message").val().trim();
   

    database.ref('messages').push({
        fullName: name,
        phone: phone,
        email: email,
        message: message
    }), function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        alert("Message not sent, see console for error.");

    }

    alert("Message sent!");
    
});

