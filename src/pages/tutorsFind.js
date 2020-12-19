import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../useContext";
import { contextTutorsList } from "../context/useTutorsContext";
import { FormStyled } from "./tutorsApply";
import { Multiselect } from "multiselect-react-dropdown";
import { TutorsContainer } from "./tutors";

export default function TutorsFind() {
  const { days, subjects, languages } = useContext(context);
  const { tutorsList } = useContext(contextTutorsList);
  const [filTutors, setFilTutors] = useState([]);
  const [filters, setFilters] = useState({
    days: days,
    language: [],
    subject: [],
  });

  function onSelect(currentList, item) {
    const day = typeof item["day"] !== "undefined";
    const language = typeof item["language"] !== "undefined";
    const subject = typeof item["subject"] !== "undefined";
    console.log({ language, subject, day });

    if (day) {
      setFilters((prev) => ({ ...prev, days: currentList }));
    } else if (language) {
      setFilters((prev) => ({ ...prev, language: currentList }));
    } else if (subject) {
      setFilters((prev) => ({ ...prev, subject: currentList }));
    }
  }

  function onRemove(currentList, item) {
    const day = typeof item["day"] !== "undefined";
    const language = typeof item["language"] !== "undefined";
    const subject = typeof item["subject"] !== "undefined";

    if (day) {
      setFilters((prev) => ({ ...prev, days: currentList }));
    } else if (language) {
      setFilters((prev) => ({ ...prev, language: currentList }));
    } else if (subject) {
      setFilters((prev) => ({ ...prev, subject: currentList }));
    }
  }

  function filter() {
    const { days, language, subject } = filters;
    return tutorsList.filter((tutor) => {
      const avai = tutor.availability.map((avai) => avai.day);
      const sub = tutor.subject.map((sub) => sub.subject);
      const lan = tutor.language.map((lan) => lan.language);
      //console.log({ avai, sub, lan });

      const tutorAvai = days.some((day) => {
        //check if the tutor matches with at least one available day of the student
        const compare = avai.some((d) => {
          return d === day.day;
        });
        return compare;
      });
      const tutorLan = language.some((lang) => {
        const compare = lan.some((l) => {
          return l === lang.language;
        });
        return compare;
      });
      const tutorSub = subject.some((subject) => {
        const compare = sub.some((s) => {
          return s === subject.subject;
        });
        return compare;
      });
      console.log({ tutorAvai, tutorLan, tutorSub });

      if (tutorAvai && tutorLan && tutorSub) {
        return tutor;
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filteredTutors = filter();
    setFilTutors(filteredTutors);
  }

  const tutorsDisplay = filTutors.map((tutor) => (
    <div className="tutors-card" key={tutor._id}>
      <h1>
        <Link to={`${tutor._id}`}>{tutor.name}</Link>
      </h1>
      <p>{tutor.description}</p>
      <p className="options">
        {" "}
        Availability:
        {tutor.availability.map((days, i) => (
          <span key={i}>{days.day}</span>
        ))}
      </p>
      <p className="options">
        {" "}
        Languages:
        {tutor.language.map((languages, i) => (
          <span key={i}>{languages.language}</span>
        ))}
      </p>
      <p className="options">
        {" "}
        Subjectss:
        {tutor.subject.map((subjects, i) => (
          <span key={i}>{subjects.subject}</span>
        ))}
      </p>
    </div>
  ));
  return (
    <TutorsContainer>
      <h1 className="title">Find your Tutor here</h1>
      <FormStyled onSubmit={handleSubmit} action="" className="form">
        <label>
          Availability:
          <Multiselect
            options={days}
            displayValue="day"
            onSelect={onSelect}
            onRemove={onRemove}
          />
        </label>
        <label>
          Language:
          <Multiselect
            options={languages}
            displayValue="language"
            onSelect={onSelect}
            onRemove={onRemove}
            name="language"
          />
        </label>
        <label>
          Subject:
          <Multiselect
            options={subjects}
            displayValue="subject"
            onSelect={onSelect}
            onRemove={onRemove}
            name="subject"
          />
        </label>
        <button className="submit">Submit</button>
      </FormStyled>
      {tutorsDisplay}
    </TutorsContainer>
  );
}
