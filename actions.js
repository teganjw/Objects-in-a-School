
function list(){
    var type = document.getElementById("listCategory").value;
console.log(type)
    if(type == 1){
        var s = "<table border = '1'>";
        s+= ("<tr><td>" + 'First Name' + "</td>");
        s+= ("<td>" + 'Last Name' + "</td>");
        s+= ("<td>" + 'Grade' + "</td>");
        s+= ("<td>" + 'Student ID' + "</td></tr>");
        for(var i=0; i<allStudents.length; i++){
            s+= ("<tr><td>" + allStudents[i].firstName + "</td>");
            s+= ("<td>" + allStudents[i].lastName + "</td>");
            s+= ("<td>" + allStudents[i].grade + "</td>");
            s+= ("<td>" + allStudents[i].id + "</td></tr>");
        }
        s+= "</table>";
        document.getElementById("info").innerHTML = s;
    }
    if(type == 2){
        var t = "<table border = '1'>";
        t+= ("<tr><td>" + 'First Name' + "</td>");
        t+= ("<td>" + 'Last Name' + "</td>");
        t+= ("<td>" + 'Subject' + "</td>");
        for(var m=0; m<allTeachers.length; m++){
            t+= ("<tr><td>" + allTeachers[m].firstName + "</td>");
            t+= ("<td>" + allTeachers[m].lastName + "</td>");
            t+= ("<td>" + allTeachers[m].subject + "</td></tr>");
        }
        t+= "</table>";
        document.getElementById("info").innerHTML = t;
    }
    if(type == 3){
        var sec = "<table border = '1'>";
        sec+= ("<tr><td>" + 'Section Name' + "</td>");
        sec+= ("<td>" + 'Teacher' + "</td>");
        for(var n=0; n<allTeachers.length; n++){
            sec+= "<tr><td><a href='#' onclick='studentList(allSections[n].id)'>" + allSections[n].name + "</a></td>";
            sec+= ("<td>" + allSections[n].teacher + "</td></tr>");
        }
        sec+= "</table>";
        document.getElementById("info").innerHTML = sec;
    }

}

function addPerson() {
    document.getElementById("notFilledOut").innerHTML = "";
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
        console.log(allStudents);
    }else{
        document.getElementById("notFilledOut").innerHTML = "Student Added!";
        document.getElementById("students").style.display = "none";
        allStudents.push(new Student(firstName, lastName, grade));
    }
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("grade").value = "";
}

function addTeacher() {
    var firstName = document.getElementById("firsName").value;
    var lastName = document.getElementById("lasName").value;
    var subject = document.getElementById("subject").value;

    if(firstName=="" || lastName=="" || subject==""){
        document.getElementById("notFilledOut").innerHTML = "Some fields have not been filled out! Please try again.";
        console.log(allTeachers);
    }else{
        document.getElementById("notFilledOut").innerHTML = "Student Added!";
        document.getElementById("teachers").style.display = "none";
        allTeachers.push(new Teacher(firstName, lastName, subject));
    }
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("subject").value = "";
}

function addSection() {
    var sectionName = document.getElementById("sectionName").value;
    var teacher = document.getElementById("teacherName").value;

    if(sectionName=="" || teacher=="" ){
        document.getElementById("notFilledOut").innerHTML = "Some fields have not been filled out! Please try again.";
        console.log(allTeachers);
    }else{
        document.getElementById("sections").style.display = "none";
        document.getElementById("notFilledOut").innerHTML = "Section Added!";
        allSections.push(new Section(sectionName, teacher));
    }
    document.getElementById("sectionName").value = "";
    document.getElementById("teacherName").value = "";
}

// function displayStudentToSection() {
//     document.getElementById("none").style.display = "inline";
// }


function buildSelectList() {
    document.getElementById("none").style.display = "inline";

    var stu = "";
    for(var a=0; a<allStudents.length; a++){
        stu+= "<option value = '" +
            allStudents[a].id + "'>" +
            allStudents[a].firstName + " " +
            allStudents[a].lastName + "</option>"
    }

    document.getElementById("stuId").innerHTML = stu;

    var sec = "";
    for(var i=0; i<allSections.length; i++){
        sec+= "<option value = '" +
            allSections[i].id + "'>" +
            allSections[i].name + " - " +
            allSections[i].teacher + "</option>"
    }
    document.getElementById("secId").innerHTML = sec;
    console.log(sec)
}

function getSectionById(secId){
    for(var i=0; i<allSections.length; i++){
        if(allSections[i].id == secId){
            return allSections[i];
        }
    }
}
function getStudentById(stuId){
    for(var i=0; i<allStudents.length; i++){
        if(allStudents[i].id == stuId){
            return allStudents[i];
        }
    }
}

function addToSec(){
    var student = document.getElementById("stuId").value;
    var section = document.getElementById("secId").value;
    console.log(section)
    var sec = getSectionById(section);
    var stu = getStudentById(student);
    sec.addStudent(stu);
}

function studentList(secId){

}