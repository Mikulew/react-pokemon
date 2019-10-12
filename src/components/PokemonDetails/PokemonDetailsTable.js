import React from 'react';
import PropTypes from 'prop-types';

const PokemonDetailsTable = ({ data }) => {
  return (
    <table className="table table-bordered mt-2">
      <thead>
        <tr>
          {data.map(element => (
            <th scope="col" key={element.name}>
              {element.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map(element => (
            <td key={element.value}>{element.value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

PokemonDetailsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

PokemonDetailsTable.defaultProps = {
  data: [],
};

export default PokemonDetailsTable;
