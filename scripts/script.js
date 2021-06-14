(function () {
    // Dom nodes
    const headerText = document.querySelector(".Header__Heading");
    const authScreensWrapper = document.querySelector(".AuthScreens");
    const switchToLoginBtn = document.querySelector(".SwitchBtn--Login");
    const loginForm = document.querySelector(".AuthScreens__Screen--Login");
    const switchToRegisterBtn = document.querySelector(".SwitchBtn--Register");
    const registrationForm = document.querySelector(".AuthScreens__Screen--Register");

    // Delegating events
    loginForm.addEventListener('click', loginHandler);
    loginForm.addEventListener('blur', () => hasValidInputs(loginForm));
    registrationForm.addEventListener('click', registerHandler);
    switchToRegisterBtn.addEventListener('click', switchAuthScreen());
    switchToLoginBtn.addEventListener('click', switchAuthScreen(false));
        

    headerText.innerText = "Login";
    /**
    *
    * @param {Node} formNode 
    *
    * @returns {Boolean} - validity flag
    */
    function hasValidInputs(formNode){
        if(formNode.nodeName !== 'FORM'){
            return console.errors('Expects a form node argument');
        }
        let errors = {};
        let inputsNodeList = formNode.querySelectorAll("[data-validate]");
        inputsNodeList.forEach(node => {
            if(node.validity.valid){
                delete errors[node.name];
            } else {
                errors[node.name] = node.validationMessage
            }  
        });
        const ErrorLabelNodes = formNode.querySelectorAll('.ErrorLabel');
        ErrorLabelNodes.forEach(node => node.textContent = "");
        for(let error in errors){
            let errorNode = formNode.querySelector(`.ErrorLabel--${error}`);
            errorNode.textContent = errors[error];
        }
        return Object.keys(errors).length === 0;
    }
    /**
    *
    * @param {Object} - event object 
    *
    * @returns {undefined}
    */
    function loginHandler(evt){
        evt.preventDefault();
        if(hasValidInputs(loginForm)){
            alert("Logging in")
        }
    }
    /**
    *
    * @param {Object} - event object 
    *
    * @returns {undefined}
    */
    function registerHandler(evt){
        evt.preventDefault();
        if(hasValidInputs(registrationForm)){
            alert("Registering");
        }
    }
     /**
    *
    * @param {Boolean} login - flag indicating which screen to render 
    *
    * @returns {undefined}
    */
    function switchAuthScreen(loginScreen = true){
        return evt => {
            evt.preventDefault();
            evt.stopPropagation();
            headerText.innerText = loginScreen ? "Register" : "Login";
            if(loginScreen){
                authScreensWrapper.classList.add('AuthScreens--ShiftLeft')
            } else {
                authScreensWrapper.classList.remove('AuthScreens--ShiftLeft')
            }
        }
    }
})();