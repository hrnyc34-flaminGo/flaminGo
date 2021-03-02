var app = require('./server.js');

var PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}, visit: http://localhost:${PORT}`);
});
