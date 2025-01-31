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
})

export default authController;