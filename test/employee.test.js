const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
  const name = "Test";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can get name via getName()", () => {
  const testValue = "Test";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});


test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Test", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});


  