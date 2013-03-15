function Person(name, age) {
    consoleDebug("Person constructor " + name)
    this.name = name;
    this.age = age;

    Person.prototype.walk = function () {
        consoleDebug('I am walking! ' + this.name);
    };
    Person.prototype.sayHello = function () {
        consoleDebug('hi i am a person ' + this.name);
    };
}

function Student(name, age) {
    // Call the parent constructor
    consoleDebug("Student constructor " + name)
    Person.call(this, name, age);

    // correct the constructor pointer because it points to Person
    Student.prototype.constructor = Student;

    // replace the sayHello method
    Student.prototype.sayHello = function () {
        consoleDebug('hi, I am a student ' + this.name);
    };

    // add sayGoodBye method
    Student.prototype.sayGoodBye = function () {
        consoleDebug('goodBye ' + this.name);
    };
}

// inherit Person
Student.prototype = new Person();

