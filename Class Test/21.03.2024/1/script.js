let haveInputErrors = false;

function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remarks = document.getElementById('remarks').value;
    let genderElement = document.querySelector('input[name="gender"]:checked');
    let courseElementArray = document.querySelectorAll('input[name="course"]:checked');
    let location = document.getElementById('location').value;

    //Validation
    let errorName = document.getElementById('error-name');
    if (name == '') {
        setError(errorName, 'Please Enter Your Name');
    } else if(name.length > 50) {
        setError(errorName, 'Max 50 Characters');
    } else {
        removeError(errorName);
    }

    let errorContact = document.getElementById('error-contact');
    if (contact == '') {
        setError(errorContact, 'Please Enter Your Mobile Number');
    } else {
        let regex = /^\d{11}$/;
        if(!regex.test(contact)){
            setError(errorContact, 'Enter 11 Digit Mobile Number');
        } else {
            removeError(errorContact);
        }
    }

    let errorRemarks = document.getElementById('error-remarks');
    if(errorRemarks != '' && errorRemarks.length > 200) {
        setError(errorRemarks, 'Max 200 Characters');
    } else {
        removeError(errorRemarks);
    }

    let errorGender = document.getElementById('error-gender');
    let gender = "";
    if(genderElement == undefined){
        setError(errorGender, "Please Select Gender");
    } else {
        gender = genderElement.value;
        removeError(errorGender);
    }

    let errorCourse = document.getElementById('error-course');
    let courseValueArray = [];
    courseElementArray.forEach(
        function (course) {
            courseValueArray.push(course.value);
        }
    )
    if (courseValueArray.length < 1) {
        setError(errorCourse, "Please Select At Least 1 Course");
    } else {
        removeError(errorCourse);
    }

    let errorLocation = document.getElementById('error-location');
    if (location == '') {
        setError(errorLocation, 'Please Select Location');
    } else {
        removeError(errorLocation);
    }

    if(!haveInputErrors){
        let output = 'Name: ' + name + '\n';
        output += 'Contact: ' + contact + '\n';
        output += 'Remarks: ' + (remarks == '' ? '---' : remarks) + '\n';
        output += 'Gender: ' + gender + '\n';
        output += 'Course(s): ' + courseValueArray.join(', ') + '\n';
        output += 'Location: ' + location + '\n';
    
        let newWindow = window.open('', '_blank');
        newWindow.document.write('<pre><h1>' + output + '</pre><h1>');
    }

}

function setError(element, message){
    element.innerHTML = message;
    element.style.display = 'block';
    haveInputErrors = true;
}

//TODO this needs to be fixed later
function removeError(element){
    element.innerHTML = '';
    element.style.display = 'none';
    haveInputErrors = false;
}

let dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', submitForm);
