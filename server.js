//load Express -Require Statement

const express = require('express');

//Initialize Express

const app = express();

const PORT = process.env.PORT || 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

//-----------------MIDDLEWARE-----------------------
//-----------------ROUTER-----------------------


//use params to pass data to the page
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

//specific routes go before the other routes
app.get('/awesome', (req, res) => {
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

  
//template routes go last
app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});

//Tell the app to listen on port #000 for HTTP requests from clients
app.listen(PORT, () => { console.log('Server is running on port 3000') });