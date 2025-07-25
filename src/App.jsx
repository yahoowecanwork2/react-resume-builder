export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Resume Builder
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your email"
            />
          </div>

          {/* More fields like phone, education, experience, etc. can go here */}

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Generate Resume
          </button>
        </form>
      </div>
    </div>
  );
}
