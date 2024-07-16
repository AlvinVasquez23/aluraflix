import axios from "axios";

const api = axios.create({
    baseURL : "https://66932507c6be000fa079d612.mockapi.io/api/v1/videos",
});

export const obtenerVideo = async () =>{
    try {
        const respuesta = await api.get("/");
        return respuesta.data;
    } catch (err){
        console.error("Error al buscar video", err);
        throw err;
    }
};

export const guardarVideo = async (video) => {
    try{
        const respuesta = await api.post("/", video);
        return respuesta.data;
    } catch(err){
        console.error("Error al guardar video", err);
        throw err;
    }
}

export default api;

