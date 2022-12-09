function sendEmail(){
    Email.send({
        Host : "2500336@aruba.it",
        Username : "2500336@aruba.it",
        Password : "4Y0urC0NTR0L!20$$",
        To : "info@eidsbelaleman.com",
        From : document.getElementById("email").value,
        Subject : "Someone wants to contact you",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}