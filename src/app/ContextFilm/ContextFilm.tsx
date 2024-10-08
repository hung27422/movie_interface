"use client";
import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
interface FilmContextType {
  valueSearchContext: string;
  setValueSearchContext: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: FilmContextType = {
  valueSearchContext: "",
  setValueSearchContext: () => {},
};

export const FilmContext = createContext<FilmContextType>(defaultValue);

function ContextFilm({ children }: Props) {
  const [valueSearchContext, setValueSearchContext] = useState<string>("");
  const contextValue = { valueSearchContext, setValueSearchContext };
  return (
    <FilmContext.Provider value={contextValue}>{children}</FilmContext.Provider>
  );
}

export default ContextFilm;
