function generateManager(answers) {
  return `<div class="container" id="employee-box">
  <div class="row">
    <div class="col-md-12" id="employee-title">
    <h1>${answers.name}</h1>
    <h2>${answers.role}</h2>
    </div>
    <div class="col-md-12" id="employee-description">
      <h5>ID: ${answers.id}</h5>
      <hr>
      <h5><a href="mailto:${answers.email}">${answers.email}</a></h5>
      <hr>
      <h5>Office Number: ${answers.office}</h5>
    </div>
  </div>
</div>`
}

module.exports = generateManager;