var id = 0;

function Student(firstName,lastName,grade) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sections = [];
    this.addSectionToStudent = function(sectionToAdd) {
        this.sections.push(sectionToAdd);
    };

}

function Teacher(firstName,lastName,subject) {
    this.id = id++ - 10;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;


}

function Section(name, teacher) {
    this.id = id++;
    this.name = name;
    this.maxSize = 32;
    this.teacher = teacher;
    this.students = [];
    this.addStudent = function(studentToAdd) {
        this.students.push(studentToAdd);
    };

}
