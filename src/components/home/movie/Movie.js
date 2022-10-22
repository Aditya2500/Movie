import { Card } from "react-bootstrap"
import './Movie.css'

const Movie = ({Title,imageUrl})=>{
    return <Card className="movie-item">
         <Card.Title className='movie-item-header'>{Title}</Card.Title>
            <div className='movie-content'><img alt="" loading="lazy" height="250" width="100%" src={imageUrl}/></div>
            <div className="movie-item-footer">
                <span >LIKE</span>
                <span >OWN</span>
            </div>
        </Card>
}

export default Movie