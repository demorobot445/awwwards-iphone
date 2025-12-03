import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      id="contact"
      className="contact z-20 flex h-full min-h-screen w-full items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-6 rounded-md bg-[#0f0f0f] p-8"
      >
        <div className="text-center">
          <h1 className="mb-2 font-sans text-3xl font-extrabold text-white">
            Create your app
          </h1>
          <p className="text-sm text-gray-400">
            Let&aspos;s get started building your world
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">First Name</label>
          <input
            type="text"
            name="name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-md border border-[#2a2a2a] bg-[#1c1c1c] p-3 text-white focus:ring-2 focus:ring-white focus:outline-none"
            placeholder="First Name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">Last Name</label>
          <input
            type="text"
            name="name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-md border border-[#2a2a2a] bg-[#1c1c1c] p-3 text-white focus:ring-2 focus:ring-white focus:outline-none"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-[#2a2a2a] bg-[#1c1c1c] p-3 text-white focus:ring-2 focus:ring-white focus:outline-none"
            placeholder="Email"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-white py-3 text-black transition hover:bg-gray-200"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
