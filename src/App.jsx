import { useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  //for storing resume data 
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    skills: "",
    experience: "",
    education: "",
    projects: ""
  });
  // to updated any field data
  function updateField(field, value) {
    setResumeData(prev => ({
      ...prev, [field]: value
    }))


  }
  //next and  previous button ke liye function
  function nextstep() {
    setStep(prev => prev + 1);
  }
  function prevstep() {
    setStep(prev => prev - 1);
  }


  // Step accoding to form
  function renderStepForm() {
    switch (step) {
      case 1:
        return <div>Personal Info Form</div>;
      case 2:
        return <div>About Form</div>;
      case 3:
        return <div>Skills Form</div>;
      case 4:
        return <div>Experience Form</div>;
      case 5:
        return <div>Education Form</div>;
      case 6:
        return <div>Projects Form</div>;
      default:
        return null;
    }
  }



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 ">
        Resume Builder
      </h1>
      <div className="max-w-xl mx-auto bg-white p-6 rouded shadow">
        {renderStepForm()}
        <div className="flex justify-between mt-6">

          <button
            onClick={prevstep}
            disabled={step === 1}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50">previous</button>
          <p>step {step}of 6</p>
          <button onClick={nextstep}
            disabled={step === 1}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">next</button>
        </div>
        <div className="mt-4 bg-gray-100 p-4 text-sm rounded">
          <p><strong>Name:{resumeData.name}</strong></p>
        </div>
      </div>
    </div>
  )
}
export default App;