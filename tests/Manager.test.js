const Manager = require('../lib/manager');

describe("Manager class", () => {
  describe("office number property", () => {
    it("should return the manager's office number", () => {
      const manager = new Manager('Kyle', 1, 'fake@email.com', 150);
      expect(manager.office).toBe(150);
      });
  });
  describe("getRole override method", () => {
    it("should return 'manager' as the new role instead of 'employee'", () => {
      const manager = new Manager('Kyle', 1, 'fake@email.com', 150);
      expect(manager.getRole()).toBe('Manager');
      });
  });
});