import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import PersonalForm from "./component/PersonalForm";
import AboutForm from "./component/AboutForm";
import SkillsForm from "./component/Skillsform";
import ExperianceForm from "./component/ExperienceForm";
import EducationForm from "./component/EducationForm";
import ProjectsForm from "./component/ProjectsForm";

function App() {
  const [step, setStep] = useState(1);

  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    website: "",
    about: "",
    skills: [],
    experience: [],
    education: [{ college: "", course: "", marks: "" }],
    projects: [{ title: "", description: "", link: "" }],
  });

  function updateField(field, value) {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function nextstep() {
    setStep((prev) => prev + 1);
  }

  function prevstep() {
    setStep((prev) => prev - 1);
  }

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

  const previewRef = useRef();

  const downloadPDF = () => {
    const input = previewRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Resume Builder</h1>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left - Form Section */}
        <div className="bg-white p-4 sm:p-6 rounded shadow w-full lg:w-1/2">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>

          {renderStepForm()}

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevstep}
              disabled={step === 1}
              className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <p className="text-sm sm:text-base">Step {step} of 6</p>

            <button
              onClick={nextstep}
              disabled={step === 6}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Right - Resume Preview Section */}
        <div
          className="bg-white p-4 sm:p-6 rounded shadow w-full lg:w-1/2 overflow-x-auto"
          ref={previewRef}
        >
          <h1 className="text-xl sm:text-2xl font-bold">{resumeData.name}</h1>
          <p className="text-gray-700 text-sm sm:text-base">
            {resumeData.email} | {resumeData.phone}
          </p>

          {/* Optional Links */}
          {resumeData.linkedin && (
            <p className="text-gray-600 text-sm">
              LinkedIn:{" "}
              <a
                href={resumeData.linkedin}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resumeData.linkedin}
              </a>
            </p>
          )}
          {resumeData.github && (
            <p className="text-gray-600 text-sm">
              GitHub:{" "}
              <a
                href={resumeData.github}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resumeData.github}
              </a>
            </p>
          )}
          {resumeData.website && (
            <p className="text-gray-600 text-sm">
              Website:{" "}
              <a
                href={resumeData.website}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resumeData.website}
              </a>
            </p>
          )}

          <h3 className="mt-4 font-semibold">About</h3>
          <p className="text-gray-600 text-sm">{resumeData.about}</p>

          <h3 className="mt-4 font-semibold">Skills</h3>
          <p className="text-gray-600 text-sm">
            {Array.isArray(resumeData.skills)
              ? resumeData.skills.filter((s) => s.trim()).join(", ")
              : ""}
          </p>

          <h3 className="mt-4 font-semibold">Experience</h3>
          {resumeData.experience.length === 0 ? (
            <p className="text-gray-600 text-sm">Fresher</p>
          ) : (
            <ul className="list-disc ml-5 text-gray-600 text-sm">
              {resumeData.experience.map((exp, i) => (
                <li key={i}>
                  <strong>{exp.company}</strong> - {exp.role} ({exp.duration})
                  <div className="text-sm">{exp.description}</div>
                </li>
              ))}
            </ul>
          )}

          <h3 className="mt-4 font-semibold">Education</h3>
          <ul className="list-disc ml-5 text-gray-600 text-sm">
            {resumeData.education.map((edu, i) => (
              <li key={i}>
                <strong>{edu.college}</strong> - {edu.course} ({edu.marks})
              </li>
            ))}
          </ul>

          <h3 className="mt-4 font-semibold">Projects</h3>
          <ul className="list-disc ml-5 text-gray-600 text-sm">
            {resumeData.projects.map((proj, i) => (
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

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={downloadPDF}
          className="bg-purple-600 text-white px-6 py-3 rounded"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default App;
