import React, { useState } from "react";

const InputComponent = ({ handleChange }) => {
  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Search by name"
        onChange={handleChange}
      />
    </div>
  );
};
const styles = {
  input: {
    width: "95%",
    height: "40px",
    border: "0px",
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    fontSize: "20px",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
};
export default InputComponent;
