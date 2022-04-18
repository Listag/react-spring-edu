import Header from "./layout/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import { useTransition, animated} from "react-spring";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <>
      <Header />
      <main
        className="container"
        style={{ position: "relative", overflow: "hidden", minHeight: "90vh" }}
      >
        {transitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
            <div style={{ position: "absolute", width: "100%" }}>
              <Routes location={item}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </div>
          </animated.div>
        ))}
      </main>
    </>
  );
}
