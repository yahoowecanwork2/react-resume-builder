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
  function nextstep() {
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
    </div>
  )
}
export default App;