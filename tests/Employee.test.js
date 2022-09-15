const Employee = require("../classes/employee");

test('should create an employee', () => {
    const employee = new Employee('some name', 'some id', 'some email');
    expect(employee).toBeInstanceOf(Employee);
    expect(employee.getName()).toBe('some name');
    expect(employee.getId()).toBe('some id');
    expect(employee.getEmail()).toBe('some email');
    expect(employee.getRole()).toBe('Employee');
});