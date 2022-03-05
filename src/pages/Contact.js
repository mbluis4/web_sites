import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState([
    {
      name: "",
      email: "",
      message: "",
    },
  ]);
  return (
    <>
      <form action>
        <input
          placeholder="Nombre"
          name="name"
          value={form.name}
          /* onChange={handleChange} */
        ></input>
        <input type="email" placeholder="tu email"></input>
        <textarea type="text" placeholder="tu mensaje"></textarea>
        <button type="Submit">Enviar</button>
      </form>
    </>
  );
};

export default Contact;
