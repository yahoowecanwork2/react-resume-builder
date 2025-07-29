import { useState } from "react";
import PersonalForm from "./component/PersonalForm";
import AboutForm from "./component/AboutForm";
import SkillsForm from "./component/Skillsform";
import ExperianceForm from "./component/ExperienceForm";
import EducationForm from "./component/EducationForm";
import ProjectsForm from "./component/ProjectsForm";

function App() {
  const [step, setStep] = useState(1);

  // Resume data state
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    skills: [],
    experience: [],
    education: [
      { college: "", course: "", marks: "" }
    ],

    projects: [
      { title: "", description: "", link: "" }
    ],

  });

  // Update field handler
  function updateField(field, value) {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  // Step navigation
  function nextstep() {
    setStep(prev => prev + 1);
  }

  function prevstep() {
    setStep(prev => prev - 1);
  }

  // Render form based on step
  function renderStepForm() {
    switch (step) {
      case 1:
        return <PersonalForm data={resumeData} updateField={updateField} />;
      case 2:
        return <AboutForm data={resumeData} updateField={updateField} />;
      case 3:
        return <SkillsForm data={resumeData} updateField={updateField} />;
      case 4:
        return <ExperianceForm data={resumeData} updateField={updateField} />;
      case 5:
        return <EducationForm data={resumeData} updateField={updateField} />;
      case 6:
        return <ProjectsForm data={resumeData} updateField={updateField} />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">
        Resume Builder
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

        {/* Left side - Form */}
        <div className="bg-white p-6 rounded shadow">
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
        </div>

        {/* Right side - Live Preview */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Live Preview</h2>

          <h1 className="text-2xl font-bold">{resumeData.name}</h1>
          <p className="text-gray-700">
            {resumeData.email} | {resumeData.phone}
          </p>

          <h3 className="mt-4 font-semibold">About</h3>
          <p className="text-gray-600">{resumeData.about}</p>

          <h3 className="mt-4 font-semibold">Skills</h3>
          <p className="text-gray-600">
            {Array.isArray(resumeData.skills)
              ? resumeData.skills.filter(skill => skill.trim()).join(", ")
              : ""}
          </p>

          <h3 className="mt-4 font-semibold">Experience</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {Array.isArray(resumeData.experience) &&
              resumeData.experience.map((exp, i) =>
                exp.trim() && <li key={i}>{exp}</li>
              )}
          </ul>

          <h3 className="mt-4 font-semibold">Education</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {Array.isArray(resumeData.education) &&
              resumeData.education.map((edu, i) => (
                <li key={i}>
                  <strong>{edu.college}</strong> - {edu.course} ({edu.marks})
                </li>
              ))}
          </ul>

          <h3 className="mt-4 font-semibold">Projects</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {Array.isArray(resumeData.projects) &&
              resumeData.projects.map((proj, i) => (
                <li key={i}>
                  <strong>{proj.title}</strong> – {proj.description}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 ml-2"
                    >
                      [Link]
                    </a>
                  )}
                </li>
              ))}
          </ul>




        </div>
      </div>
    </div>
  );
}

export default App;
