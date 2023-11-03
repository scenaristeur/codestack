import { createContext } from "react";

export const AppContext = createContext({
  //   theme: themes.dark,
  //   toggleTheme: () => {},
  api: "http://localhost:8000/api/",
});
