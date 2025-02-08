import {Router} from 'express';

const authRouter = Router();

authRouter.get('/sign-up', (req, res) => {
    res.send(
        
        {title: 'Login Page'}
    
    
    );
});


authRouter.get('/sign-in', (req, res) => {
    res.send(
        
        {title: 'Sign in '}
    
    
    );
});



authRouter.get('/sign-out', (req, res) => {
    res.send(
        
        {title: 'sign out '}
    
    
    );
});

export default authRouter;