class Person {
	private fullName: string;
	private age: number;
	constructor(firstName: string, middleInitial: string, lastName: string, age: number) {
		this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
		this.age = age;
	}

	greet() {
		return `Hello ${this.fullName}`;
	}

    giveAge() {
		return `I am ${this.age} years old`;
    }
}

class Student extends Person {
  private courses;
	constructor(firstName, middleInitial, lastName, age, courses) {
		super(firstName, middleInitial, lastName, age);
	  this.courses = courses;
	}

    listCourses() {
		return `Courses: ${this.courses.join(', ')}`;
	}
}

class Teacher extends Person {
  private students;
    constructor(firstName, middleInitial, lastName, age, students) {
		super(firstName, middleInitial, lastName, age);
		this.students = students;
	}

    listStudents() {
		return `Students: ${this.students.join(', ')}`;
    }
}

class PersonCreator {
	createPerson(type: Object);
	createPerson(type: 'student'): Student;
	createPerson(type: 'teacher'): Teacher;

    public createPerson(options): Student | Teacher {
        if (options.type === 'student') {
			return StudentCreator(options.firstName, options.middleInitial, options.lastName, options.age, options.courses)
        } else if (options.type === 'teacher') {
			return TeacherCreator(options.firstName, options.middleInitial, options.lastName, options.age, options.courses)
        } else {
			throw new Error('Select either student or teacher')
        }
    }
}

function StudentCreator(firstName: string, middleInitial: string, lastName: string, age: number, courses) {
    return new Student(firstName, middleInitial, lastName, age, courses);
}

function TeacherCreator(firstName: string, middleInitial: string, lastName: string, age: number, students) {
    return new Teacher(firstName, middleInitial, lastName, age, students);
}

function greeter(person: Person) {
  	return person.greet()
}

const personCreator = new PersonCreator()

let courses = ['Algebra', 'Algorithms', 'Biology', 'Rocket Science'];
let jane = personCreator.createPerson({
  firstName: 'Jane', 
  middleInitial: 'M.', 
  lastName: 'Doe',
  age: 25,
  courses: courses, 
  type: 'student'
});

document.getElementById('1').innerHTML = jane.listCourses();
document.getElementById('2').innerHTML = jane.giveAge();

let students = ['Jane', 'Bobby', 'Joe']
let sally = personCreator.createPerson({
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