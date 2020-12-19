import React, { useState, useEffect } from "react";
import axios from "axios";

const context = React.createContext();

function ContextProviderTutors(props) {
  const [tutorsList, setTutorsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tutor/")
      .then((result) => setTutorsList([...result.data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <context.Provider
      value={{
        tutorsList,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export {
  context as contextTutorsList,
  ContextProviderTutors as ProviderTutors,
};
