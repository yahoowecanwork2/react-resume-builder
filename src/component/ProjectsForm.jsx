function ProjectsForm({ data, updateField }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <textarea
                placeholder="Write about ypor projects details...."
                value={data.projects}
                onChange={(event) => updateField("projects", event.target.value)}
                className="border p-2 w-full h-32 rounded"
            />
        </div>
    );
}
export default ProjectsForm;
