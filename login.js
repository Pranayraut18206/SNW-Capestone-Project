const button=document.getElementsByClassName("button")[0];
const message=document.getElementById("message");
const user={
    username:"pranay",
    password:"9876"
};

button.addEventListener('click',function(e){
    e.preventDefault();
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    if(username===user.username && password===user.password){
        message.textContent="✅ Login successful!";
        message.style.color="green";
    }
    else{
        message.textContent="❌ Invalid username or password";
        message.style.color="red";
    }
})