const express = require('express');
const cors = require('cors');
const app = express();

const connectDB = require('./config/db');
const routes = require('./routes/blogRoutes');

const PORT = 5000;
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use(routes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, HOST, () => {
      console.log(`Server running at http://${HOST}:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to server', err.message);
    process.exit(1);
  }
};

startServer();
