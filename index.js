const server = require('./api/server.js');

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});