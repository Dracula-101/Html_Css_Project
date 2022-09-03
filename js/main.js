function loginPressed(){
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    //alert
    if(email.value === '' || password.value === ''){
        //custom alert
        alert('Please enter your email and password');
        return;
    }
    alert("Email:"+email.value + '\nPassword: ' + password.value);
}

function signupPressed(){
    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const password = document.getElementById('signup-password');
    const confirmPassword = document.getElementById('signup-confirm-password');
    //alert
    if(email.value === '' || password.value === '' || confirmPassword.value === ''){
        //custom alert
        alert('Please enter your email and password');
        return;
    }
    if(password.value !== confirmPassword.value){
        alert('Passwords do not match');
        return;
    }
    alert("Name:"+name.value+"Email:"+email.value + '\nPassword: ' + password.value);
}

function contactInfoSend(){
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const phone = document.getElementById('contact-phone');
    const message = document.getElementById('contact-message');
    //alert
    if(name.value==""|| email.value === '' || message.value === '' || phone.value === ''){
        //custom alert
        alert('Please enter your credentials');
        return;
    }

    //check email validity
    if(!validateEmail(email.value)){
        alert('Please enter a valid email');
        return;
    }
    alert("Message sent successfully");
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}