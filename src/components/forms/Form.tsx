import { ElementRef, useRef } from "react";
import { Button } from "../buttons/Button";
import { S } from "./Form.styles";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm("service_1hj1o7d", "template_d2f01ae", form.current, {
        publicKey: "ZN57ZD5ce-2f4bMsu",
      })
      .then(() => {
          console.log("SUCCESS!");
      }, (error) => {
          console.log("FAILED...", error.text);
      });
    e.target.reset();
  };
  return (
    <S.Form ref={form} onSubmit={sendEmail}>
      <S.Field required placeholder="name" name={"user_name"} />
      <S.Field required placeholder="email" name={"email"} />
      <S.Field required placeholder="theme" name={"subject"} />
      <S.Field
        required
        placeholder="message"
        as="textarea"
        height="120px"
        name={"message"}
      />
      <Button
        title="Submit"
        onClick={() => console.log("Button will be clicked!")}
      />
    </S.Form>
  );
};