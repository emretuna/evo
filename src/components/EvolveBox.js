import React from "react";
import Button from "./UI/Button";
import Meetimage from "../assets/meetimage2.png";

function EvolveBox() {
  return (
    <div className="parent-evolve-box">
      <h1>
        EVOLVE YOUR
        <br /> SALAGONS
      </h1>
      <p>
        Evolution is a process in which 2 baby Solagons + $RAWR tokens (that you
        can get with <br /> staking) merge, and change into a Metagon.
      </p>
      <Button
        // Buton modülü UI içinde,{!walletConnected ? "Connect Wallet" : "Evolve"} şeklinde kullanabiliriz.
        className="btn-evolve"
      >
        Connect Wallet
      </Button>
      <div className="mmetimage">
        <img src={Meetimage} alt="meet" />
      </div>
      <div className="bottom-page-text">
        <p>
          After the evolution process is done, the current supply of{" "}
          <strong>7,777</strong> will be as the following;
        </p>
        <p>
          Solagon (Babies) Supply after the evolution process:{" "}
          <strong>3,888</strong>
        </p>
        <p>
          Metagon Fight Club's (Adults) Supply: <span>1,944</span>
        </p>

        <p>
          Total Supply of both collections: <span>5,832</span>
        </p>
      </div>
    </div>
  );
}

export default EvolveBox;
