function ExperianceForm({ data, updateField }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Experiance</h2>
            <textarea
                placeholder="Write Experciance or intership"
                value={data.experience}
                onChange={(event) => updateField("experience", event.target.value)}
                className="border p-2 w-full h-32 rounded"
            />
        </div>
    );
}
export default ExperianceForm;
