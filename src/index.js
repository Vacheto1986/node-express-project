import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import mongoose from 'mongoose';

const app = express();

//db configuration
try {
    const uri = 'mongodb://localhost:27017/magic-movies'
    await mongoose.connect(uri);

    console.log('DB connected !!!');
    
} catch (error) {
    console.error(error.message)
}

//handlebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views')


//express configuration
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false })); //teach express to parse from data
app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));