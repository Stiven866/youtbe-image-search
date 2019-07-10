import { IMAGES } from './../constants';



export const fetchImages = (search, actualPage) => async dispatch => {
    if(search === '') return;
        const imagesPerPage = 30;
        const key = '12995198-ae47505547d5f98740b8ea233'
        const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;;
        const response = await fetch(url);
        const result = await response.json();
        console.log("ACtions",result);
    
        //setTotalPage(Math.ceil(result.totalHits / imagesPerPage));
    dispatch({
        type: IMAGES,
        payload: { 
            hits: result.hits,
            totlaHits: Math.ceil(result.totalHits / imagesPerPage),
        }
    })
}