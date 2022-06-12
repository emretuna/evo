import React from "react";
import { Modal } from "react-bootstrap";
import Questions from "../assets/questions.png";
import "../components/QuestionsModal.css";

function QuestionsModal(props) {
  return (
    <Modal
      {...props}
      id="modalEvolve"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-white">
          <h1>Evolve Your <br /> Salagons</h1>

                <p>Select Your Salagons that will undergo Evolution</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <img src={Questions} alt="questions"/>
      </Modal.Body>
      <Modal.Footer>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et</p>
                <button class="btn-solagons">Evolve Your Solagons</button>

                <h5>2000/15334 RAWR</h5>
                <p>If you don't have RAWR <a class="link-here" href="#">Click Here</a></p>
        
      </Modal.Footer>
    </Modal>
  );
}
export default QuestionsModal;
