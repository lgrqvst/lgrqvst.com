import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({ submitting: false, status: { ok, msg } })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (!serverState.submitting) {
      const form = e.target
      setServerState({ submitting: true })
      axios({
        method: "post",
        url: "https://getform.io/f/cfe42dba-005f-4dd8-9570-662d40af7495",
        data: new FormData(form),
      })
        .then((r) => {
          handleServerResponse(true, "Message sent successfully!", form)
        })
        .catch((r) => {
          handleServerResponse(false, r.response.data.error, form)
        })
    }
  }

  return (
    <FormContainer className="align-default">
      <form onSubmit={handleOnSubmit}>
        <FormRow>
          <Label>
            <span>Name: </span>
            <Input
              type="text"
              name="name"
              placeholder="Boaty McBoatface"
              required={true}
            />
          </Label>
        </FormRow>
        <FormRow>
          <Label>
            <span>Pronouns: </span>
            <Input type="text" name="pronouns" placeholder="they/them" />
          </Label>
        </FormRow>
        <FormRow>
          <Label>
            <span>Email: </span>
            <Input
              type="email"
              name="email"
              placeholder="boaty@example.com"
              required={true}
            />
          </Label>
        </FormRow>
        <FormRow>
          <Label>
            <span>Message: </span>
            <Textarea
              as="textarea"
              name="message"
              placeholder="Hey there friendo. Neat website you got here. Be a shame if anything were to... happen to it."
            ></Textarea>
          </Label>
        </FormRow>
        <FormRow>
          <SubmitWrapper className={serverState.submitting ? `is-sending` : ``}>
            <Submit
              type="submit"
              value={serverState.submitting ? `Sending...` : `Send!`}
              disabled={serverState.submitting ? true : false}
            />
          </SubmitWrapper>
        </FormRow>
      </form>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </FormContainer>
  )
}

export default ContactForm

const FormContainer = styled.div``

const FormRow = styled.div`
  &:not(:first-child) {
    margin: 1em 0 0 0;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 100%;
  margin: 0.25em 0 0 0;
  padding: 0.5em;
  border-radius: 0.25em;
  transition: background 0.25s, color 0.25s;

  background: var(--flushLight);
  color: var(--flushDark);
  border: 0px solid transparent;
  box-shadow: 0 0.1em 0.25em inset rgba(0, 0, 0, 0.15);
  transition: border 0.25s;

  &:focus {
    outline: 0 transparent;
    border-left: 0.5rem solid var(--accent1);
  }
`

const Textarea = styled(Input)`
  height: 12em;
  padding: 1em;
  font-size: 1.25em;
  font-style: italic;

  &:focus {
    padding-left: 1em;
  }
`

const SubmitWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: var(--accent1);
  border-radius: 0.25em;
  transition: opacity 0.25s 0.5s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    display: block;
    width: 7rem;
    height: 7rem;
    background: var(--accent1);
  }

  &::before {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(0.7) scaleY(0.5) rotate(45deg);
    background: linear-gradient(
        -45deg,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0) 75%
      ),
      var(--accent1);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
  }

  &::after {
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(0.7) scaleY(0.5) rotate(45deg);
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 75%
      ),
      var(--accent1);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
    transition: transform 0.25s, box-shadow 0.25s, background-color 0.25s;
  }

  &:not(.is-sending):hover {
    &::after {
      transform: translate(-50%, -50%) scaleX(0.7) scaleY(0.4) rotate(45deg);
      box-shadow: 0 0.25rem 2.5rem rgba(0, 0, 0, 0.15);
      background-color: var(--accent1Lighter);
    }
  }

  &.is-sending {
    &::before,
    &::after {
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
    }
  }
`

const Submit = styled.input`
  position: relative;
  z-index: 2;
  border: 0;
  background: transparent;
  color: var(--flushDark);
  color: transparent;
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1;
  width: 7rem;
  height: 4rem;

  background: linear-gradient(
    110deg,
    transparent 25%,
    rgba(255, 255, 255, 0.25) 35%,
    rgba(255, 255, 255, 0.25) 65%,
    transparent 75%
  );
  background-repeat: no-repeat;
  background-position: -7rem 0;
  transition: background-position 0.25s;

  &:hover {
    background-position: 14rem 0;
  }

  .is-sending & {
    background-position: -7rem 0;
  }
`
