import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => ( //aca estoy pasando PROPIEDADES
   // esto lo hago pasando directamente {city } en vez de props
   // const { city } = props; //a la constante city le asigno la propiedad de props que se llama city
    // solo para debug
    // console.log(props);
    // debugger;
    <div className="LocationCont">
        <h1>
            {city}
        </h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
};
export default Location;