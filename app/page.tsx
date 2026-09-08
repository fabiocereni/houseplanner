export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <h1 className="text-4xl font-semibold text-white tracking-tight">
            HousePlanner
          </h1>
        </div>
        <p className="text-neutral-500 text-sm tracking-widest uppercase font-medium">
          Coming soon
        </p>
      </div>
    </main>
  )
}