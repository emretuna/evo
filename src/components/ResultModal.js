import React from "react";
import { Modal } from "react-bootstrap";
import Metagon from "../assets/Metagon1.png";
import MiniMonster from "../assets/mini-monster.png";
import "../components/ResultsModal.css";

function QuestionsModal(props) {
  return (
    <Modal
      {...props}
      id="modalEvolve"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>
            Your Salagons <br /> Evolved!
          </h1>
          <p>You can see your new Metagon at the bottom</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container metagons-feature">
          <div class="row">
            <div class="col-md-6">
              <div class="monster-parent">
                <img src={Metagon} alt="" />
              </div>
              <div class="section-text">
                <p>Metagon #2415</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-6">
                  <ul>
                    <li>
                      <h6>Body</h6>
                      <p>Legend</p>
                    </li>
                    <li>
                      <h6>Earing</h6>
                      <p>Diamond-01</p>
                    </li>
                    <li>
                      <h6>Eyes</h6>
                      <p>Black-01</p>
                    </li>
                    <li>
                      <h6>Spikes</h6>
                      <p>1-01</p>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul>
                    <li>
                      <h6>Costumes</h6>
                      <p>Alchemist-01</p>
                    </li>
                    <li>
                      <h6>Eye Wear</h6>
                      <p>Glasses-01</p>
                    </li>
                    <li>
                      <h6>Horn</h6>
                      <p>Alchemist-01</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row metagons-feature-bottom align-items-center justify-content-center my-5">
            <div class="col-5">
              <div class="d-flex align-items-end">
                <img class="monster-mini" src={MiniMonster} alt="" />
                <div class="ml-3">
                  <p>Solagon #9082</p>
                  <button>Burned</button>
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="d-flex align-items-end">
                <img class="monster-mini" src={MiniMonster} alt="" />
                <div class="ml-3">
                  <p>Solagon #7082</p>
                  <button>Burned</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button class="btn-solagons-light">Back To Evolution</button>
      </Modal.Footer>
    </Modal>
  );
}
export default QuestionsModal;
