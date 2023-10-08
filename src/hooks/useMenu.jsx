import { useContext } from "react";
import MenuContext from "../context/MenuProvider";

const useMenu = () => {
  return useContext(MenuContext);
};

export default useMenu;
