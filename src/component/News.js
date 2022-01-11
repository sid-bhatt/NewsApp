import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NewsItem from './NewsItem'
import Loading from './Loading';
import './Cards.css'
function News({category}) {
    // const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2102ab9176684584811e9fa97365f9cf&pageNumber=${pageNumber}`;
    const API_KEY = '2102ab9176684584811e9fa97365f9cf';
    const [article, setArticle] = useState({})
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10)
    // let totalResults;
    // const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState()

    useEffect(() => {
        const fetchURL = () => {
            // const result = await axios(URL);
            // setArticle(result.data.articles);
            // console.log(result.data);
            
            axios
                .get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2102ab9176684584811e9fa97365f9cf&page=${pageNumber}&pageSize=${pageSize}`)
                .then(response => {
                    setArticle(response.data.articles);
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    console.log(response)
                    // console.log(response.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }

        fetchURL()
        return () => {}
    }, [pageNumber, pageSize])

    const handleNextEvent = () => {
        setPageNumber(prev => prev + 1)
    }
    const handlePrevEvent = () => {
        if(pageNumber === 1){
            alert('You are on the first pageNumber!!')
        }
        setPageNumber(prev => prev - 1)
    }
    
    return (
        <div className='container my-3'>
            <h2 className='text-center heading'>Top {category} Headlines</h2>
            {/* {loading && <Loading/>} */}
            <div className='row'>
                {article.length ? article.map((element) => {
                    return (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title?element.title.slice(0,30): ""} description={element.description?element.description.slice(0,60): ""}
                                imageUrl={element.urlToImage} newUrl={element.url} source={element.source.name}/>
                            </div>                        
                    )
                            
                }): <Loading/>}
            </div>
            <div className='container d-flex justify-content-between'>
                <button type="button" className="btn btn-dark" onClick={handlePrevEvent}>&laquo; Previous</button>
                <button disabled={pageNumber + 1 > Math.ceil(totalResults/10)} type="button" className="btn btn-dark" onClick={handleNextEvent}>Next &raquo;</button>
            </div>
        </div>
    )
}

export default News
