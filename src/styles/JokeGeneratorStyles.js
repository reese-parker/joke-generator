const styles = {
  container: {
    width: "300px",
    height: "250px",
    border: "3px solid",
    boxShadow:
      "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
    borderRadius: "10px",
    display: "grid",
    gridTemplateRows: "3fr 1fr 1fr",
    justifyItems: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: "1rem",
    backgroundColor: "white",
    letterSpacing: "2px",
    textDecoration: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "3px solid",
    padding: "0.25em 0.5em",
    boxShadow:
      "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
  },
  emojiContainer: {
    maxWidth: "75px",
  },
};

export default styles;
