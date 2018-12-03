//click item đăng nhập
function userClick(){
	if(document.getElementById('acc-click').style.display=="none")
		document.getElementById('acc-click').style.display="block";
	else document.getElementById('acc-click').style.display="none";
}


//kiểm tra thong tin tài khoản nhập vào
function userInformation(){
	// var f = document.myForm;
	// if (f.fname.value=='') {
	// 	alert("Vui lòng nhập họ và tên!");
	// 	f.fname.focus();
	// 	return false;
	// }
	// return true;
	var fullname=document.getElementById("fullname").value;
	var phone= document.getElementById("phone").value;
	var email=document.getElementById("email").value;
	var address=document.getElementById("address").value;
	var facebook=document.getElementById("facebook").value;
	if (fullname=="") {
		document.getElementById("error-name").innerHTML="Vui lòng nhập đủ họ tên.";
	} else {
		document.getElementById("error-name").innerHTML="";
	}
	if (phone==""){
		document.getElementById("error-phone").innerHTML="Vui lòng nhập số điện thoại.";
	} else {
		document.getElementById("error-phone").innerHTML="";
	}
	if (email==""){
		document.getElementById("error-email").innerHTML="Vui lòng nhập Email.";
	} else {
		document.getElementById("error-email").innerHTML="";
	}
	if (address==""){
		document.getElementById("error-address").innerHTML="Vui lòng nhập địa chỉ.";
	} else {
		document.getElementById("error-address").innerHTML="";
	}
	if (facebook==""){
		document.getElementById("error-facebook").innerHTML="Vui lòng nhập Facebook.";
	} else {
		document.getElementById("error-facebook").innerHTML="";
	}
}

function contact(){
	var ct_fullname=document.getElementById('ct-fullname').value;
	if (ct_fullname=='') {
		document.getElementById("ct-error-name").innerHTML="Vui lòng nhập đủ họ tên.";
	} else {
		document.getElementById("ct-error-name").innerHTML="";
	}
}

function changePass(){
	var change_pass=document.getElementById('change-pass').value;
	if (change_pass=='') {
		document.getElementById("error-change-pass").innerHTML="Vui lòng nhập Email đăng ký	.";
	} else {
		document.getElementById("error-change-pass").innerHTML="";
	}
}