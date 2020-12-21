import React, { useState, useEffect } from "react";
import axios from "axios";

const context = React.createContext();

function ContextProviderTutors(props) {
  const [tutorsList, setTutorsList] = useState([]);
  const [updateTutors, setUpdateTutors] = useState(false);

  useEffect(() => {
    axios
      .get("https://tutor-app-version1.herokuapp.com/tutor/")
      .then((result) => setTutorsList([...result.data]))
      .catch((err) => console.log(err));
  }, [updateTutors]);

  return (
    <context.Provider
      value={{
        tutorsList,
        setUpdateTutors,
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
