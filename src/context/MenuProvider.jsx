import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  // handleClickMenu = () => {
  //   // setShowMenu(!showMenu);
  //   console.log("cerrandoMenu");
  // };
  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };

export default MenuContext;
