import React from "react";

const BootstrapAlert = (props) => {
  return (
    props.alert && (
      <div>
        <div class={`alert alert-${props.alert.type}`}>
          <strong>{props.alert.type}</strong>, {props.alert.message}
        </div>
      </div>
    )
  );
};

export default BootstrapAlert;
