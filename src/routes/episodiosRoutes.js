import express from "express";
import EpisodioController from "../controllers/episodiosController.js";

const router = express.Router();

router
    .get("/episodios", EpisodioController.listarEpisodios)
    .get("/episodios/:id", EpisodioController.listarEpisodioPorId)
    .post("/episodios/", EpisodioController.cadastrarEpisodio)
    .put("/episodios/:id", EpisodioController.atualizarEpisodio)
    .delete("/episodios/:id", EpisodioController.excluirEpisodio)



export default router;