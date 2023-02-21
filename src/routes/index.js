import express from "express";
import episodios from "./episodiosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo : "projeto blog"})
    });

    app.use(
        express.json(),
        episodios
        
    )
}

export default routes;