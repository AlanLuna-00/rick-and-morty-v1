import "./Landing.css";
import Cards from "../Cards.jsx";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Detail from "../Detail/Detail.jsx";
import About from "../About/About";
import Form from "../Form/Form";
import Favorites from "../Favorites/Favorites";
import Footer from "../Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';


function Landing() {
  const [Characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (Characters.find((value) => value.id === data.id)) {
          toast.error("El dato es invalido o ya fue agregado");
        } else if (id === "" || id > 826 || id < 1) {
          toast.error('El dato es invalido o ya fue agregado');
        } else {
          setCharacters([data, ...Characters]);
        }
      });
  };

  const onClose = (id) => {
    setCharacters(Characters.filter((_value, i) => i !== parseInt(id)));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "alanluna@gmail.com";
  const PASSWORD = "alan05";

  const login = (form) => {
    if (form.email === EMAIL && form.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else {
      setAccess(false);
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const location = useLocation();

  return (
    <div className="Landing">
      {location.pathname !== "/" && <NavBar logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              characters={Characters}
              onClose={onClose}
              onSearch={onSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {location.pathname !== "/" && (
        <Footer className="footer">Alan Luna</Footer>
      )}
      <Toaster position="top-left" />
    </div>
  );
}

export default Landing;
