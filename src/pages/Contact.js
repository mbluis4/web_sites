import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailModal from "../components/EmailModal";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t5pto3s",
        "template_joq66b4",
        formRef.current,
        "QEUzjYuOjHTEohzom"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => console.log(error.text)
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    setEmailSent(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-1/700  bg-white space-y-10 py-6 shadow-lg rounded-lg border-slate-700 border-2 mx-auto">
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        action="#"
        className="py-2 px-6"
      >
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 mb-2 border-2 py-1 rounded-lg shadow-sm w-full"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="my-1 border-2 py-1 rounded-lg shadow-sm w-full"
          required
        ></input>
        <label htmlFor="message">Mensaje</label>
        <textarea
          type="text"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="8"
          className="placeholder:italic placeholder:text-slate-400 rounded-lg border-2 w-full resize-none"
        ></textarea>
        <button
          type="Submit"
          className="block border-2 shadow-sm mx-auto px-6 py-2 rounded-lg mt-2 hover:bg-slate-400 hover:text-white"
        >
          Enviar
        </button>
      </form>

      <EmailModal emailSent={emailSent} setEmailSent={setEmailSent} />
    </div>
  );
};

export default Contact;
