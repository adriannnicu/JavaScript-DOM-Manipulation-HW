function validateForm(event) {
    event.preventDefault();

    var checkName = document.forms["myForm"]["name"].value;
    var checkLastName = document.forms["myForm"]["lastname"].value;
    var checkGender = document.forms["myForm"]["gender"];
    var checkDetails = document.forms["myForm"]["details"].value;

    document.getElementById("name").classList.remove("error");
    document.getElementById("lastname").classList.remove("error");
    document.getElementById("details").classList.remove("error");

    if (checkName === ""){
        document.getElementById("name").classList.add("error");
    } 
    
    if (checkLastName === ""){
        document.getElementById("lastname").classList.add("error");
    } 

    var genderMessage;
    var selectedGender = Array.from(checkGender).some(radio => radio.checked);
    if (!selectedGender) {
        genderMessage = "Gender is required !";
    } else {
        genderMessage = "";
    }
    document.getElementById("check-gender").innerHTML = genderMessage;

    if (checkDetails === ""){
        document.getElementById("details").classList.add("error");
    } 

    if (checkName !== "" && checkLastName !== "" && selectedGender && checkDetails !== "") {
        showSuccessMessage();
        document.forms["myForm"].reset();
    }
}

function showSuccessMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    setTimeout(function () {
        successMessage.style.display = "none";
    }, 10000); // 10 sec
}