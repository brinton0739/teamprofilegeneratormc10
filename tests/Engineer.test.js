const Engineer = require("../classes/engineer");

test('should create an engineer', () => {
    const engineer = new Engineer('some name', 'some id', 'some email', 'some github');
    expect(engineer).toBeInstanceOf(Engineer);
    expect(engineer.getName()).toBe('some name');
    expect(engineer.getId()).toBe('some id');
    expect(engineer.getEmail()).toBe('some email');
    expect(engineer.getGithub()).toBe('some github');
    expect(engineer.getRole()).toBe('Engineer');
});