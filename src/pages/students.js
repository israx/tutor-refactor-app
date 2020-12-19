import React, { useContext } from "react";
import { context } from "../useContext";
import styled from "styled-components";
import { Multiselect } from "multiselect-react-dropdown";
import Email from "react-email-autocomplete";

const FormStyled = styled.form`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

export default function StudentApply() {
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
  return (
    <>
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
        <button>Submit</button>
      </FormStyled>
    </>
  );
}
