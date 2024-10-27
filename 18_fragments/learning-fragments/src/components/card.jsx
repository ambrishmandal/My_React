import React from "react";

const Card = ({ title, content }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>{content}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.5em",
    marginBottom: "8px",
  },
  content: {
    fontSize: "1em",
    color: "#333",
  },
};

export default Card;
