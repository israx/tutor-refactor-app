import React, { useContext } from "react";
import { context } from "../useContext";
import styled from "styled-components";
import { Multiselect } from "multiselect-react-dropdown";
import Email from "react-email-autocomplete";
const FormContainer = styled.div`
  padding: 2rem;
`;
const FormStyled = styled.form`
  background: #fff;
  padding: 2rem;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px var(--grey);
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
  label {
    display: grid;
    gap: 0.5rem;
    font-size: 1.3rem;
  }
  input[type="text"] {
    height: 1.6rem;
    border: 1px solid #707070;
    border-radius: 3px;
  }
  .submit {
    height: 2.5rem;
    font-size: 1rem;
    color: #fff;
    background: var(--red);
    border: 1px solid var(--red);
  }
`;

export default function TutorsApply() {
  const {
    tutor,
    days,
    subjects,
    languages,
    handleSubmit,
    handleChange,
    onRemove,
    onSelect,
  } = useContext(context);

  const { name, description, email } = tutor;
  console.log(tutor);

  return (
    <FormContainer>
      <h1>Work with Us</h1>
      <FormStyled onSubmit={handleSubmit} action="">
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <Email
            name="email"
            value={email}
            onChange={handleChange} //The Formik custom onChange
          />
        </label>
        <label>
          Availability:
          <Multiselect
            options={days}
            displayValue="day"
            onSelect={onSelect}
            onRemove={onRemove}
          />
        </label>
        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
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
    </FormContainer>
  );
}

export { FormStyled };
