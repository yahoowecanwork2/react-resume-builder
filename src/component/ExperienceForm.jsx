import { useState } from "react";

export default function ExperienceForm({ data, updateField }) {
    const [isFresher, setIsFresher] = useState(data.experience.length === 0);

    const handleFresherChange = (e) => {
        const value = e.target.value;
        if (value === "fresher") {
            setIsFresher(true);
            updateField("experience", []); // clear experience
        } else {
            setIsFresher(false);
        }
    };

    const addExperience = () => {
        updateField("experience", [
            ...data.experience,
            { company: "", role: "", duration: "", description: "" }
        ]);
    };

    const updateExperience = (index, field, value) => {
        const newExperience = [...data.experience];
        newExperience[index][field] = value;
        updateField("experience", newExperience);
    };

    const removeExperience = (index) => {
        const newExperience = data.experience.filter((_, i) => i !== index);
        updateField("experience", newExperience);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Experience</h2>

            <div className="mb-4">
                <label className="mr-4">
                    <input
                        type="radio"
                        value="fresher"
                        checked={isFresher}
                        onChange={handleFresherChange}
                    /> Fresher
                </label>
                <label>
                    <input
                        type="radio"
                        value="experienced"
                        checked={!isFresher}
                        onChange={handleFresherChange}
                    /> Experienced
                </label>
            </div>

            {!isFresher &&
                data.experience.map((exp, index) => (
                    <div key={index} className="border p-3 mb-3 rounded">
                        <input
                            type="text"
                            placeholder="Company"
                            value={exp.company}
                            onChange={(e) =>
                                updateExperience(index, "company", e.target.value)
                            }
                            className="border p-2 w-full mb-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Role"
                            value={exp.role}
                            onChange={(e) =>
                                updateExperience(index, "role", e.target.value)
                            }
                            className="border p-2 w-full mb-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Duration"
                            value={exp.duration}
                            onChange={(e) =>
                                updateExperience(index, "duration", e.target.value)
                            }
                            className="border p-2 w-full mb-2 rounded"
                        />
                        <textarea
                            placeholder="Description"
                            value={exp.description}
                            onChange={(e) =>
                                updateExperience(index, "description", e.target.value)
                            }
                            className="border p-2 w-full h-20 rounded"
                        />
                        <button
                            type="button"
                            onClick={() => removeExperience(index)}
                            className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))
            }

            {!isFresher && (
                <button
                    type="button"
                    onClick={addExperience}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    + Add Experience
                </button>
            )}
        </div>
    );
}
