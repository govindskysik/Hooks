import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { title: "Background Changer", path: "/bg-changer" },
  { title: "Password Generator", path: "/pass-generator" },
  { title: "Currency Convertor", path: "/currency-convertor" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen w-full overflow-hidden px-6 py-8 md:px-10 md:py-10 flex flex-col">
      <header className="shrink-0 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hooks</h1>
        <p className="mt-3 text-emerald-200">Choose a mini project to open</p>
      </header>

      <section className="flex-1 min-h-0 grid place-items-center">
        <div className="w-full h-full p-8 items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <button
              key={project.path}
              type="button"
              onClick={() => navigate(project.path)}
              className="relative h-1/2 rounded-xs bg-emerald-900/90 shadow-lg px-6 py-5 text-left transition-transform duration-300 hover:scale-[0.98] flex items-center"
            >
              <h2 className="absolute bottom-2 right-5 mt-8 text-3xl flex items-center gap-2 font-semibold text-emerald-50">
                <span className="inline-block h-3 w-3 rounded-xs bg-emerald-100" />{" "}
                {project.title}
              </h2>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
