function SkillsForm({ data, updateField }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Your Skills</h2>
            <input type="text"
                placeholder="e.g. HTML, CSS, JavaScript"
                value={data.about}
                onChange={(event) => updateField("about", event.target.value)}
                className="border p-2 w-full h-32 rounded"
            />
            <p className="text-gray-500 text-sm mt-2">  Separate multiple skills with commas.</p>
        </div>
    );
}
export default SkillsForm;
