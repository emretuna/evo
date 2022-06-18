import React from "react";
import { Modal } from "react-bootstrap";
import "../components/EvolveModal.css";
import minimonster from "../assets/mini-monster.png";
import iconstatus from "../assets/icon-status.png";
import monster from "../assets/monster.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import LoadingButton from "./UI/LoadingButton";

function EvolveModal(props) {
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
            Evolve Your <br />
            Salagons
          </h1>
          <p>Select Your Salagons that will undergo Evolution</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <LoadingButton>
            <span>Progress 1 of 3</span>
          </LoadingButton>
        </div>
        <div class="row mb-3 px-1">
          <div class="col-6">
            <div class="dropdown dropdown-metagon">
              <DropdownButton
                id="dropdown-item-button"
                className="dropdown dropdown-metagon"
                title="Select Metagon"
                variant="secondary"
                size="lg"
              >
                <Dropdown.Item as="button">
                  <img src={minimonster} alt="" />
                  <span>Solagon #9082</span>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <img src={minimonster} alt="" />
                  <span>Solagon #9082</span>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <img src={minimonster} alt="" />
                  <span>Solagon #9082</span>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div class="col-6">
            <div class="dropdown dropdown-metagon">
              <DropdownButton
                id="dropdown-item-button"
                className="dropdown dropdown-metagon"
                title="Select Metagon"
                variant="secondary"
                size="lg"
              >
                <Dropdown.Item as="button">
                  <img src={minimonster} alt="" />
                  <span>Solagon #9082</span>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <img src={minimonster} alt="" />
                  <span>Solagon #9082</span>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <img src={minimonster} alt="" />
                  <span>Solagon #9082</span>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div class="modal-container-between">
          <div class="middle-section-left">
            <img src={monster} alt="" />
          </div>
          <div class="overflow-scroll">
            <div class="middle-section-right">
              <div class="middle-box overflow-scroll h-50">
                <h6>Body</h6>
                <span>
                  <strong>%40</strong> Legend
                </span>
                <span>
                  <strong>%40</strong> Epic
                </span>
                <span>
                  <strong>%20</strong> Mytcial
                </span>
              </div>
              <div class="middle-box overflow-scroll h-50">
                <h6>Costumes</h6>
                <span>
                  <strong>%50</strong> Alchemist-01
                </span>
                <span>
                  <strong>%50</strong> Black Leather-01
                </span>
              </div>
              <div class="middle-box overflow-scroll h-50">
                <h6>Costumes</h6>
                <span>
                  <strong>%50</strong> Alchemist-01
                </span>
                <span>
                  <strong>%50</strong> Black Leather-01
                </span>
              </div>
              <div class="middle-box overflow-scroll h-50">
                <h6>Costumes</h6>
                <span>
                  <strong>%50</strong> Alchemist-01
                </span>
                <span>
                  <strong>%50</strong> Black Leather-01
                </span>
              </div>
              <div class="middle-box overflow-scroll h-50">
                <h6>Costumes</h6>
                <span>
                  <strong>%50</strong> Alchemist-01
                </span>
                <span>
                  <strong>%50</strong> Black Leather-01
                </span>
              </div>
              <div class="middle-box overflow-scroll h-50">
                <h6>Costumes</h6>
                <span>
                  <strong>%50</strong> Alchemist-01
                </span>
                <span>
                  <strong>%50</strong> Black Leather-01
                </span>
              </div>
              <div class="middle-box overflow-scroll h-50">
                <h6>Costumes</h6>
                <span>
                  <strong>%50</strong> Alchemist-01
                </span>
                <span>
                  <strong>%50</strong> Black Leather-01
                </span>
              </div>
              <div class="middle-box overflow-scroll h-50">
                <h6>Costumes</h6>
                <span>
                  <strong>%50</strong> Alchemist-01
                </span>
                <span>
                  <strong>%50</strong> Black Leather-01
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <button class="btn-solagons">Evolve Your Solagons</button>

        <h5>2000/15334 RAWR</h5>
        <p>
          If you don't have RAWR{" "}
          <a class="link-here" href="#">
            Click Here
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}
export default EvolveModal;
