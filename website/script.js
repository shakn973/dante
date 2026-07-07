function validation() {
    let name= document.getElementById("name").ariaValueMax;
    let email= document.getElementById("email").ariaValueMax;
    let message= document.getElementById("message").ariaValueMax;

    if(name==""){
        alert("please enter your name.");
        return false;
    }

    if(email==""){
        alert("please enter your email.");
        return false;
    }

    if(message==""){

        alert("please enter your message.");
        return false;
    }
        alert("message submitted successfully!");
        return true;
    }




