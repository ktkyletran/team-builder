const Employee = require('../lib/employee');

describe("Employee class", () => {
  describe("getName method", () => {
    it("should return the employee's name", () => {
      const employee = new Employee('Kyle', 1, 'fake@email.com');
      employee.getName();
      expect(employee.name).toBe("Kyle");
      });
  });

  describe("getId method", () => {
    it("should return the employee's id", () => {
      const employee = new Employee('Kyle', 1, 'fake@email.com');
      employee.getId();
      expect(employee.id).toBe(1);
      });
  });

  describe("getEmail method", () => {
    it("should return the employee's email", () => {
      const employee = new Employee('Kyle', 1, 'fake@email.com');
      employee.getEmail();
      expect(employee.email).toBe("fake@email.com");
      });
  });

  describe("getRole method", () => {
    it("should return the employee's role", () => {
      const employee = new Employee('Kyle', 1, 'fake@email.com');
      expect(employee.getRole()).toBe("Employee");
      });
  });
});