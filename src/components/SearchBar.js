import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

//Components
import Error from './Error';

//Router
import { Link } from "react-router-dom";

//Redux
import { connect} from 'react-redux';
import { search } from './../redux/actions/searchActions';


const SearchBar = ({ search }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [term, setTerm] = useState('');
    const [error, setError] = useState(false);
    const [start, setStart] = useState(true);
    const [searchVideos, setSearchVideos] = useState(false);
    const [searchImages, setSearchIamges] = useState(false);
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    
    const buscar = e => {
        e.preventDefault();

        //Validar
        if(term === ''){
            setError(true);
            return;
        }
        setError(false);

        search(term);
    }

    const setDecoration = e => {
        //console.log(e.target.name);
        switch(e.target.name){
            case "start":
                setStart(true);
                setSearchVideos(false);
                setSearchIamges(false);
                setRegister(false);
                setLogin(false);

                return;
                case "searchVideos":
                    setStart(false);
                    setSearchVideos(true);
                    setSearchIamges(false);
                    setRegister(false);
                    setLogin(false);
    
                    return;

                case "searchImages":
                    setStart(false);
                    setSearchVideos(false);
                    setSearchIamges(true);
                    setRegister(false);
                    setLogin(false);
    
                    return;
                case "register":
                    setStart(false);
                    setSearchVideos(false);
                    setSearchIamges(false);
                    setRegister(true);
                    setLogin(false);
    
                    return;
                case "login":
                    setStart(false);
                    setSearchVideos(false);
                    setSearchIamges(false);
                    setRegister(false);
                    setLogin(true);
    
                    return;
                default:
                    setStart(true);
                    setSearchVideos(false);
                    setSearchIamges(false);
                    setRegister(false);
                    setLogin(false);
        }
        
    }

    return (
        <Navbar className="navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" href="#">Navbar</NavLink>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="navbar-nav mr-auto">
                    <NavItem active={start}>
                        <Link name="start" onClick={setDecoration} className="nav-link" to="/">Inicio</Link>
                    </NavItem>
                    <NavItem active={searchVideos}>
                        <Link name="searchVideos" onClick={setDecoration} to="/Videos" className="nav-link">Buscar Vídeos<span className="sr-only">(current)</span></Link>
                    </NavItem>
                    <NavItem active={searchImages}>
                        <Link name="searchImages" onClick={setDecoration} className="nav-link" to="/Images">Buscar Imagenes</Link>
                    </NavItem>
                    <NavItem active={register}>
                        <Link name="register" onClick={setDecoration} className="nav-link" to="/Register">Registro</Link>
                    </NavItem>
                    <NavItem active={login}>
                        <Link name="login" onClick={setDecoration} className="nav-link" to="/Login">Inicisar Sesión</Link>
                    </NavItem>
                    
                </Nav>
                <form 
                    className="form-inline"
                    onSubmit={buscar}
                >
                    <div className="search-bar">
                        <input 
                            className="form-control " 
                            type="text" 
                            placeholder="Search"
                            value= {term}
                            onChange={e => setTerm(e.target.value)}
                        />
                        <button 
                            className="btn btn-secondary my-2 my-sm-0" 
                            type="submit">Buscar
                            </button>
                    </div>

                    {error ? <Error message="Agragar Busquda"/> : null}

                </form>
                
            </Collapse>
        </Navbar>
    );
}

export default connect(null, { search })(SearchBar);