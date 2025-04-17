import React from 'react';
import { useFormik } from 'formik';
import './App.css';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: values => {
      console.log('Form Values:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-4 border rounded-md max-w-md mx-auto mt-10 shadow">
      <div>
        <label className="block font-semibold">Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormikForm;
