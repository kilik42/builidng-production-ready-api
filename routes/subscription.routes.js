import {Router} from 'express';

const subscriptionRouter = Router();


subscriptionRouter.get('/subscriptions', (req, res) => {
    
    res.send(
        
        {title: 'Subscriptions'}
    
    
    );
});


subscriptionRouter.get('/subscriptions/:id', (req, res) => {


    res.send(
        
        {title: 'get Subscription details'}
    
    
    );
});



subscriptionRouter.get('/subscriptions/:id', (req, res) => {
    
    res.send(
        
        {title: 'Edit Subscription'}
    
    
    );
});

subscriptionRouter.post('/subscriptions', (req, res) => {
    
    res.send(
        
        {title: 'Create Subscription'}
    
    
    );
});     



subscriptionRouter.put('/subscriptions/:id', (req, res) => {    


    res.send(
        
        {title: 'Update Subscription'}
    
    
    );      
    
}); 



subscriptionRouter.delete('/subscriptions/:id', (req, res) => { 
    res.send(
        
        {title: 'Delete Subscription'}
    
    
    );
});


export default subscriptionRouter;