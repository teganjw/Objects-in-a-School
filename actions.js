
function Search(){
    var search = document.getElementById("search").value;
    var results = [];
    for(var i=0; i<allStudents.length; i++){
        if(allStudents[i].firstName.indexOf(search) >-1 || allStudents[i].lastName.indexOf(search) >-1){
            results.push(allStudents[i]);
        }
    }
    if(results.length == 0){
        document.getElementById("stuSearch").innerHTML = "Name is invalid."
    }else{
        var s = "<table border = '1'>";
        s+= ("<tr><td>" + 'First Name' + "</td>");
        s+= ("<td>" + 'Last Name' + "</td>");
        s+= ("<td>" + 'Grade' + "</td>");
        s+= ("<td>" + 'Id' + "</td>");
        s+= ("<td>" + 'Section(s)' + "</td></tr>");
        var stuSecs = "";
        for(var i=0; i<results.length; i++){
            s+= ("<tr><td>" + results[i].firstName + "</td>");
            s+= ("<td>" + results[i].lastName + "</td>");
            s+= ("<td>" + results[i].grade + "</td>");
            s+= ("<td>" + results[i].id + "</td>");
            if(results[i].sections.length == 0){
                stuSecs="none";
            }else{
                for(var a=0; a<results[i].sections.length; a++){
                    stuSecs+= " ";
                    stuSecs+=results[i].sections[a].name

                    if(a != results[i].sections.length-1){
                        stuSecs+=",";
                    }
                }
            }
            s+= ("<td>" + stuSecs + "</td></tr>");
        }
        s+= "</table>";
        document.getElementById("stuSearch").innerHTML = s;
    }
}

function list(){
    var type = document.getElementById("listCategory").value;

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
        for(var a=0; a<allSections.length; a++){
            sec+= "<tr><td><a href='#' onclick='studentList("+ allSections[a].id + ")'>" + allSections[a].name + "</a></td>";
            sec+= ("<td>" + allSections[a].teacher + "</td></tr>");
        }
        sec+= "</table>";
        document.getElementById("info").innerHTML = sec;
    }

}

function addPerson() {
    document.getElementById("notFilledOut").innerHTML = "";
    var person = document.getElementById("Category").value;

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
    console.log(allSections)
    var sectionName = document.getElementById("sectionName").value;
    var teacher = document.getElementById("teacherName").value;

    if(sectionName=="" || teacher=="" ){
        document.getElementById("notFilledOut").innerHTML = "Some fields have not been filled out! Please try again.";
    }else{
        document.getElementById("sections").style.display = "none";
        document.getElementById("notFilledOut").innerHTML = "Section Added!";
        allSections.push(new Section(sectionName, teacher));
    }
    console.log(allSections)
    document.getElementById("sectionName").value = "";
    document.getElementById("teacherName").value = "";
}

function buildSelectList() {
    document.getElementById("none2").style.display = 'none';
    document.getElementById("none").style.display = "inline";
    document.getElementById("list2").innerHTML = "";
    document.getElementById("list5").innerHTML = "";

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
    var sec = getSectionById(section);
    var stu = getStudentById(student);
    sec.addStudent(stu);
    stu.addSectionToStudent(sec);
    document.getElementById("none").style.display = "none";
    document.getElementById("list2").innerHTML = "Student Added";
}

function studentList(secId){
    var section = getSectionById(secId);
    var t = "<table border = '1'>";
    t+= ("<tr><td>" + 'Students in Class' + "</td></tr>");
    t+= ("<tr><td>" + 'First Name' + "</td>");
    t+= ("<td>" + 'Last Name' + "</td>");
    if(section.students.length == 0 ){
        t+= ("<tr>" + "There are no students currently enrolled in this section." + "</tr>");
        document.getElementById("info").innerHTML = t;
    }else{
        for(var m=0; m<section.students.length; m++){
            t+= ("<tr><td>" + section.students[m].firstName + "</td>");
            t+= ("<td>" + section.students[m].lastName + "</td></tr>");
        }
        t+= "</table>";
        document.getElementById("info").innerHTML = t;
    }
}

function removeStudentList(){
    document.getElementById("list5").innerHTML = "";
    document.getElementById("none").style.display = 'none';
    document.getElementById("none2").style.display = "inline";
    document.getElementById("list2").innerHTML = "";

    var stu = "<option>Choose Student</option>";
    for(var a=0; a<allStudents.length; a++){
        stu+= "<option value = '" +
            allStudents[a].id + "'>" +
            allStudents[a].firstName + " " +
            allStudents[a].lastName + "</option>"
    }

    document.getElementById("studId").innerHTML = stu;
}

function chooseStudent(){
    var student = document.getElementById("studId").value;
    student = getStudentById(student);
    var t = "<option>Select a Section</option>";
    for(var a=0; a<student.sections.length; a++){
        t+= "<option value = '" + student.sections[a].id + "'>" +
            student.sections[a].name + "</option>"
    }
    document.getElementById("sectId").innerHTML = t;
}

function remove(){
    var section = document.getElementById("sectId").value;
    var student = document.getElementById("studId").value;
    section = getSectionById(section);
    student = getStudentById(student);
    for(var i=0; i<student.sections.length; i++){
        if(student.sections[i].id == section.id){
            student.sections.splice(i);
        }
    }
    document.getElementById("none2").style.display = 'none';
    document.getElementById("list5").innerHTML = "Student Removed";

}