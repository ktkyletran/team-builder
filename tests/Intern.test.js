const Intern = require('../lib/intern');

describe('Intern class', () => {
  describe('getSchool method', () => {
    it('should return the school that the intern attended', () => {
      const intern = new Intern('Kyle', 1, 'fake@email.com', 'Texas Tech University');
      expect(intern.school).toBe("Texas Tech University");
    });
  }); 
});