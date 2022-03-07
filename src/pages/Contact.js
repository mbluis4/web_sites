import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState([
    {
      name: "",
      email: "",
      message: "",
    },
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white space-y-10 py-6 shadow-lg rounded-lg">
      <form action="#" className="py-2 px-6">
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
          placeholder="mensaje"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="8"
          className="placeholder:italic placeholder:text-slate-400 w-full border resize-none"
        ></textarea>
        <button
          type="Submit"
          className="block border-2 shadow-sm mx-auto px-6 py-2 rounded-lg mt-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;