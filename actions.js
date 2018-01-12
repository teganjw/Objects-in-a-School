
function list(){
    var t = "<table border = '1'>";
    t+= ("<tr><td>" + 'First Name' + "</td>");
    t+= ("<td>" + 'Last Name' + "</td>");
    t+= ("<td>" + 'Grade' + "</td>");
    t+= ("<td>" + 'Student ID' + "</td></tr>");
    for(var i=0; i<allStudents.length; i++){
        t+= ("<tr><td>" + allStudents[i].firstName + "</td>");
        t+= ("<td>" + allStudents[i].lastName + "</td>");
        t+= ("<td>" + allStudents[i].grade + "</td>");
        t+= ("<td>" + allStudents[i].id + "</td></tr>");
    }
    t+= "</table>";
    console.log(t);
    document.getElementById("info").innerHTML = t;
}

function addPerson() {
    var person = document.getElementById("Category").value;
    console.log(person);

    document.getElementById("chooseCat").innerHTML = "";
    document.getElementById("students").style.display = "";
    document.getElementById("teachers").style.display = "";
    document.getElementById("sections").style.display = "";

    if(person == "0"){
        document.getElementById("chooseCat").innerHTML = "Please Select a Category";
    }
    if(person == "1"){
        document.getElementById("students").style.display = "inline";
    }
    if(person == "2"){
        document.getElementById("teachers").style.display = "inline";
    }
    if(person == "3"){
        document.getElementById("sections").style.display = "inline";
    }
}


function addStudent() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var grade = document.getElementById("grade").value;

    if(firstName=="" || lastName=="" || grade==""){
        document.getElementById("notFilledOut").innerHTML = "Some fields have not been filled out! Please try again.";
    }else{
        document.getElementById("notFilledOut").innerHTML = "";
        allStudents.push(new Student(firstName, lastName, grade));
        // document.getElementById("students").innerHTML = "Student Added!";
        console.log(allStudents);
    }
}

function addTeacher() {
    var firstName = document.getElementById("firsName").value;
    var lastName = document.getElementById("lasName").value;
    var subject = document.getElementById("subject").value;

    allStudents.push(new Teacher(firstName, lastName, subject));
    document.getElementById("teachers").innerHTML = "Teacher Added!";
    console.log(allTeachers);
}

function addSection() {
    var sectionName = document.getElementById("sectionName").value;
    var teacher = document.getElementById("teacherName").value;

    allStudents.push(new Section(sectionName, teacher));
    document.getElementById("sections").innerHTML = "Section Added!";
    console.log(allSections);
}

function displayStudentToSection() {
    document.getElementById("addStu").style.display = "inline";
}

function addStuToSection(){
    var stuID = document.getElementById("studentDropdown").value;
    var secId = document.getElementById("sectionDropdown").value;

    var studentObject = findStudentById(stuId);
    var sectionObject = fundSectionById(id);

    sectionObject.addStudent(studentObject);


}

function findStudentById(id) {

    //iterate over all students arr
    for(var i=0; i<allStudents.length; i++){
        if(allStudents[i] == id){
            return allStudents[i]
        }
    }
    // if (allStudents[i].id == id) { return allStudents[i] }

    return student
}