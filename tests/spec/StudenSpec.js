describe("Student", function () {
    it("should .... ", function () {
        var student = new Student("marcel", 33);
        expect(student.name).toEqual("marcel");
        expect(student.age).toEqual(33);
        expect(student).toBeOfAge(33);
    });
});