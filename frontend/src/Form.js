import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
