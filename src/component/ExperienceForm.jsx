export default function ExperienceForm({ data, updateField }) {
    const addExperience = () => {
        updateField("experience", [...data.experience, ""]);
    };

    const updateExperience = (index, value) => {
        const newExperience = [...data.experience];
        newExperience[index] = value;
        updateField("experience", newExperience);
    };

    const removeExperience = (index) => {
        const newExperience = data.experience.filter((_, i) => i !== index);
        updateField("experience", newExperience);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            {data.experience.map((exp, index) => (
                <div key={index} className="flex gap-2 mb-2">
                    <input
                        type="text"
                        value={exp}
                        onChange={(experience) => updateExperience(index, experience.target.value)}
                        placeholder={`Experience ${index + 1}`}
                        className="border p-2 w-full rounded"
                    />
                    <button
                        type="button"
                        onClick={() => removeExperience(index)}
                        className="bg-red-500 text-white px-3 rounded"
                    >
                        X
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={addExperience}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                + Add Experience
            </button>
        </div>
    );
}
