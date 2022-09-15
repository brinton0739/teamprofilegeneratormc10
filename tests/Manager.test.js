const Manager = require("../classes/manager");

test('should create an manager', () => {
    const manager = new Manager('some name', 'some id', 'some email', 'some office number');
    expect(manager).toBeInstanceOf(Manager);
    expect(manager.getName()).toBe('some name');
    expect(manager.getId()).toBe('some id');
    expect(manager.getEmail()).toBe('some email');
    expect(manager.getOfficeNumber()).toBe('some office number');
    expect(manager.getRole()).toBe('Manager');
});