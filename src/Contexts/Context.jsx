import {createContext, useContext, useState, useEffect }  from "react"
import { obtenerVideo, guardarVideo } from "../Services/API";


const Context = createContext();

export const VideoContexto = () =>{
    return useContext(Context);
};

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchVideos = async () =>{
            try{
                const videoData = await obtenerVideo();
                setVideos(videoData);
                setLoading(false);
            }catch(err){
                console.log("Error al obtener video",err);
                setLoading(false);
            }
        }
        fetchVideos();

    }, []);

    const agregarVideo = async (nuevoVideo) => {
        try{
            const agrevideo = await guardarVideo(nuevoVideo);
            setVideos((prevVideo) => [...prevVideo, agrevideo]);
        }catch(err) {
            console.error("Error al agregar vídeo", err);
        }
    };
    
    const videoCategory = {};

    videos.forEach((video) => {
    const category = video.categoria;
    if (!videoCategory[category]) {
      videoCategory[category] = [];
    }
    videoCategory[category].push(video);
  });

  return (
    <Context.Provider
      value={{ videos, loading, videoCategory, agregarVideo }}
    >
      {children}
    </Context.Provider>
  );

}


