import React from 'react';
import { Button } from 'react-bootstrap';

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="card my-4" style={{width: '18rem'}}>
        <img src={product.image} className="card-img-top w-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Button>Details</Button>
          </div>
      </div>
    </div>
  );
}

export default Product;

