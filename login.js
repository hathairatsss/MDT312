window.onload = loginLoad;

function loginLoad() {
    const storedUsername = localStorage.getItem("username");
    
    if (!storedUsername) {
        alert("คุณต้องลงทะเบียนก่อนเข้าสู่ระบบ");
        window.location.href = "register.html";
    }
    
    const loginForm = document.getElementById("myLogin");
    loginForm.onsubmit = checkLogin;
}

function checkLogin() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    const inputUsername = document.forms["myLogin"]["username"].value;
    const inputPassword = document.forms["myLogin"]["password"].value;
    
    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        alert("เข้าสู่ระบบสำเร็จ!");
        return true; 
    } else {
        alert("Username หรือ Password ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
        return false;
    }
}
