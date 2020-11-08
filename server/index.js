const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/routes-posts');

//Initialization
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use('/posts', postsRoutes);



//Starting server on port defined on Setting
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
