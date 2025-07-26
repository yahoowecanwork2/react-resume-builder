import { useState } from "react";
import AboutForm from "./component/AboutForm";
import SkillsForm from "./component/Skillsform";
import ExperianceForm from "./component/ExperienceForm";

function App() {
  const [step, setStep] = useState(1);

  // storing resume data
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

  // update field
  function updateField(field, value) {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  // next & previous
  function nextstep() {
    setStep(prev => prev + 1);
  }

  function prevstep() {
    setStep(prev => prev - 1);
  }

  // form according to step
  function renderStepForm() {
    switch (step) {
      case 1:
        return <div>Personal Info Form</div>;
      case 2:
        return <div><AboutForm data={resumeData} updateField={updateField} /></div>;
      case 3:
        return <div><SkillsForm data={resumeData} updateField={updateField} /></div>;
      case 4:
        return <div><ExperianceForm data={resumeData} updateField={updateField} /></div>;
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
      <h1 className="text-3xl font-bold text-center mb-6">
        Resume Builder
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        {renderStepForm()}

        <div className="flex justify-between mt-6">
          <button
            onClick={prevstep}
            disabled={step === 1}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <p>Step {step} of 6</p>

          <button
            onClick={nextstep}
            disabled={step === 6}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="mt-4 bg-gray-100 p-4 text-sm rounded">
          <p><strong>Name: </strong>{resumeData.name}</p>
          <p><strong>Email: </strong>{resumeData.email}</p>
          <p><strong>Phone: </strong>{resumeData.phone}</p>
          <p><strong>About: </strong>{resumeData.about}</p>
          <p><strong>Skills: </strong>{resumeData.skills}</p>
          <p><strong>Experience: </strong>{resumeData.experience}</p>
          <p><strong>Education: </strong>{resumeData.education}</p>
          <p><strong>Projects: </strong>{resumeData.projects}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
