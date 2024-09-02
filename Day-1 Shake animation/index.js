function validateInput() {
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value.trim();
    const errorMessage = document.getElementById("errorMessage");  

    if(inputValue === "") {
        errorMessage.classList.add("shake");
        errorMessage.style.visibility = "visible";

        setTimeout(() => {
            errorMessage.classList.remove("shake");
            errorMessage.style.visibility = "hidden";
        }, 500);
    }
    else {
        alert("Valid Input");
        inputField.value = "";  
    }
}