import React, { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const AppContext = createContext();

// 2. Crear el componente proveedor
export const AppProvider = ({ children }) => {
  // Define aquí los estados y funciones que quieras compartir entre componentes
  const [user, setUser] = useState(null);

  // Puedes agregar más estados y funciones según tus necesidades

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Crear un hook personalizado para acceder al contexto
export const useAppContext = () => {
  return useContext(AppContext);
};
