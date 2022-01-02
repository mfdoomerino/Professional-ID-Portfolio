const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 4000;
const app = express();

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});