import React, { useState } from "react";
import { createStudent } from "../../services/studentService";
import "./CreateStudent.css";

const CreateStudent = () => {
  const [form, setForm] = useState({
    name: "",
    telephone: "",
    email: "",
    gender: "male",
    birthday: "",
    country: "",
    imagePdf: null,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim().includes(" ")) {
      newErrors.name = "Full Name must contain at least two names.";
    }

    if (!form.telephone.startsWith("00") || form.telephone.length < 12 || form.telephone.length > 17) {
      newErrors.telephone = "Telephone must start with '00' and be between 12 to 17 characters.";
    }
    

    if (!form.email.includes("@") || !form.email.endsWith(".com")) {
      newErrors.email = "Email must contain '@' and end with '.com'.";
    }

    if (!form.birthday) {
      newErrors.birthday = "Birthday is required.";
    }

    if (!form.country.trim()) {
      newErrors.country = "Country is required.";
    }

    if (!form.imagePdf) {
      newErrors.imagePdf = "The CV is required.";
    } else {
      const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(form.imagePdf.type)) {
        newErrors.imagePdf = "CV must be a PDF, JPG, JPEG, or PNG.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = new FormData();
    for (let key in form) data.append(key, form[key]);

    try {
      await createStudent(data);
      setMessage({ text: "We received your application, we will contact you soon, thank you !", type: "success" });
      setForm({
        name: "",
        telephone: "",
        email: "",
        gender: "male",
        birthday: "",
        country: "",
        imagePdf: null,
      });
      setErrors({});
    } catch (err) {
      setMessage({
        text: "Failed to create your application. Please try again.",
        type: "error",
      });
      console.error(err);
    }
  };

  return (
    <div className="student-form-container">
      <p style={{textAlign:"center", backgroundColor:"royalblue", color:"white", padding:"6px", borderRadius:"8px"}}>Ready to transform your career by joining a training program that combines theory and practice?</p>
      <h2>I'm applying now!</h2>

      {message.text && (
        <div className={`alert ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="student-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jean Doe"
          value={form.name}
          onChange={handleChange}
          className="form-control"
        />
        {errors.name && <div className="error-message">{errors.name}</div>}

        <label htmlFor="telephone">Telephone</label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          placeholder="00249123456789"
          value={form.telephone}
          onChange={handleChange}
          className="form-control"
        />
        {errors.telephone && <div className="error-message">{errors.telephone}</div>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          value={form.email}
          onChange={handleChange}
          className="form-control"
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>

        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          className="form-control"
        />
        {errors.birthday && <div className="error-message">{errors.birthday}</div>}

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Your Country"
          value={form.country}
          onChange={handleChange}
          className="form-control"
        />
        {errors.country && <div className="error-message">{errors.country}</div>}

        <label htmlFor="imagePdf">CV</label>
        <input
          type="file"
          id="imagePdf"
          name="imagePdf"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleChange}
          className="form-control"
        />
        {errors.imagePdf && <div className="error-message">{errors.imagePdf}</div>}

        <button type="submit" className="submit-btn">
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default CreateStudent;
