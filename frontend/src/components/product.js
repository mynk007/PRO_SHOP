import React from "react";
import { Card, Button } from "react-bootstrap";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";
const product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}/`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}/`}>
            <Card.Title as="div">{product.name}</Card.Title>
          </Link>
          <Card.Text as="div">
            <Ratings
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div">
            <div className="my-1">
              <h4> ${product.price}</h4>
            </div>
          </Card.Text>

          <Link to={`/product/${product._id}/`}>
            <Button variant="primary">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default product;
