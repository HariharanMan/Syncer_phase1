import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ComplexForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
      gender: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),

      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),

      age: Yup.number()
        .positive('Age must be positive')
        .integer('Age must be an integer')
        .required('Age is required'),

      gender: Yup.string()
        .oneOf(['male', 'female', 'other'], 'Select a valid gender')
        .required('Gender is required'),
    }),
    onSubmit: (values) => {
      console.log('Submitted Data:', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-6 max-w-md mx-auto mt-10 border rounded shadow">
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full p-2 border rounded"
        />
        {formik.touched.name && formik.errors.name && <p className="text-red-600">{formik.errors.name}</p>}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full p-2 border rounded"
        />
        {formik.touched.email && formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}
      </div>

      <div>
        <label className="block font-medium">Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="w-full p-2 border rounded"
        />
        {formik.touched.password && formik.errors.password && <p className="text-red-600">{formik.errors.password}</p>}
      </div>

      <div>
        <label className="block font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="w-full p-2 border rounded"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-600">{formik.errors.confirmPassword}</p>}
      </div>

      <div>
        <label className="block font-medium">Age</label>
        <input
          type="number"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className="w-full p-2 border rounded"
        />
        {formik.touched.age && formik.errors.age && <p className="text-red-600">{formik.errors.age}</p>}
      </div>

      <div>
        <label className="block font-medium">Gender</label>
        <select
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender && <p className="text-red-600">{formik.errors.gender}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default ComplexForm;
