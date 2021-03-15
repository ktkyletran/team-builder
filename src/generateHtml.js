function generateHtml(answers) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder || By Kyle Tran</title>
  <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
  <!-- CSS -->
  <link rel="stylesheet" href="/src/style.css">
  </head>
  
  <body>
    <div class="container" id="title-container">
      <div class="row">
        <div class="col-md-12" id="title">
          <p>Team<span><i class="fas fa-hammer"></i></span>Builder</p>
          <h2>By Kyle Tran</h2>
        </div>
      </div>
    </div>
  
    <div class="container" id="result-container">
      <div class="row">
        <div class="col-md-12" id="results">
          ${answers.name}
        </div>
      </div>
    </div>
  
    <script src="/index.js"></script>
  </body>
  </html>`
};

module.exports = generateHtml;