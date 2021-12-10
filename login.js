var LOGIN_API = "https://youtube-api-challenger2.appspot.com/authentication";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function(){
        loginHandle();
    }
}

function loginHandle(){
    var username = document.forms["login-form"].elements["username"].value;
    var password = document.forms["login-form"].elements["password"].value;

    var obj = {
        "data": {
            "type": "MemberLogin",
            "attributes": {
                "username": username,
                "password": password
            }
        }
    }
// construct an HTTP request

var xhr = new XMLHttpRequest(); // Đối tượng có sẵn.
// Mở kết nối tới sever với địa chỉ cho trước . Phương thưc POST.
xhr.open("POST", LOGIN_API, true);// gửi lên đâu, kieur gửi là gì.
//Gửi dữ liệu theo định dạng json
xhr.send(JSON.stringify(obj));// gửi xong rồi thì sao ?
//gửi thành công thì sao
xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var responseObject = JSON.parse(xhr.responseText);
        // alent(responseOject.data.attributes.secretToken);
        localStorage.setItem("secretToken", responseObject.data.attributes.secretToken);
//Hiển thị thông báo cho người dùng.
        document.getElementById("total-msg").classList = "error-msg";
        document.getElementById("total-msg").innerHTML = "Login thành công";
            }else{
                if(xhr.readyState === XMLHttpRequest.DONE){
                    var responseObject = JSON.parse(xhr.responseText);
                    document.getElementById("total-msg").classList = "error-msg";
                    document.getElementById("total-msg").innerHTML = responseObject.errors[0].title + " " + responseObject.errors[0].detail;
                }

            }
        };
    }
