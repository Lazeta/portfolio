import React, { ElementRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../buttons/Button";
import S from "./Form.styles";
import Swal from 'sweetalert2';


const Form = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm("service_1hj1o7d", "template_d2f01ae", form.current, {
        publicKey: "ZN57ZD5ce-2f4bMsu",
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Letter sent successfully',
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log("FAILED...", error.text);
      });
    (e.target as HTMLFormElement).reset(); // Using as in TypeScript is called a "type assertion" and serves as a hint to the compiler that you are sure that the value is of a certain type.
  };

  return (
    <S.Form ref={form} onSubmit={sendEmail}>
      <S.Field name={"user_name"} placeholder="name" required/>
      <S.Field name={"email"} placeholder="email" required/>
      <S.Field name={"subject"} placeholder="theme" required/>
      <S.Field name={"message"}
        placeholder="message"
        as="textarea"
        height="120px"
        required
      />
      <Button title="Submit"/>
    </S.Form>
  );
};


export default Form