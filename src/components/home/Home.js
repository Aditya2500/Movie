import { useEffect, useState } from 'react'
import Pagination from './pagination/Pagination';
import './Home.css'
import Movie from './movie/Movie';
import {  getMovies } from './routes/MovieRoutes';
import { loadingGif, defaultImageURL } from './movie/Constants';


const Home = ()=>{
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
      (async()=>{
        // const movies = await getFakeJson(pageNumber);
        const movies = await getMovies(pageNumber);
        setMovies(movies);
        setIsLoading(false)
      })()
    },[pageNumber])
    
    return <div className='movie-container'>
        {isLoading && <img alt="" src={loadingGif} className='loading-gif'/>}
            <div className={`movie-item-container ${isLoading && 'movie-item-loading'}`}>
                {movies?.map(({Title, Poster=defaultImageURL}, index)=>{
                    return <Movie key={index} Title={Title} imageUrl={Poster === 'N/A'? defaultImageURL:Poster}/>
                })}
            </div>
            <Pagination isLoading={isLoading} setIsLoading={setIsLoading} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </div>
}

export default Home;
