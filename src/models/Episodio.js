import mongoose from "mongoose";

const episodioSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        texto: { type: String, required: true},
        favorito: {type: Boolean},
        temporada: {type: Number,required: true},
        numero: {type: Number,required: true}

    },
    {
        versionKey: false
    }
);

let episodios= mongoose.model("episodios", episodioSchema); 

export default episodios;