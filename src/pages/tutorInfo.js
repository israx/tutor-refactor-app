import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import avatar from "../avatars/2.png";
import { contextTutorsList } from "../context/useTutorsContext";
import styled from "styled-components";

const TutorCard = styled.div`
  margin: 3rem auto;
  max-width: 400px;
  border: 1px solid var(--white);
  border-radius: 5px;
  box-shadow: 3px 2px 2px var(--grey);
  background: #fff;
  padding: 2rem;
  display: grid;

  .title,
  .contact {
    text-align: center;
  }
  .title {
    margin-top: 1rem;
  }
  img {
    max-width: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .options {
    display: flex;
    gap: 0.5rem;
    font-weight: 550;
    span {
      font-weight: 100;
    }
  }

  .contact {
    font-size: 1.4rem;
    transition: 0.3s ease;
    padding: 0.3rem;
    &:hover {
      background: var(--red);
      text-decoration: none;
      color: #fff;
      border-radius: 5px;
    }
  }
`;
export default function TutorInfo() {
  const [singleTutor, setSingleTutor] = useState({
    name: "",
    availability: [],
    subject: [],
    language: [],
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tutor/${id}`)
      .then((result) => setSingleTutor({ ...result.data }))
      .catch((err) => console.log(err));
  }, []);

  console.log(singleTutor);

  const tutorDisplay = (tutor) => {
    if (tutor !== undefined) {
      console.log(tutor);
      return (
        <TutorCard className="tutors-card">
          <img src={avatar} alt="avatar" />
          <h1 className="title">{tutor.name}</h1>
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

          <a className="contact" href={`mailto:${tutor.email}`}>
            Contact Me
          </a>
        </TutorCard>
      );
    }
  };

  return tutorDisplay(singleTutor);
}
