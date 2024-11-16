const express = require('express');
const cors = require('cors');
const app = express();

const connectDB = require('./config/db');
const routes = require('./routes/blogRoutes');

const HOST_NAME = 'localhost';
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(routes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, HOST_NAME, () => {
      console.log(`Server running at http://${HOST_NAME}:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to server', err.message);
    process.exit(1);
  }
};

startServer();
