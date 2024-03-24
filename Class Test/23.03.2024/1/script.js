function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
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

    let errorElements = document.querySelectorAll('.error-message');
    let haveInputErrors = false;
    for(let i = 0; i < errorElements.length; i++){
        if(errorElements[i].style.display == 'block'){
            haveInputErrors = true;
            break;
        }
    }

    if(!haveInputErrors){
        let output = 'Name: ' + name + '\n';
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
}

function removeError(element){
    element.innerHTML = '';
    element.style.display = 'none';
}

let dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', submitForm);
