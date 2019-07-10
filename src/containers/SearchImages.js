import React, {useState, useEffect} from 'react';

//Components
import ImagesList from './../components/ImagesList';

//Redux
import { connect} from 'react-redux';
import {fetchImages } from './../redux/actions/imagesActions';


const SearchImages = ({ search, fetchImages, imagesState }) => {

    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        const cunslutAPI = async () => {
            
            fetchImages(search, actualPage);

            //Mover ña pantalla hacia arriba
            if(imagesState.hits.length !== 0){
                const jumbotron = document.querySelector('.jumbotron');
                jumbotron.scrollIntoView({behavior : 'smooth', block: 'start'});
            }
        }
        cunslutAPI();

        
    },[search,actualPage])

    const paginaAnterior = () => {
        let nuevaPaginaActual = actualPage - 1;
        setActualPage(nuevaPaginaActual);

    }

    const paginaSiguiente = () => {
        let nuevaPaginaActual = actualPage + 1;
        setActualPage(nuevaPaginaActual);
    }

    console.log(imagesState);
    return (
        <div className="jumbotron">
            <div className="row justify-content-center">
                <ImagesList
                    images={imagesState.hits}
                />

                {( actualPage === 1 ) ? null : (
                    <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &laquo;</button>
                )}

                {(actualPage === imagesState.totlaHits) ? null : (
                    <button onClick={paginaSiguiente} type="button" className="btn btn-info mr-1">Siguiente &raquo;</button>
                )}
                
                
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    search : state.serchReduers.search,
    imagesState : state.imagesReducers.images
})

export default connect(mapStateToProps, {fetchImages}) (SearchImages);