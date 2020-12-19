import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextTutorsList } from "../context/useTutorsContext";
import styled from "styled-components";

const TutorsContainer = styled.div`
  --columns: 1;
  padding: 2rem;
  display: grid;

  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 1rem;

  .tutors-card {
    background: #fff;
    padding: 0.5rem;
    border: var(--blue) solid 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px;
    .options {
      font-weight: 600;
      display: flex;
      gap: 1rem;
      span {
        font-weight: 200;
      }
    }
    a {
      text-decoration: none;
      &::after {
        content: "";
        width: 40px;
        height: 4px;
        border-radius: 2px;
        background: var(--red);
        display: block;
        box-shadow: 1px 1px 1px #e2405a;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    --columns: 2;
    .title,
    .form {
      grid-column: span 2 !important;
    }
  }
`;
export default function Tutors() {
  const { tutorsList } = useContext(contextTutorsList);

  const tutorsDisplay = tutorsList.map((tutor) => (
    <div className="tutors-card" key={tutor._id}>
      <h1>
        <Link to={`tutor/${tutor._id}`}>{tutor.name}</Link>
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
        Subjects:
        {tutor.subject.map((subjects, i) => (
          <span key={i}>{subjects.subject}</span>
        ))}
      </p>
    </div>
  ));

  return (
    <TutorsContainer>
      <h1 className="title">Meet Our tutors</h1>
      {tutorsDisplay}
    </TutorsContainer>
  );
}

export { TutorsContainer };
