(function () {

    let loginForm = document.forms[0];
    let loginBtn = document.getElementsByClassName("btn-login")[0];

    /**listening to click event on the sign up /sign link to display appropriate form field */

    let signup = document.getElementById("sign-up-link");
    signup.addEventListener('click', function (event) {

        event.preventDefault();
        serveForm();
    });



    /**
     * # serving appropriate form depending on what action user wants to take
     * 
     * @returns { undefined }
     */

    function serveForm() {
        let formType = loginBtn.textContent;

        loginForm.classList.remove("fade-in", "fade-out");
        loginForm.classList.add("fade-out");

        let formTypeTest = formType.toLowerCase() == "sign up";

        let emailField = document.getElementsByClassName("form-group-email")[0];
        emailField.style.display = formTypeTest ? "none" : "block";

        loginForm.classList.add("fade-in");

        document.getElementById("sign-up-link").textContent = formTypeTest ? "sign up" : "sign in";
        loginBtn.textContent = formTypeTest ? "Login" : "Sign up";
    }



    loginBtn.addEventListener('click', function () {

        // check whether it is a login or sign up action
        //if login action is required, check if user exists.
        //if user exists, open user's account
        //if user doesn't exist, open sign up form for account creation.
        //if sign up action was required, validate inputs and add user with valid data to the database
    });

})();