function AboutForm({ data, updateField }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">About You</h2>
            <textarea
                placeholder="Write about yourself"
                value={data.about}
                onChange={(event) => updateField("about", event.target.value)}
                className="border p-2 w-full h-32 rounded"
            />
        </div>
    );
}
export default AboutForm;
