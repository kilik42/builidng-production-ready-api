import express from 'express';

import dotenv from 'dotenv';
import {PORT, NODE_ENV} from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT} in ${NODE_ENV} mode`);
}
);

export default app;











