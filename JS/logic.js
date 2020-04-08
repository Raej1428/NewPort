// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAghWr1WuGIFliY2NXtRvjd4nJuq9U-Na8",
    authDomain: "portfolioform-cc3ea.firebaseapp.com",
    databaseURL: "https://portfolioform-cc3ea.firebaseio.com",
    projectId: "portfolioform-cc3ea",
    storageBucket: "portfolioform-cc3ea.appspot.com",
    messagingSenderId: "546924526258",
    appId: "1:546924526258:web:a7f508de569871c7aee7ab",
    measurementId: "G-TX0GFFLXLQ"
};
// Initialize Firebase
firebase.initializeApp(config);
var database = firebase.database();


$("#submit-form").click(function writeUserData(userId, name, phone, email, message) {
    firebase.database().ref('users/' + userId).set({
        fullNameId: name,
        phoneId: phone,
        emailId: email,
        messageId: message
    });
});

//#region Database functions
// $("#submit-form").click(function (event) {
//     event.preventDefault();


//     var name = $("#FullNameId").val().trim();
//     var phone = $("#EmailId").val().trim();
//     var email = $("#PhoneId").val().trim();
//     var message = $("#MessageId").val().trim();

//     console.log(EmailId);
//     console.log(MessageId);

//     database.ref().set({
//         fullNameId: name,
//         phoneId: phone,
//         emailId: email,
//         messageId: message
//     }), function (errorObject) {
//         console.log("The read failed: " + errorObject.code);
//         alert("Message not sent!")
//     }

//     alert("Message has been sent!");

// });

// firebase.analytics();


