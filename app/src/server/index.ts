    import express, { Request, Response } from 'express';
    import cors from "cors";
    import { corsOptions } from './configs/cors';



   export  const app = express();

//import * as bodyParser from "body-parser"



app.use(express.json());


// app.use(bodyParser.json())
app.use(cors(corsOptions)) 

    app.get('/', (req: Request, res: Response) => {
      res.send({"message":'Hello from TypeScript Express!'});
    });

        app.get('/all', (req: Request, res: Response) => {
        const data = { message: 'Data from Express server!', items: ['item1', 'item2', 'item3'] };
        res.send(data);
    });

