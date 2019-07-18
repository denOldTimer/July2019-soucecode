module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      fontFamily: {
        serif: [
          '"Kelly Slab"',
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif"
        ]
      },
      colors: {
        tuna: "rgba(45, 55, 72, 1)",
        shark: "rgba(30, 30, 30, 1)",
        sunrise: "rgba(241, 196, 15, 1)"
      }
    }
  },
  variants: {},
  plugins: [
    function({ addComponents }) {
      const components = {
        h1: { fontSize: "2.5rem" },
        h2: { fontSize: "2rem" },
        h3: { fontSize: "1.75rem" },
        h4: { fontSize: "1.5rem", padding: "1rem 0rem" },
        h5: { fontSize: "1.25rem", padding: "0.5rem 0rem" },
        h6: { fontSize: "1rem" },
        "h1,h2,h3,h4,h5,h6": { fontFamily: '"Kelly Slab"' },
        ".modal": {
          position: "fixed",
          zIndex: "1",
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
          overfolow: "auto",
          backgroundColor: "rgba(0,0,0, 0.2)"
        },
        ".modalWrapper": {
          backgroundColor: "#ffffff",
          margin: "5% auto",
          width: "70%",
          height: "700px",
          boxShadow: "0 5px 8px rgba(0,0,0,0.2), 0 7px 20px rgba(0,0,0, 0.2)",
          overfolow: "scroll"
        },
        ".modalBtnClose": {
          backgroundColor: "rgba(30, 30, 30, 1)",
          float: "right",
          width: "auto",
          paddingLeft: "20px ",
          color: "#f1c40f",
          fontSize: "2rem",
          fontWeight: "900",
          "&:hover, &:focus": {
            color: "#fff",
            textDecoration: "None",
            cursor: "pointer"
          }
        },
        ".modalHeader": {
          backgroundColor: "rgba(30, 30, 30, 1)",
          padding: "0px 20px",
          marginTop: "-15px"
        },
        ".modalBody": {
          backgroundColor: "rgba(30, 30, 30, 1)",
          padding: "10px 20px"
        },
        ".modalFooter": {
          backgroundColor: "rgba(30, 30, 30, 1)",
          padding: "10px"
        }
      };
      addComponents(components);
    }
  ]
};
