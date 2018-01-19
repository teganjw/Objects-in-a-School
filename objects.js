var id = 0;

function Student(firstName,lastName,grade) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
}

function Teacher(firstName,lastName,subject) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;

    /* needs to be implemented
    this.sections = [];
     */
}


// id - a number that increments every time a new one Teacher object is created
// name - string
// maxSize - number
// currentSize - number
// students - an Array of <Student> objects
// teacher - Teacher
// add student(Student)
// removeStudent(id)
var sec = new Section("Math",32);

sec.teacher = "Albinson";
// sec.addStudent(Student);

function Section(name, teacher) {
    this.id = id++;
    this.name = name;
    this.maxSize = 32;
    // this.currentSize = this.students.length;
    this.teacher = teacher;
    this.students = [];

    this.addStudent = function(studentToAdd) {
        this.students.push(studentToAdd);
    };

    this.removeStudent = function(studentToRemove){


    }
    /* Needs to be implemented

    this.students = [];
    this.teacher;

    this.addTeacher = function(teacher) {
        this.teacher = teacher;
    }

    this.addStudent = function(student) {
        this.students.push(student);
    }

    this.removeStudent = function(student) {
        //remove student
    }
    */
}

//sectionSeatsRemaining()
