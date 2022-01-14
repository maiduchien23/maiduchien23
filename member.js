var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function(){
        validateForm();
    }
}

function validateForm(){
    // Lay gia tri cac phan tu trong form.
    // Validate username
    var usernameInput = document.forms["member"].element["username"];
    var username = usernameInput.value;
    if(username.length == 0){
        usernameInput.nextElementSibling.innerHTML = "Vui lòng nhập thông tin tài khoản";   
    }else if (username.length < 7){
        usernameInput.nextElementSibling.innerHTML = "Thông tin tài khoản phải dài hơn 7 ký tự"; 
    }else {
        usernameInput.nextElementSibling.innerHTML = "";
    }
    //Validate password.
    var usernameInput = document.forms["member"].element["password"];
    var username = usernameInput.value;
    if(username.length == 0){
        usernameInput.nextElementSibling.innerHTML = "Vui lòng nhập thông tin tài khoản";   
    }else if (username.length < 7){
        usernameInput.nextElementSibling.innerHTML = "Thông tin tài khoản phải dài hơn 7 ký tự"; 
    }else {
        usernameInput.nextElementSibling.innerHTML = "";
    }
}
// Validate repassword
var rePasswordInput = document.forms["member"].elements["re-password"];
var rePassword = rePasswordInput.value;
if(rePassword !== password){
    rePasswordInput.nextElementSibling.innerHTML = "Mật khẩu không khớp!";
}else{
    rePasswordInput.nextElementSibling.innerHTML = "";
}
// Validate fullName
var fullNameInput = document.forms["member"].elements["fullName"];
var fullName = fullNameInput.value;
if(fullName.length == 0){
    fullNameInput.nextElementSibling.innerHTML = "Vui lòng nhập họ và tên!";
}else if(fullName.length <7){
    fullNameInput.nextElementSibling.innerHTML = "Họ và tên phải dài hơn 7 ký tự!";
}else{
    fullNameInput.nextElementSibling.innerHTML = "";
}
// Validate email.
var emailInput = document.forms["member"].elements["email"];
var email = emailInput.value;
if(email.length == 0){
    emailInput.nextElementSibling.innerHTML = "Vui lòng email";
}else if(email.length <7){
    emailInput.nextElementSibling.innerHTML = "Email phải dài hơn 7 ký tự!";
}else{
    emailInput.nextElementSibling.innerHTML = "";
}
var telInput = document.forms["member"].element["tel"];
var telname = telInput.value;
if(telname.length == 0){
    telInput.nextElementSibling.innerHTML = "Nhập số tài khoản";   
}else if (telname.length == 10){
    telInput.nextElementSibling.innerHTML = "Số điện thoại phải là 10 ký tự"; 
}else {
    telInput.nextElementSibling.innerHTML = "";
}
}
var object = {
    "data": {
        "type": "Member",
        "attributes": {
            "username": username,
                "password": password,
                "fullName": fullName,
                "email": email,
                "tel":tel,
                "birthday": 15066499900231,
              
        }
    }
}
// construct an HTTP request

var xhr = new XMLHttpRequest(); // Đối tượng có sẵn.
// Mở kết nối tới sever với địa chỉ cho trước . Phương thưc POST.
xhr.open("POST", MEMBER_API, true);// gửi lên đâu, kieur gửi là gì.
//Gửi dữ liệu theo định dạng json
xhr.send(JSON.stringify(object));// gửi cái gì?
xhr.onreadystatechange = function() {//gửi xong rồi thì sao?
    //gửi thành công thì sao?
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
    
//Hiển thị thông báo cho người dùng.
        document.getElementById("total-msg").classList = "error-msg";
        document.getElementById("total-msg").innerHTML = "Đăng ký thành công";
            }else{
                if(xhr.readyState === XMLHttpRequest.DONE){
                    var responseObject = JSON.parse(xhr.responseText);
                    document.getElementById("total-msg").classList = "error-msg";
                    document.getElementById("total-msg").innerHTML = responseObject.errors[0].title + " " + responseObject.errors[0].detail;
                }

            }
        };
    }
