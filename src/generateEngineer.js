function generateEngineer(answer) {
  return `<div class="container" id="employee-box">
  <div class="row">
    <div class="col-md-12" id="employee-title">
    <p>${answer.name}</p>
    <p>${answer.role}</p>
    </div>
    <div class="col-md-12" id="employee-description">
      <p>ID: ${answer.id}</p>
      <p>Email: ${answer.email}</p>
      <a href='https://github.com/${answer.github}'/>GitHub Profile</a>
    </div>
  </div>
</div>`
}

module.exports = generateEngineer;