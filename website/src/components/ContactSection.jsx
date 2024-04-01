import React from "react";
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

function Contact() {
  return (
    <OuterContainer id="contact">
      <Title color="black" text="CONTACT ME"></Title>
      <Divider></Divider>
      <Text
        color="black"
        text=" Don't hesitate to reach out using the form below"
      ></Text>
      <InnerContainer>
        <Label>NAME</Label>
        <InputBox type="text" placeholder="Enter your name"></InputBox>
        <Label>EMAIL</Label>
        <InputBox type="text" placeholder="Enter your email"></InputBox>
        <Label>MESSAGE</Label>
        <TextArea
          type="text"
          placeholder="Enter your message"
          rows="10"
        ></TextArea>
        <Button>SUBMIT</Button>
      </InnerContainer>
    </OuterContainer>
  );
}
export default Contact;
