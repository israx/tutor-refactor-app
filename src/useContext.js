import React, { useState, useEffect } from "react";
import axios from "axios";

const context = React.createContext();

function ContextProvider(props) {
  const [days] = useState([
    { day: "Monday", id: 1 },
    { day: "Tuesday", id: 2 },
    { day: "Wednesday", id: 3 },
    { day: "Thursday", id: 4 },
    { day: "Friday", id: 5 },
    { day: "Saturday", id: 6 },
  ]);
  const [subjects, setSubjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [tutor, setTutor] = useState({
    name: "",
    availability: [],
    description: "",
    language: [],
    subject: [],
    email: "",
  });

  function onSelect(selectedList, selectedItem) {
    //Checking if the property is present
    const language = typeof selectedItem["language"] !== "undefined";
    const subject = typeof selectedItem["subject"] !== "undefined";
    const availability = typeof selectedItem["day"] !== "undefined";
    console.log({ language, subject, availability });

    if (language) {
      setTutor((prev) => ({
        ...prev,
        language: [...selectedList],
      }));
    } else if (subject) {
      setTutor((prev) => ({
        ...prev,
        subject: [...selectedList],
      }));
    } else if (availability) {
      setTutor((prev) => ({
        ...prev,
        availability: [...selectedList],
      }));
    }
  }

  function onRemove(selectedList, selectedItem) {
    //Checking if the property is present
    const language = typeof selectedItem["language"] !== "undefined";
    const subject = typeof selectedItem["subject"] !== "undefined";
    const availability = typeof selectedItem["day"] !== "undefined";

    if (language) {
      setTutor((prev) => ({
        ...prev,
        language: [...selectedList],
      }));
    } else if (subject) {
      setTutor((prev) => ({
        ...prev,
        subject: [...selectedList],
      }));
    } else if (availability) {
      setTutor((prev) => ({
        ...prev,
        availability: [...selectedList],
      }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setTutor((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
    //Retriving languages and subjects
    axios
      .get("https://tutor-app-version1.herokuapp.com/subject")
      .then((result) => setSubjects((prev) => [...result.data]))
      .catch((err) => console.log(err));

    axios
      .get("https://tutor-app-version1.herokuapp.com/language")
      .then((result) => setLanguages((prev) => [...result.data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <context.Provider
      value={{
        tutor,
        days,
        subjects,
        languages,
        handleChange,
        onRemove,
        onSelect,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export { context, ContextProvider as Provider };
