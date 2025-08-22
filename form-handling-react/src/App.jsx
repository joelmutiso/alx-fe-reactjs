import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <RegistrationForm />
      <formikForm />
    </div>
  );
}
export default App;