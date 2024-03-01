import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 4000);
  };

  const abrirCorreo = () => {
    console.log("abriendo correo");
    const correo = "santiagocentenot@gmail.com";

    const asunto = "";

    const enlaceCorreo =
      "mailto:" + correo + "?subject=" + encodeURIComponent(asunto);

    window.open(enlaceCorreo, "_blank");
  };
  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        abrirCorreo,
        handleClickMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };

export default MenuContext;
