const emailBox=document.getElementById("email");
const subBtn=document.querySelector(".btn");
const card1=document.querySelector(".card");
const card2=document.querySelector(".thanks-part");
const invalidMsg=document.querySelector(".invalid-msg");

const container =document.getElementById('container');

const curEmail=document.querySelector(".thanks-part span");

invalidMsg.classList.add("hide");
// container.style.display="none";
// card2.classList.add('hide');



subBtn.addEventListener("click",()=>{
    container.style.display="none";
    card2.classList.remove('hide');
    subscribeSuccess();
});

function subscribeSuccess(){
    
        // Get the email input value
        var email = emailBox.value;

        // Regular expression for email validation
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Test the email against the pattern
        if (!emailPattern.test(email)) {
            emailBox.classList.add("error");
            invalidMsg.classList.add('error');
            invalidMsg.classList.remove('hide');
        }
        return email;
}

var currentEmail =email;
curEmail.innerHTML=currentEmail;





    
