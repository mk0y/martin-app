import "./styles.css";
import SwipeableViews from "react-swipeable-views";
import Login from "./pages/Login";

const styles = {
  slide: {
    padding: 15,
    height: "100vh",
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

const DemoSwipe = () => {
  return (
    <SwipeableViews
      enableMouseEvents
      springConfig={{ duration: 0.8, friction: 600, tension: 1200 }}
    >
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <Login />
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
      </div>
    </SwipeableViews>
  );
};

export default DemoSwipe;
