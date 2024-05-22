// components/ThemeSwitcher.tsx
import "./App.css";
import Punto from "./components/Punto";
import Backdrop from "./components/Backdrop";
export const App = () => {
  return (
    <div className="block1">
      <img id="imagen" src="./cuerpoHumano.png" alt="cuerpohumano" />
      <Backdrop>
        <Punto id="p1" clase={"circle"} nameMuscle="dorsal"/>
        <Punto id="p2" clase={"circle"} nameMuscle="dorsal"/>
        <Punto id="p3" clase={"circle"} nameMuscle="triceps"/>
        <Punto id="p4" clase={"circle"} nameMuscle="triceps"/>
      </Backdrop>
    </div>
  );
};
