import { Button } from 'react-bootstrap';
import './Pagination.css'

const Pagination = ({ pageNumber, setPageNumber,isLoading,setIsLoading})=>{
      const nexClickHandler = ()=>{
        setIsLoading(true);
        setPageNumber((page)=> page + 1)
    }
    const previousClickHandler = ()=>{
        setIsLoading(true);
        setPageNumber((page)=> page - 1)
    }

    return <div className='movie-paging'>
    <Button size="sm" className={`movie-next-btn ${ (pageNumber === 10 || isLoading) && 'disabled'}`} onClick={nexClickHandler}>Next</Button>
    <Button size="sm" className={`movie-previous-btn ${ (pageNumber === 1 || isLoading) && 'disabled'}`} onClick={previousClickHandler}>Previous</Button>
</div>
}
export default Pagination