/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');  
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "abelghezae25@gmail.com",
//         Password : "DE8051671B4F0C29115DDB9328E6F797BA99",
//         To:'abelghezae25@gmail.com',
//         From: document.getElementById("email").value,
//         Subject : document.getElementById("subject").value,
//         Body: document.getElementById("message").value
//     }).then(
//       message => alert(message)
//     );
// }