require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const inventoryRoutes = require('./routes/inventory');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/inventory', inventoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
