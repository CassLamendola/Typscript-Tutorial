var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, middleInitial, lastName, age) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello " + this.fullName;
    };
    Person.prototype.giveAge = function () {
        return "I am " + this.age + " years old";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, middleInitial, lastName, age, courses) {
        var _this = _super.call(this, firstName, middleInitial, lastName, age) || this;
        _this.courses = courses;
        return _this;
    }
    Student.prototype.listCourses = function () {
        return "Courses: " + this.courses.join(', ');
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(firstName, middleInitial, lastName, age, students) {
        var _this = _super.call(this, firstName, middleInitial, lastName, age) || this;
        _this.students = students;
        return _this;
    }
    Teacher.prototype.listStudents = function () {
        return "Students: " + this.students.join(', ');
    };
    return Teacher;
}(Person));
var PersonCreator = /** @class */ (function () {
    function PersonCreator() {
    }
    PersonCreator.prototype.createPerson = function (options) {
        if (options.type === 'student') {
            return StudentCreator(options.firstName, options.middleInitial, options.lastName, options.age, options.courses);
        }
        else if (options.type === 'teacher') {
            return TeacherCreator(options.firstName, options.middleInitial, options.lastName, options.age, options.courses);
        }
        else {
            throw new Error('Select either student or teacher');
        }
    };
    return PersonCreator;
}());
function StudentCreator(firstName, middleInitial, lastName, age, courses) {
    return new Student(firstName, middleInitial, lastName, age, courses);
}
function TeacherCreator(firstName, middleInitial, lastName, age, students) {
    return new Teacher(firstName, middleInitial, lastName, age, students);
}
function greeter(person) {
    return person.greet();
}
var personCreator = new PersonCreator();
var courses = ['Algebra', 'Algorithms', 'Biology', 'Rocket Science'];
var jane = personCreator.createPerson({
    firstName: 'Jane',
    middleInitial: 'M.',
    lastName: 'Doe',
    age: 25,
    courses: courses,
    type: 'student'
});
document.getElementById('1').innerHTML = jane.listCourses();
document.getElementById('2').innerHTML = jane.giveAge();
var students = ['Jane', 'Bobby', 'Joe'];
var sally = personCreator.createPerson({
    firstName: 'Sally',
    middleInitial: 'L.',
    lastName: 'Johnson',
    age: 39,
    courses: students,
    type: 'teacher'
});
document.getElementById('3').innerHTML = sally.listStudents();
document.getElementById('4').innerHTML = sally.giveAge();
document.getElementById('5').innerHTML = greeter(jane);
