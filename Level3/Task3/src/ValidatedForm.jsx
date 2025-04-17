import React from 'react';
import { useFormik } from 'formik';
import './App.css';

const ValidatedForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.age) {
      errors.age = 'Age is required';
    } else if (isNaN(values.age) || values.age <= 0) {
      errors.age = 'Age must be a number greater than 0';
    }

    if (!values.address) {
      errors.address = 'Address is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      address: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('Submitted Values:', values);
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
        {formik.errors.firstName && <p className="text-red-600">{formik.errors.firstName}</p>}
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
        {formik.errors.lastName && <p className="text-red-600">{formik.errors.lastName}</p>}
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
        {formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}
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
        {formik.errors.age && <p className="text-red-600">{formik.errors.age}</p>}
      </div>

      <div>
        <label className="block font-medium">Address</label>
        <textarea
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          className="w-full p-2 border rounded"
        />
        {formik.errors.address && <p className="text-red-600">{formik.errors.address}</p>}
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ValidatedForm;
