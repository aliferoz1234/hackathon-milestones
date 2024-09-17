var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); //prevent page reload
    //collect input values
    var profilePictureInput = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureInput ? URL.createObjectURL(profilePictureInput) : "";
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // resume output
    var resumeOutput = "\n    <h2><b>Resume</b></h2>\n    <img src=\"".concat(profilePictureURL, "\" alt=\"Profle Picture\" class=\"profilePicture\">\n    <h3>Personal Information</h3>\n    <p><b>Name: </b>").concat(name, "</p>\n    <p><b>Email: </b>").concat(email, "</p>\n    <p><b>Phone: </b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
    var resumeOutputElement = document.getElementById('resumeDisplay');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('the resume output elements are missing');
    }
});
