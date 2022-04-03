const Tag = ({ children }) => {
  const styles = {
    fontSize: "15px",
    height: "35px",
    display: "flex",
    padding: "10px",
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "var(--secondary-tool)",
    borderRadius: "5px",
  };

  return <div style={styles}>{children}</div>;
};

export default Tag;
