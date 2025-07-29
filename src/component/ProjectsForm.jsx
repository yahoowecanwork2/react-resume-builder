export default function ProjectsForm({ data, updateField }) {
    const addProject = () => {
        updateField("projects", [
            ...data.projects,
            { title: "", description: "", link: "" }
        ]);
    };

    const updateProject = (index, field, value) => {
        const newProjects = [...data.projects];
        newProjects[index][field] = value;
        updateField("projects", newProjects);
    };

    const removeProject = (index) => {
        const newProjects = data.projects.filter((_, i) => i !== index);
        updateField("projects", newProjects);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Projects</h2>

            {data.projects.map((proj, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={proj.title}
                        onChange={(e) => updateProject(index, "title", e.target.value)}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <textarea
                        placeholder="Project Description"
                        value={proj.description}
                        onChange={(e) => updateProject(index, "description", e.target.value)}
                        className="border p-2 w-full mb-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Project Link (optional)"
                        value={proj.link}
                        onChange={(e) => updateProject(index, "link", e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                    <button
                        type="button"
                        onClick={() => removeProject(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={addProject}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                + Add Project
            </button>
        </div>
    );
}
