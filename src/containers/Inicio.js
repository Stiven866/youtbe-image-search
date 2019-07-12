import React from 'react';
import imagen1 from './../assets/images/image1.PNG'
import imagen2 from './../assets/images/image2.PNG'
import './../bootstrap.min.css';

const Inicio = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Buscador de Videos e Imagenes</h1>
      <hr className="my-4"/>
      <p className="lead">Con esta aplicación podras buscar videos de youtube gracias a la API de google youtube-search, también prodas reproducirlos como si estuvieras en youtube. Con la misma busqueda que realizada podras encontrar imagenes relacionadas con el tema y serán imagenes que podras usar en tus aplicaciones sin problemas de derechos de autor, gracias a la API de Pixabay que tiene más de un millon de imagenes gratis para descargar.</p>
      <hr className="my-4"/>
      <div className="container">
        <div className="row">
        <p className="col-8 lead">Cuando haces una busqueda y vas a la pestaña de navegación de Buscar Videos vas encontrar en la parte derecha de la pantalla una lista de 5 sugerencias del tema que has buscado y si das click en alguno de estos podras ver en la parte derecha de la pantalla un reproductor. A disfrutar de tus videos...</p>
        <img className="col-4" src={imagen1} alt="imagen1" height="150px"/> 
        </div>
        <hr className="my-4"/>
        <div className="row">
        <p className="col-8 lead">Cuando haces una busqueda y vas a la pestaña de navegación de Buscar Imagenes podrás ver un listado de cientos de imagenes de las que puedes hacer uso sin problas de derchos de autor y si das click en ver imagen te permitirá ver la imagen con mayor resolución para que la descargues y disfrutes ella...</p>
        <img className="col-4" src={imagen2} alt="imagen1" height="300px"/>
        </div>
      </div>
      </div>
  );
};

export default Inicio;