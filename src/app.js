import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morganMiddleware from "./shared/middlewares/morgan.middleware.js";
import {globalErrorHandler, notFoundErrorHandler} from "./shared/middlewares/error.middleware.js";
import {BASE_URL} from "./shared/contants.js";
import logger from "./shared/logging/logger.js";

class App{
    #express;
    #port

    constructor(port ,routes ) {
        this.#express = express()
        this.#port = port;
        this.#initMiddlewares();
        this.#initRoutes(routes);
        this.#initErrorHandler();
    }

   #initMiddlewares(){
        this.#express.use(helmet())
        this.#express.use(cors());
        this.#express.use(morganMiddleware)
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(compression())
    }
    #initErrorHandler(){
        this.#express.use(notFoundErrorHandler);
        this.#express.use(globalErrorHandler);
    }
    #initRoutes(routes){
        routes.map(route=>{
            this.#express.use(BASE_URL,route.router)
        })
    }

    listen(){
        try {
            this.#express.listen(this.#port, () => {
                logger.info(`server started and listening on port : ${this.#port}`)
            })
        } catch (error) {
            logger.error('Error : ', error.message);
        }
    }
}
export default App