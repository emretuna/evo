import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo (1).png";
import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";
import EvolveBox from "./components/EvolveBox";
import QuestionsModal from "./components/QuestionsModal";
import EvolveModal from "./components/EvolveModal";
import ResultModal from "./components/ResultModal";

function App() {
  const [questionsShow, setQuestionsShow] = React.useState(false);
  const [evolveModalShow, setEvolveModalShow] = React.useState(false);
  const [resultsModalShow, setResultsModalShow] = React.useState(false);

  return (
    <div>
      <div className="section-evolve">
        {/* Burası test için silinecek... */}
          <div className="row">
                <button
                  className="btn btn-secondary"
                  onClick={() => setQuestionsShow(true)}
                >
                  Launch questions
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEvolveModalShow(true)}
                >
                  Launch Evolve
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setResultsModalShow(true)}
                >
                  Launch Results
                </button>
          </div>
           {/* Burası test için silinecek... */}
        <div id="app-header" className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="logo" src={logo} alt="Metagon Fight Club" />
              <span className="text-white slogan">STAKE TO EARN RAWR</span>
            </div>
            <div className="col-md-3 ml-auto mt-4">
              <a
                rel="noreferrer"
                href="https://discord.com/invite/metagonfightclub"
                target="_blank"
              >
                <img
                  className="social-icon"
                  src={discord}
                  alt="Metagon Fight Club Discord"
                />
              </a>
              <a href="https://twitter.com/metagonNFT" target="_blank">
                <img
                  className="social-icon"
                  src={twitter}
                  alt="Metagon Fight Club Twitter"
                />
              </a>
            </div>
            <div className="col-md-3 ml-auto mt-4">
              <button
                className="wallet-adapter-button wallet-adapter-button-trigger"
                tabindex="0"
                type="button"
              >
                Select Wallet
              </button>
              
            </div>
          </div>
        </div>
        
        <div className="wrapper-evolve">
          
          <EvolveBox></EvolveBox>
          <QuestionsModal
            show={questionsShow}
            onHide={() => setQuestionsShow(false)}
          ></QuestionsModal>
          <EvolveModal
            show={evolveModalShow}
            onHide={() => setEvolveModalShow(false)}
          ></EvolveModal>
          <ResultModal
            show={resultsModalShow}
            onHide={() => setResultsModalShow(false)}
          ></ResultModal>
        </div>
        <div id="app-footer">
          <img alt="logo" src={logo} />
          <span class="text-white">
            © 2022 Metagon Fight Club:MFC | All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
