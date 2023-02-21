import episodios from "../models/Episodio.js";

class EpisodioController {

    static listarEpisodios = (req, res) => {
        episodios.find((err, episodios) => {
            res.status(200).json(episodios);
        });
    }

    static listarEpisodioPorId = (req, res) => {
        const id = req.params.id;
        episodios.findById(id, (err, episodios) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do  episodio não localizado.` });
            } else {
                res.status(200).send(episodios);
            }
        })
    }
    static cadastrarEpisodio = (req, res) => {
        let episodio = new episodios(req.body);
        episodio.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar episodio.` });
            } else {
                res.status(201).send(episodio.toJSON());
            }
        });
    }

    static atualizarEpisodio = (req, res) => {
        const id = req.params.id;
        episodios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Episodio atualizado com sucesso!" });
            } else {
                res.status(500).send({ message: `${err.message} - Erro ao atualizar episodio.` });
            }
        });
    }

    static excluirEpisodio = (req, res) => {
        const id = req.params.id;
        episodios.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Episodio removido com sucesso." });
            } else {
                res.status(500).send({ message: `${err.message} -Id do episodio não localizado.` });
            }
        });
    }
}
export default EpisodioController;