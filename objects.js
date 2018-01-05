

var studentId = 0;
function Student(firstName,lastName,grade) {
    this.id = studentId++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;

    /* needs to be implemented
    this.sections = [];
     */
}

var teacherId = 0;
function Teacher(firstName,lastName,subject) {
    this.id = teacherId++;
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


function Section(name,count, currentSize, maxSize, teacher, student) {
    this.name = name;
    this.count = count;
    this.maxSize = maxSize;
    this.currentSize = currentSize;
    this.teacher = teacher;
    this.student = student;

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
sectionSeatsRemaining()
