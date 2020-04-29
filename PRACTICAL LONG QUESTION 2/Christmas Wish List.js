function formValidation() {
    var name = document.wishListForm.name;
    var message = document.wishListForm.message;
    var present1 = document.wishListForm.present1;
    var present2 = document.wishListForm.present2;
    var present3 = document.wishListForm.present2;
    var present4 = document.wishListForm.present2;
    var present5 = document.wishListForm.present2;
    var address = document.wishListForm.address;

    if (name_validation(name)) {
    if (message_validation(message)) {
    if (present_validation(present1,present2,present3,present4,present5)) {
    if (address_validation(address)) {
        alert("Form successfully submitted. Thank you!");
        window.location.reload();
        return true;
    }
    }
    }
    }
    return false;
}

function name_validation(name) {
    if (name.value == "") {
        alert("Please enter your name so that Santa Claus knows who you are!.");
        name.focus();
        return false;
    }else {
        return true;
    }
} 

function message_validation(message) {
    if (message.value == "") {
        alert("Are you sure you don't have any message for Santa Claus? At least write down something!");
        message.focus();
        return false;
    } else {
        return true;
    }
}

function present_validation(present1,present2,present3,present4,present5) {
    if (present1.value == "" && present2.value == "" && present3.value == "" && present4.value == "" && present5.value == "") {
        alert("At least fill in one of your preferred present in the form field!");
        present1.focus();
        return false;
    } else {
        return true;
    }
}

function address_validation(address) {
    if (address.value == "") {
        alert("Please enter your address, otherwise Santa Claus might not know where to deliver the presents!");
        address.focus();
        return false;
    } else {
        return true;
    }
}