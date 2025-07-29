export default function EducationForm({ data, updateField }) {
    const addEducation = () => {
        updateField("education", [
            ...data.education,
            { college: "", course: "", marks: "" }
        ]);
    };

    const updateEducation = (index, field, value) => {
        const newEducation = [...data.education];
        newEducation[index][field] = value;
        updateField("education", newEducation);
    };

    const removeEducation = (index) => {
        const newEducation = data.education.filter((_, i) => i !== index);
        updateField("education", newEducation);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Education</h2>

            {data.education.map((edu, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                    <input
                        type="text"
                        placeholder="College Name"
                        value={edu.college}
                        onChange={(e) => updateEducation(index, "college", e.target.value)}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Course / Degree"
                        value={edu.course}
                        onChange={(e) => updateEducation(index, "course", e.target.value)}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Marks / CGPA / Year"
                        value={edu.marks}
                        onChange={(e) => updateEducation(index, "marks", e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                    <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={addEducation}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                + Add Education
            </button>
        </div>
    );
}
