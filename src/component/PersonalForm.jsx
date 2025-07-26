function PersonalForm({ data, updateField }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>

            <input
                type="text"
                placeholder="Your Name"
                value={data.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="border p-2 w-full mb-3 rounded"
            />

            <input
                type="email"
                placeholder="Your Email"
                value={data.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="border p-2 w-full mb-3 rounded"
            />

            <input
                type="text"
                placeholder="Your Phone"
                value={data.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="border p-2 w-full rounded"
            />
        </div>
    );
}
export default PersonalForm;