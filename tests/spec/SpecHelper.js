beforeEach(function () {
    this.addMatchers({
        toBeOfAge: function (expectedAge) {
            var person = this.actual;
            return person.age === expectedAge;
        }
    });
});
