import React from 'react';
import { useFormik } from 'formik';
import './App.css';

const MultiInputForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      address: '',
    },
    onSubmit: (values) => {
      console.log('Form Submitted with values:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-6 max-w-md mx-auto mt-10 border rounded shadow">
      <div>
        <label className="block font-medium">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Age</label>
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Address</label>
        <textarea
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default MultiInputForm;
