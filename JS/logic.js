// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAghWr1WuGIFliY2NXtRvjd4nJuq9U-Na8",
    authDomain: "portfolioform-cc3ea.firebaseapp.com",
    databaseURL: "https://portfolioform-cc3ea.firebaseio.com",
    projectId: "portfolioform-cc3ea",
    storageBucket: "portfolioform-cc3ea.appspot.com",
    messagingSenderId: "546924526258",
    appId: "1:546924526258:web:a7f508de569871c7aee7ab"
};
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

