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
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 ">
        Resume Builder
      </h1>
    </div>
  )
}
export default App;