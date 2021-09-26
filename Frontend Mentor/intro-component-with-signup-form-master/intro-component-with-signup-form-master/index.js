const inputFields = document.querySelectorAll("input");



    // startTypingEffect()
document.querySelector("#form").addEventListener("submit", event => {
    event.preventDefault();


    const  validateEmail = (email) => /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email);
    let hasError = false;

    inputFields.forEach(input => {
       const removeError = () => input.parentElement.classList.remove("error");
       const addError = () => input.parentElement.classList.add("error");
       
        input.addEventListener('input',() => {            
            removeError();
            if(input.getAttribute('type') === 'email'){
                if(!validateEmail(input.value)){
                    hasError = true;
                    addError();
                }
            }            
        });
        if(input.value === '' || input.value === null) {
            addError();
            hasError = true;
            input.setAttribute("placeholder", "");
        } else 
            removeError();
        
    });
    
    if(!hasError){
        function typingEffect() {
            const word = 'Thank You!';
        let wordIndex = 0;
        let wordLength = word.length;
        
        const timeout = setInterval(() => {
            if(wordIndex === wordLength)clearInterval(timeout);
            document.querySelector('.typing').innerText = (word.substring(0,wordIndex++));
        }, 200);
        }

        document.body.innerHTML = `<div class="typing" 
        style="display:flex; align-items:center; justify-content: center; min-height:100vh;
         color:white; font-weight:900; font-size:2rem;"
          onload=${typingEffect()}>
        </div>`;
    }
});

