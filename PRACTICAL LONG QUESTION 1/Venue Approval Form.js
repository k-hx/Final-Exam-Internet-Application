function formValidation() {
    var venue = document.venueApprovalForm.venue.value;
    var lectureHall = document.venueApprovalForm.selectLectureHall;
    var otherVenue = document.venueApprovalForm.otherVenue;
    var applicantName = document.venueApprovalForm.applicantName;
    var phoneNumber = document.venueApprovalForm.phoneNumber;
    var applyFrom = document.venueApprovalForm.applyFrom;
    var event = document.venueApprovalForm.event;
    var startDate = document.venueApprovalForm.startDate.value;
    var endDate = document.venueApprovalForm.endDate.value;
    var noOfParticipants = document.venueApprovalForm.noOfParticipants;

    if (venue_validation(venue,lectureHall,otherVenue)) {
    if (applicantName_validation(applicantName)) {
    if (phoneNumber_validation(phoneNumber)) {
    if (applyFrom_validation(applyFrom)) {
    if (event_validation(event)) {
    if (startDate_validation(startDate)) {
    if (endDate_validation(endDate)) {
    if (noOfParticipants_validation(noOfParticipants)) {
        alert("Form successfully submitted. Thank you!");
        window.location.reload();
        return true;
    }
    }
    }
    }
    }
    }
    }   
    }
    return false;
}

function venue_validation(venue, lectureHall, otherVenue) {
    if(venue == "") {
        alert("Please select the venue. Thank you.");
        return false;
    } else if (venue == "lecture halls") {
        if (lectureHall.value == "default") {
            alert("Please select the lecture hall. Thank you.");
            lectureHall.focus();
            return false;
        } else {
            return true;
        }
    } else if (venue == "others") {
        if (otherVenue.value == "") {
            alert("Please enter the name of the venue. Thank you.");
            otherVenue.focus();
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function applicantName_validation(name) {
    var letters = /^[A-Za-z]+$/;

    if (name.value == "") {
        alert("Please enter the applicant name. Thank you.");
        name.focus();
        return false;
    } else if (name.value.match(letters)) {
        return true;
    } else {
        alert("Please enter the applicant name correctly. Thank you.");
        name.focus();
        return false;
    }
}

function phoneNumber_validation(number) {
    if (number.value.length < 10) {
        alert("Please enter the phone number correctly. Thank you.");
        number.focus();
        return false;
    } else {
        return true;
    }
}

function applyFrom_validation(applyFrom) {
    if (applyFrom.value == "") {
        alert("Please enter the 'Apply from' field. Thank you.");
        applyFrom.focus();
        return false;
    } else {
        return true;
    }
}

function event_validation(event) {
    if (event.value == "") {
        alert("Please enter the name of the event. Thank you.");
        event.focus();
        return false;
    } else {
        return true;
    }
}

function startDate_validation(startDate) {
    if (startDate == "2000-12-25") {
        alert("Please select the start date. Thank you.");
        return false;
    } else {
        return true;
    }
}

function endDate_validation(endDate) {
    if (endDate == "2000-12-25") {
        alert("Please select the end date. Thank you.");
        return false;
    } else {
        return true;
    }
}

function noOfParticipants_validation(noOfParticipants) {
    if (noOfParticipants.value < 1) {
        alert("Please enter a valid number of participants. Thank you.");
        noOfParticipants.focus();
        return false;
    } else {
        return true;
    }
}