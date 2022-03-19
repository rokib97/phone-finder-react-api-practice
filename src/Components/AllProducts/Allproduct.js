import React from "react";
import { Card } from "react-bootstrap";
import ReactModal from "../ReactModal/ReactModal";

const Allproduct = (props) => {
  const { brand, image, phone_name, slug } = props.products;
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="col-lg-3 col-md-6 col-12 text-center mx-auto"
      >
        <Card className="shadow-lg border rounded-4">
          <Card.Img className="w-75 mx-auto p-2" variant="top" src={image} />
          <Card.Body>
            <Card.Title className="text-center">{phone_name}</Card.Title>
            <Card.Text className="text-center">Brand: {brand}</Card.Text>
          </Card.Body>
          <Card.Body>
            {/* <Button className="btn btn-primary">Details</Button> */}
            <ReactModal slug={slug}></ReactModal>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Allproduct;
