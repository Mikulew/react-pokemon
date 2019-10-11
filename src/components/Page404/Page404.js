import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4 mt-5">Pokémon not found</h1>
        <Link className="btn btn-secondary mt-2" to="/">
          Back
        </Link>
      </div>
    </div>
  </div>
);

export default Page404;
