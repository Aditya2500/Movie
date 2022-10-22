const baseURL = "https://www.omdbapi.com/";
const fakeBaseURL = "https://jsonplaceholder.typicode.com/posts/";

export const getMovies = async (pageNumber)=>{
    const movies = await fetch(`${baseURL}?s=porter&page=${pageNumber}&apikey=4195b9af`);
    const { Search } = await movies.json();
    return Search;
}

export const getFakeJson = async (pageNumber)=>{
    const data = await fetch(fakeBaseURL);
    const jsonData = await data.json();
    const mData = jsonData.map(a=> {return {...a, Title: a.title}});
    const num = pageNumber * 10;
    const pageData = mData.slice((num - 10), num);
    return pageData;
}