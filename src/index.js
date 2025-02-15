import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import routes from './routes.js';
import showRatingHelper from './helpers/rating-helper.js';
import { authMiddleware } from './middlewares/authMiddleware.js';



const app = express();

// db configuration
// const url = 'mongodb://127.0.0.1:27017/'
mongoose.connect(process.env.DB_HOST, { dbName: 'magic-movies' })
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log('DB Failed'))

// handlebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// express configuration
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false })); // Learn express to parse form data
app.use(cookieParser());
app.use(authMiddleware);

// setup routes
app.use(routes);

// start server
app.listen(5001, () => console.log('Server is listening on http://localhost:5001...'));
