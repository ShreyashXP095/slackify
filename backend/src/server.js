import express from 'express';
import { ENV } from './config/env.js';
import connectDB from './config/db.js';
import {clerkMiddleware} from "@clerk/express";
import { inngest, functions } from './config/inngest.js';
import { serve } from "inngest/express";
import chatRoutes from './routes/chat.route.js';



const app = express();
app.use(express.json());

app.use(clerkMiddleware()); // req.auth will tell the use is authenticated or not


app.get('/', (req, res) => {
  res.send('Server is running!');
});



app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);





const startServer = async () => {
  try {
    await connectDB();
    if(ENV.NODE_ENV !== 'production'){
      app.listen(ENV.PORT, () => {
        console.log(`Server is running on port ${ENV.PORT}`);
      });
    }
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};


startServer();

export default app;