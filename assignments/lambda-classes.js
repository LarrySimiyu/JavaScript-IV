// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }

    speak() {
        return `Hello my name is ${this.name} , I am from ${this.location} where ${this.name} and ${this.location} are the object's own props`;
    }
}



class Instructor extends Person {
    constructor(instructAttr) {
        super(instructAttr);
        this.specialty = instructAttr.specialty;
        this.favLanguage = instructAttr.favLanguage;
        this.catchPhrase = instructAttr.catchPhrase;
        
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = this.favSubjects;

    }
    listsSubjects() {
        return `favorite subjects listed out here `
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on #{subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
        this.channel = pmAttr.channel;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times `;
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    channel: 'Fun Bus'
  });

const sabrina = new Instructor({
    name: 'Sabrina',
    location: 'West Coast',
    gender: 'Female',
    gradClassName : 'Fun Bus',
    favInstructor : 'Josh',
    specialty: 'CSS',
    favLanguage: 'Spanish',
    catchPhrase: 'i CANT read'

});

const larry = new Student({
    name: 'Larry',
    age: 23,
    subject: 'Math',
    previousBackground: 'Video Editor',
    className : 'JavaScript',
    favSubjects : [
        'Html', 
        'CSS', 
        'JavaScript'
    ]
});

console.log(fred.debugsCode(larry,'JS III'));