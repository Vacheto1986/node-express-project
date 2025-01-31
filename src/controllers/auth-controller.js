import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

authController.post('/register', async (req, res) => {
    const userData = req.body;
    console.log(userData);

    await authService.register(userData);

    res.redirect('/auth/login')
});

authController.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login Page' })
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        console.log(token);
        

    } catch (err) {
        console.log(err.message);
        return res.redirect('/404')
    }

    res.redirect('/');
})

export default authController;