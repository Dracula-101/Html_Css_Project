var sendButton = document.getElementById("contact-send");
sendButton.onclick = contactInfoSend;

var form_id_js = "javascript_form";

var data_js = {
    "access_token": "1vgl86im8uq8m7wyv1yl2jfi"// sent after you sign up
};


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

function js_onSuccess() {
    // remove this to avoid redirect
    alert("Email sent successfully");
    window.location.href = "index.html";
}

function js_onError(error) {
    // remove this to avoid redirect
    alert("Error sending email. Please try again later");
}


function contactInfoSend(){

    sendButton.value='Sending. . .';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
        sendButton.value ="Submit";
        sendButton.disabled = false;
    };

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
    if(!sendMail(name.value , email.value , phone.value, message.value, request)) return;
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function sendMail(name , email , phone, message, request){
    var subject = 'Contact Form Submission from ' + name;
    var message = 'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nMessage: ' + message;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    return false;
}

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});