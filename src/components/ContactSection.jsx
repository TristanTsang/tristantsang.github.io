import React, { useRef } from "react";
import {
  OuterContainer,
  InnerContainer,
  Label,
  InputBox,
  TextArea,
  Button,
} from "../styles/Contact.style";
import Divider from "./DividerComponent";
import Title from "./TitleComponent";
import Text from "./TextComponent";
import emailjs from "@emailjs/browser";
import background from "../assets/background.jpg";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e0ojn8x", "template_x53k9go", form.current, {
        publicKey: "4dxIwLULmRisgiKHy",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <OuterContainer id="contact">
      <Title color="black" text="CONTACT ME"></Title>
      <Divider></Divider>
      <Text
        color="black"
        text=" Don't hesitate to reach out using the form below"
      ></Text>
      <InnerContainer>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <Label>NAME</Label>
          <InputBox
            type="text"
            name="user_name"
            placeholder="Enter your name"
          ></InputBox>
          <Label>EMAIL</Label>
          <InputBox
            type="email"
            name="user_email"
            placeholder="Enter your email"
          ></InputBox>
          <Label>MESSAGE</Label>
          <TextArea
            type="submit"
            value="Send"
            name="message"
            placeholder="Enter your message"
            rows="10"
          ></TextArea>
          <Button type="submit" value="SUBMIT"></Button>
        </form>
      </InnerContainer>
    </OuterContainer>
  );
}
export default Contact;
