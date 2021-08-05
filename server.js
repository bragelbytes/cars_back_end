const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json());

const carsController = require('./controllers/cars.js');
app.use('/cars', carsController);

app.listen(3000, ()=> {
  console.log('listening...');
});
mongoose.connect(
  'mongodb://localhost:27017/carscrud',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
mongoose.connection.once('open', () => {
  console.log('connected to mongod');
})
