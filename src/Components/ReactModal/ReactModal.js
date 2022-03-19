import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = ({ slug }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  }, [slug]);
  console.log(details);
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Button onClick={() => setLgShow(true)}>Details</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {details.name}
          </Modal.Title>
        </Modal.Header>
        <img className="w-50 mx-auto p-4" src={details.image} alt="" />
        <Modal.Body>
          <h4>Brand: {details.brand}</h4>
          <p>Release Date: {details.releaseDate}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReactModal;
