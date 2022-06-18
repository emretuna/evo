import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function LoadingButton(props) {
  return (
    <Button
      variant="link"
      className="text-white justify-content-center"
      disabled
    >
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        variant="light"
      />
      {props.children}
    </Button>
  );
}

export default LoadingButton;
