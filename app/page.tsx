export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* Nav minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center text-white text-xs font-bold">H</div>
            HousePlanner
          </div>
          <a
            href="#waitlist"
            className="text-sm font-semibold px-4 py-2 rounded bg-green-500 hover:bg-green-400 transition-colors text-white"
          >
            Lista d&apos;attesa
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-400 mb-6">
            Coming soon
          </span>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white mb-6 text-balance leading-tight">
            La ristrutturazione della tua casa,{' '}
            <span className="text-green-400">sotto controllo</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
            HousePlanner è la piattaforma che connette proprietari di casa e imprese edili in un unico spazio digitale. Documenti, cantieri, costi, timeline e comunicazione — tutto in un posto solo.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 transition-colors text-white font-semibold text-sm"
          >
            Entra in lista d&apos;attesa
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4">Funzionalità</p>
          <h2 className="text-3xl font-semibold text-white mb-16 max-w-xl">
            Tutto quello che serve per una ristrutturazione senza stress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🏗️',
                title: 'Gestione cantieri',
                desc: 'Tieni traccia di ogni progetto con stato di avanzamento in tempo reale. Sai sempre a che punto sono i lavori.',
              },
              {
                icon: '📁',
                title: 'Documenti centralizzati',
                desc: 'Planimetrie, contratti, rogito, mutuo, test radon — tutto caricato e organizzato in un unico posto sicuro.',
              },
              {
                icon: '💬',
                title: 'Chat con notifiche',
                desc: 'Comunica direttamente con la tua impresa edile. Notifiche in tempo reale, nessun messaggio perso.',
              },
              {
                icon: '💰',
                title: 'Budget e costi',
                desc: 'Inserisci il budget totale e tieni traccia di ogni spesa. I costi dei lavori vengono scalati automaticamente.',
              },
              {
                icon: '📄',
                title: 'Preventivi e fatture',
                desc: 'Genera preventivi e fatture PDF direttamente dalla piattaforma. IVA svizzera inclusa.',
              },
              {
                icon: '📅',
                title: 'Timeline dei lavori',
                desc: 'Visualizza la pianificazione di tutti i lavori in una timeline chiara. Nessuna sorpresa sulle date.',
              },
              {
                icon: '🧱',
                title: 'Materiali e forniture',
                desc: 'Aggiungi materiali con prezzo al kg, al pezzo o per unità. Calcolo automatico del totale d\'acquisto.',
              },
              {
                icon: '🏠',
                title: 'Piantina interattiva',
                desc: 'Carica il progetto della tua casa arredata e visualizzala direttamente nella piattaforma.',
              },
              {
                icon: '👥',
                title: 'Gestione team',
                desc: 'Le imprese edili possono gestire il proprio team con ruoli e permessi personalizzati per ogni dipendente.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per chi è */}
      <section className="py-24 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4">Per chi è</p>
          <h2 className="text-3xl font-semibold text-white mb-16 max-w-xl">
            Pensato per chi ristruttura e per chi costruisce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
              <div className="text-3xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Privati</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Stai ristrutturando casa? Tieni tutto sotto controllo senza dover rincorrere l&apos;impresa. Vedi i costi, i documenti e l&apos;avanzamento dei lavori in tempo reale dal tuo smartphone.
              </p>
              <ul className="space-y-2 text-sm text-neutral-400">
                {['Accesso al tuo cantiere personale', 'Visualizza costi e fatture', 'Documenti sempre a portata di mano', 'Chat diretta con l\'impresa'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-white mb-3">Imprese edili</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Gestisci tutti i tuoi cantieri, clienti e dipendenti in un&apos;unica piattaforma. Elimina fogli Excel e WhatsApp dalla tua operatività quotidiana.
              </p>
              <ul className="space-y-2 text-sm text-neutral-400">
                {['Gestione multi-cantiere', 'Team con ruoli e permessi', 'Preventivi e fatture PDF', 'Gestione materiali e fornitori'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 px-6 border-t border-neutral-800">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4">Lista d&apos;attesa</p>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Sii tra i primi a provarlo
          </h2>
          <p className="text-neutral-400 mb-10 leading-relaxed">
            HousePlanner è in sviluppo. Lascia la tua email per essere avvisato al lancio e ottenere accesso anticipato con condizioni esclusive.
          </p>
          <form
            action="https://formspree.io/f/xljeolnb"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-green-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 transition-colors text-white font-semibold text-sm whitespace-nowrap"
            >
              Iscriviti
            </button>
          </form>
          <p className="text-xs text-neutral-600 mt-4">Nessuno spam. Puoi cancellarti in qualsiasi momento.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-neutral-400">
            <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center text-white text-xs font-bold">H</div>
            HousePlanner
          </div>
          <p className="text-xs text-neutral-600">
            Un prodotto{' '}
            <a href="https://helvexa-group.ch" className="text-neutral-400 hover:text-white transition-colors">
              Helvexa
            </a>
          </p>
        </div>
      </footer>

    </main>
  )
}