class Signup {
    static firstName = $("#firstname");
    static lastName = $("#lastname");
    static emailId = $("#email");
    static dateOfBirth = $("#dateOfBirth");
    static username = $("#username");
    static password = $("#password");
    static confirmPassword = $("#cpassword");
    static signupButton = $("#sinUp");
   

    static isValid() {
        var regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        if ($("#firstname").val() == "") {
            alert("enter firstname");
            return false;
        }
        if ($("#lastname").val() == "") { 
             alert("enter lastname");
             return false;
        }
        if ($("#email").val() == "") { 
            alert("enter email");
            return false;
        }

        // if (!regex.test($("#email").val())) {
        //     alert("enter proper mail id");
        // }

        if ($("#dateOfBirth").val() == "") { 
            alert("enter dateOfBirth");
            return false;
        }
        if ($("#username").val() == "") {
            alert("enter username");
            return false;
        }
        if ($("#password").val() == "") { 
             alert("enter password");
             return false;
        }
        if ($("#cpassword").val() == "") { 
            alert("enter confirm password");
            return false;
        }
        if ($("#password").val() != $("#cpassword").val()) {
            alert("password and confirm passowrd is not matching");
            return false;
         }
        return true;
    }

    static doLogin() {
        if (this.isValid()) {
           // alert("Registered successfully");
           swal({
            text: `Hi, ${$("#username").val()} you Registered Successfully!!`,
            icon: "success",
          });
        }
    }

    static initializeHandlers() {
        $("#sinUp").on("click",()=>Signup.doLogin()); 
    }
}
$(document).ready(() => {
    Signup.initializeHandlers();
 })