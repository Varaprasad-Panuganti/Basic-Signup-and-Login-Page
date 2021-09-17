class Login {
    static username = $("#username");
    static password = $("#password");
    static loginButton = $("#login");

    static isValid() {
        if ($("#username").val() == "") {
            alert("enter username");
            return false;
        }
        if ($("#password").val() == "") { 
             alert("enter password");
             return false;
         }
        return true;
    }

    static doLogin() {
        if (this.isValid()) {
            swal({
                text: `Hi, ${$("#username").val()} you Logedin Successfully!!`,
                icon: "success",
              });
        }
    }

    static initializeHandlers() {
        $("#login").on("click",()=>Login.doLogin()); 
    }
}
$(document).ready(() => {
    Login.initializeHandlers();
 })