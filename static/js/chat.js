//#region VARIBALE
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyDW-r9ZzKbBEOae5nGWWwMfp7mGIksdLeo",
//     authDomain: "rnd-chating.firebaseapp.com",
//     projectId: "rnd-chating",
//     storageBucket: "rnd-chating.appspot.com",
//     messagingSenderId: "317091646943",
//     appId: "1:317091646943:web:f28c60b0782f483bf8c86a"
// };
var firebaseConfig = {
    apiKey: "AIzaSyB7LPNGHFiW1ct7Rgd7N0ZtdKNMgwB7el4",
    authDomain: "chat-demo-cacab.firebaseapp.com",
    projectId: "chat-demo-cacab",
    storageBucket: "chat-demo-cacab.appspot.com",
    messagingSenderId: "832187587891",
    appId: "1:832187587891:web:bdedf559a6b98b24e4f246",
  };

var base_url = window.location.origin;
//#endregion


//#region INITIALIZE
// Firebase
firebase.initializeApp(firebaseConfig);

var queryString = window.location.search;
console.log(queryString)
if (queryString != "") {
    var paramsUser = new URLSearchParams(queryString).get("user");
    // var paramsRoom = new URLSearchParams(queryString).get("order");
    paramsRoom = "1";
    // var clean_uri = location.protocol + "//" + location.host + location.pathname;
    // Assign value 
    $("#user").val(paramsUser);
    // paramsUser === "sp1" ?
    // $("#order").html("<option value='1'>Order 1</option>") :
    // paramsUser === "sp2" ?
    // $("#order").html("<option value='2'>Order 2</option>") :
    // $("#order").html("<option value='1'>Order 1</option><option value='2'>Order 2</option>");
    
    // $("#order").val(paramsRoom)
    
    // Config
    $("#messageList").html("");
    // $("#order").prop("disabled", false);
    $(".chat-input").show();
    
    // console.log(paramsRoom);
    messageFetch(paramsUser,paramsRoom);
    // window.history.replaceState({}, document.title, clean_uri);
}
//#endregion

//#region FILTER
$(document).on("change", "#user", function () {
    var sender = $("#user").val();
    location.href = `?user=${sender}`;
});
// $(document).on("change", "#user", function () {
//     var sender = $("#user").val();
//     location.href = `${base_url}/index.html?user=${sender}&order=${sender == "sp2" ? 2 : 1}`;
// });
// $(document).on("change", "#order", function () {
//     var sender = $("#user").val();
//     var room = $("#order").val();
//     location.href = `${base_url}/index.html?user=${sender}&order=${room}`;

// })
//#endregion

//#region SEND MESSAGE
$("#message").on("keyup", function () {
    const value = $(this).val();
    console.log(value);
    
    value != "" ?
        $("#buttonSend").prop("disabled", false) :
        $("#buttonSend").prop("disabled", true);
})
//#endregion