import { useState } from "react";

type Technology = {
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge: string;
  icon: string;
};
const technologies: Technology[] = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Popular",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.simpleicons.org/vuedotjs",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Versatile",
  },
  {
    name: "Svelte",
    icon: "https://cdn.simpleicons.org/svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Fast",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs",
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    badge: "",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Standard",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Top SQL",
  },
  {
    name: "Redis",
    icon: "https://cdn.simpleicons.org/redis",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    badge: "Cache",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Ubiquitous",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    badge: "Essential",
  },
  {
    name: "Java",
    icon: "https://cdn.simpleicons.org/openjdk",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
    badge: "Robust",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Modern",
  },
  {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
    badge: "Containers",
  },
];

function Technologies() {
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  const addToStack = (name: string) => {
    if (!selectedStack.includes(name)) {
      setSelectedStack([...selectedStack, name]);
    }
  };

  const removeFromStack = (name: string) => {
    setSelectedStack(selectedStack.filter((item) => item !== name));
  };

  const removeAll = () => {
    setSelectedStack([]);
  };

  return (
    <section className="border-t border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore the{" "}
            <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_260px]">

          {/* Technology Cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex min-h-[245px] flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <img src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="h-8 w-8 object-contain"
                  />

                  {tech.badge && (
                    <span className="rounded-full bg-pink-50 px-3 py-1 text-[10px] font-medium text-pink-500">
                      {tech.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {tech.name}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-5 text-slate-400">
                  {tech.description}
                </p>

                {/* Info */}
                <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="rounded bg-gray-50 px-2 py-1">
                    {tech.category}
                  </span>

                  <span>{tech.level}</span>

                  <span className="text-sm">
                    <span className="text-yellow-400">★</span>{" "}
                    <span className="text-gray-900">{tech.rating}</span>
                    </span>
                </div>

                {/* Add Button */}
                <button
                  onClick={() => addToStack(tech.name)}
                  disabled={selectedStack.includes(tech.name)}
                  className="mt-3 w-full rounded-md bg-gray-900 py-2 text-xs font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {selectedStack.includes(tech.name)
                    ? "Added to Stack"
                    : "Add to Stack"}
                </button>
              </div>
            ))}
          </div>

          {/* Your Stack */}
<div className="h-fit rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
  <h3 className="text-lg font-bold text-gray-900">
    Your Stack
  </h3>

  <p className="mt-1 text-sm text-slate-400">
    {selectedStack.length === 0
      ? "No technologies selected yet."
      : `${selectedStack.length} Technology${
          selectedStack.length > 1 ? "s" : ""
        } Selected`}
  </p>

  {/* Stack Items / Empty State */}
  {selectedStack.length === 0 ? (
    <div className="mt-5 flex h-[74px] items-center justify-center rounded-xl border border-dashed border-gray-200">
      <p className="text-sm text-slate-400">
        Your stack is empty.
      </p>
    </div>
  ) : (
    <div className="mt-5 space-y-2">
      {selectedStack.map((item) => {
        const technology = technologies.find(
          (tech) => tech.name === item
        );

        return (
          <div
            key={item}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              {/* Technology Icon */}
              <img
                src={technology?.icon}
                alt={`${item} logo`}
                className="h-8 w-8 object-contain"
              />

              {/* Technology Name */}
              <div>
                <p className="text-xs font-bold text-gray-900">
                  {item}
                </p>

                <p className="text-[9px] text-slate-400">
                  {technology?.category}
                </p>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromStack(item)}
              className="text-2xl font-light text-slate-400 transition hover:text-red-400"
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  )}

  {/* Remove All */}
  {selectedStack.length > 0 && (
  <button
    onClick={removeAll}
    className="mt-5 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
    >
    Remove All
    </button>
    )}
    </div>

        </div>
      </div>
    </section>
  );
}

export default Technologies;