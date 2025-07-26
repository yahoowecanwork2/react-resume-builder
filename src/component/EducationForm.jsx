function EducationForm({ data, updateField }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <textarea
                placeholder="Write your education details...."
                value={data.education}
                onChange={(event) => updateField("education", event.target.value)}
                className="border p-2 w-full h-32 rounded"
            />
        </div>
    );
}
export default EducationForm;
