const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
  describe("Github property", () => {
    it("should return the engineer's Github username", () => {
      const engineer = new Engineer('Kyle', 1, 'fake@email.com', 'ktkyletran');
      expect(engineer.github).toBe("ktkyletran");
      });
  });

  describe("getGithub method", () => {
    it("should return the engineer's Github link", () => {
      const engineer = new Engineer('Kyle', 1, 'fake@email.com', 'ktkyletran');
      engineer.getGithub();
      expect(engineer.getGithub()).toBe('https://github.com/ktkyletran');
      });
  });

  describe("getRole method", () => {
    it("should return the 'engineer' as new role instead of 'employee'", () => {
      const engineer = new Engineer('Kyle', 1, 'fake@email.com', 'ktkyletran');
      expect(engineer.getRole()).toBe('Engineer');
      });
  });
});