const builds = [
  {
    number: 1,
    name: "Build 100 Startups",
    type: "Directory Site",
    status: "Live",
    description: "The site you're on right now. Documenting the journey of building 100 online products.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">Build 100 Startups</span>
          <nav className="flex gap-6 text-sm text-gray-400">
            <a href="#builds" className="hover:text-white transition-colors">Builds</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-4">The Journey</p>
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Building 100 Online Products
          <br />
          <span className="text-gray-400">In Public</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
          SaaS tools, AI agents, directories, stores — one build at a time.
          Every product documented from idea to launch.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#builds" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            See All Builds
          </a>
          <a href="#about" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
            About This Project
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">1</p>
            <p className="text-gray-400 text-sm mt-1">Builds Launched</p>
          </div>
          <div>
            <p className="text-4xl font-bold">99</p>
            <p className="text-gray-400 text-sm mt-1">To Go</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1%</p>
            <p className="text-gray-400 text-sm mt-1">Complete</p>
          </div>
        </div>
      </section>

      {/* Builds */}
      <section id="builds" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-8">All Builds</h2>
        <div className="grid gap-4">
          {builds.map((build) => (
            <div key={build.number} className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors bg-gray-900">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-gray-700">#{build.number.toString().padStart(2, "0")}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{build.name}</h3>
                      <span className="text-xs bg-indigo-900 text-indigo-300 px-2 py-0.5 rounded-full">{build.type}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{build.description}</p>
                  </div>
                </div>
                <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full whitespace-nowrap">{build.status}</span>
              </div>
            </div>
          ))}

          {/* Placeholder cards for upcoming builds */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border border-dashed border-gray-800 rounded-xl p-6 opacity-40">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-700">#{(i + 2).toString().padStart(2, "0")}</span>
                <div className="h-4 bg-gray-800 rounded w-48" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Build 100 Startups is a personal challenge to build and launch 100 different online products —
            SaaS tools, AI agents, directory websites, online stores, and more.
            Every build is documented publicly: what was built, how long it took, what worked, and what didn&apos;t.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-6">
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
          Build 100 Startups — building in public
        </div>
      </footer>
    </main>
  );
}
