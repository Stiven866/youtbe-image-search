import React from 'react';
import { FormGroup} from 'reactstrap';

const Register = () => {
    return (
        <form>
            <FormGroup className="container col-sm-4 justify-content-center">
                <div className="form-group">
                    <label name="InputName">Nombre</label>
                    <input type="text" className="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Ingrese su nombre"/>
                </div>
                <div className="form-group">
                    <label name="InputEmail">Correo</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Ingrese su correo"/>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
                </div>

                <div className="form-group">
                    <label name="inputPassword">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña"/>
                </div>
                <div className="form-group">
                    <label name="inputPassword1">Repita la Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword1" placeholder="Repetir Contraseña"/>
                </div>
                <div className="form-group">
                    <label name="exampleTextarea">Descripción de perfil</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label name="exampleInputFile">Subir Foto de perfil</label>
                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                </div>
                <fieldset className="form-group">
                    <div className="form-check">
                        <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"/>Mujer</label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>Hombre</label>
                    </div>
                </fieldset>
                <fieldset className="form-group">
                
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" />
                        Acepto terminos y condiciones
                    </label>
                </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </FormGroup>
        </form>
    );
};

export default Register;