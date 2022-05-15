const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "Some School";
  const e = new Intern("Test", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Test", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});