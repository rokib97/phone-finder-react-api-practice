import React, { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Allproduct from "../AllProducts/Allproduct";

const Header = () => {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, [text]);
  const getValue = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container my-4">
      {/* <h1 className="text-center text-warning fw-bolder">Phone Finder Mini</h1> */}
      <InputGroup className="mb-3 w-50 mx-auto">
        <FormControl
          placeholder="Search phone here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onBlur={getValue}
        />
        <Button variant="outline-primary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
      <div className="row container g-4 my-4">
        {products &&
          products.map((product) => (
            <Allproduct products={product} key={product.slug}></Allproduct>
          ))}
      </div>
    </div>
  );
};

export default Header;
