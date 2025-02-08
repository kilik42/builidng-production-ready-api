import {Router} from 'express';

const userRouter = Router();

userRouter.get('/users', (req, res) => {

    res.send(
        
        {title: 'Users'}
    
    
    );
});

userRouter.get('/users/:id', (req, res) => {
    
    res.send(
        
        {title: 'get User details'}
    
    
    );
});

userRouter.get('/users/:id', (req, res) => {
    
    res.send(
        
        {title: 'Edit User'}
    
    
    );
});


userRouter.post('/users', (req, res) => {
    
    res.send(
        
        {title: 'Create User'}
    
    
    );
});


userRouter.put('/users/:id', (req, res) => {

    res.send(
        
        {title: 'Update User'}
    
    
    );      

});

userRouter.delete('/users/:id', (req, res) => {
    res.send(
        
        {title: 'Delete User'}
    
    
    );      

}
);

export default userRouter;