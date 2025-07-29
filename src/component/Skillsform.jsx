function SkillsForm({ data, updateField }) {
    const addSkill = () => {
        updateField("skills", [...data.skills, ""]);
    };

    const updateSkill = (index, value) => {
        const newSkills = [...data.skills];
        newSkills[index] = value;
        updateField("skills", newSkills);
    };

    const removeSkill = (index) => {
        const newSkills = data.skills.filter((_, i) => i !== index);
        updateField("skills", newSkills);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Your Skills</h2>
            {data.skills.map((value, index) => (
                <div key={index} className="flex gap-2 mb-2">
                    <input
                        type="text"
                        placeholder={`Skill ${index + 1}`}
                        value={value}
                        onChange={(event) => updateSkill(index, event.target.value)}
                        className="border p-2 w-full rounded"
                    />
                    <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="bg-red-500 text-white px-3 rounded"
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={addSkill}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                + Add Skill
            </button>
        </div>
    );
}

export default SkillsForm;
