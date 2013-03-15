"use strict";

function createMessage(body) {
    return new Message("marcel", "ulrike", body).asJson();
}

function sampleFunction() {
}

function doIt(arg) {
    consoleDebug("anonymous function stuff = " + arg)
}
var sum = function (a, b) {
    return a + b;
}

function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}

$(document).ready(function () {

    consoleDebug("JSON " + window.JSON.stringify(new Person("some person")));

    doIt(sum(5, 5));
    debug(makeAdder(5)(5));
    debug(makeAdder(20));

    var person = new Person("marcel");
    person.sayHello();
    person.walk();

    var student = new Student("ulrike");
    student.sayHello();
    student.walk();
    student.sayGoodBye();

    consoleDebug(parseInt("FF", 16));

    consoleDebug(student instanceof Person);
    consoleDebug(student instanceof Student);
    consoleDebug(person instanceof Person);
    consoleDebug(person instanceof Student);

    debug("abc");
    debug("abc" + 2);
    debug("abc" * 2);
    debug(123);
    debug(22.44);
    debug(Math.min(2, 4) + 100);
    debug(1 / 0);
    debug(0 / 0);
    debug(null);
    debug(undefined);
    debug(window);
    debug(window.onload);
    debug(["Hello", 1, true]);
    debug(sampleFunction);
    debug(sampleFunction());

    debug("----------------------------------------------")

    // true
    debug(createMessage("body") == createMessage("body"))
    debug(true == true);
    debug(true === true);
    debug(true == 1);
    debug(true == "1");
    debug(false == "");
    debug(false == 0);
    debug(null == undefined);
    debug("----------------------------------------------")

    // false
    debug(createMessage("body ") == createMessage("body"))
    debug(Boolean(false));
    debug(Boolean(undefined));
    debug(Boolean(null));
    debug(Boolean(NaN));
    debug(Boolean(0));
    debug(Boolean(""));
    debug(null === undefined);
    debug(true == 2);
    debug(true == "2");
    debug(true == "");
    debug(true == "a");
    debug(true == undefined);
    debug(true == null);
    debug(true === undefined);
    debug(true === null);
    debug(false === 0);
    debug(false == "a");
    debug(false === "");
    debug(false == undefined);
    debug(false == null);
    debug(false === undefined);
    debug(false === null);
});



