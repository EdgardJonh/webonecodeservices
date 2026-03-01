export default function TrustBar({ stats }: { stats: { value: string; label: string }[] }) {
    return (
        <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-slate-900 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}