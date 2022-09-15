const Intern = require("../classes/intern");

test('should create an intern', () => {
    const intern = new Intern('some name', 'some id', 'some email', 'some school');
    expect(intern).toBeInstanceOf(Intern);
    expect(intern.getName()).toBe('some name');
    expect(intern.getId()).toBe('some id');
    expect(intern.getEmail()).toBe('some email');
    expect(intern.getSchool()).toBe('some school');
    expect(intern.getRole()).toBe('Intern');
});