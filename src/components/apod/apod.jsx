import { useEffect, useState } from "react";
import './apod.css';
import CircularProgress from '@mui/material/CircularProgress';

function Apod() {
   // const key = import.meta.env.VITE_APOD_API_KEY;
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=6IXAQkVo47oTjb2Mhoh6qG95kNMVNRu2grOpHIpZ`;
    
    const [apod, setApod] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
         
                const data = await fetch(API_URL);
                const response = await data.json();
                setApod(response);
                console.log(response);
            }
        
             
                
        fetchData().catch ((err) => console.log(err))
    }, [])

    return (
        <div className="content">
            {!apod ? (
                <CircularProgress color="secondary"/>
            ) : (
                <div className="apod-card">
                    <img className="img-apod" src={apod.url} alt={apod.title} />
                    <h1 className="apod-title">{apod.title}</h1>
                    <p className="apod-description">{apod.explanation}</p>
                </div>
            )}
        </div>
    );
}

export default Apod;
