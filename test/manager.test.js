const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

test("Can set office number", () => {
    const testValue = 100;
    const e = new Manager("Test", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Test", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });

  test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Test", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });