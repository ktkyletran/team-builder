function generateIntern(answer) {
  return `<div class="container" id="employee-box">
  <div class="row">
    <div class="col-md-12" id="employee-title">
    <p>${answer.name}</p>
    <p>${answer.role}</p>
    </div>
    <div class="col-md-12" id="employee-description">
      <p>ID: ${answer.id}</p>
      <p>Email: ${answer.email}</p>
      <p>School: ${answer.school}</p>
    </div>
  </div>
</div>`
}

module.exports = generateIntern;