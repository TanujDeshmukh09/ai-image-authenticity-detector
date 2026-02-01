export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 md:px-24 py-20 bg-background">

      {/* PAGE TITLE */}
      <h1 className="text-5xl md:text-6xl font-bold mb-16">
        About the Creator
      </h1>

      {/* ===== BOX 1 : ABOUT CREATOR ===== */}
      <div
        className="
          max-w-5xl 
          mx-auto
          rounded-3xl 
          p-10 md:p-14
          shadow-2xl 
          bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950
          border border-zinc-800
          relative
          overflow-hidden
          mb-24
        "
      >
        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <p className="text-3xl font-semibold text-orange-400">
            Tanuj Deshmukh
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            I am a Computer Science student passionate about artificial intelligence,
            image forensics, and building real-world systems that address modern
            digital trust and misinformation challenges.
          </p>

          <p className="text-zinc-400 text-base">
            This project focuses on understanding images beyond visual appearance
            by analyzing frequency patterns, texture consistency, and noise
            signatures to determine authenticity.
          </p>
        </div>
      </div>

      {/* ===== BOX 2 : CONNECT WITH ME ===== */}
      <div
        className="
          max-w-4xl 
          mx-auto
          rounded-3xl 
          p-10 md:p-14
          shadow-2xl 
          bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950
          border border-zinc-800
          relative
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Connect with Me
          </h2>

          <div className="space-y-6 text-lg text-zinc-200">
            <div className="flex items-center gap-4">
              <span className="text-orange-400">📧</span>
              <span>Email:</span>
              <a
                href="mailto:deshmukhtanuj25@gmail.com"
                className="text-orange-400 hover:underline"
              >
                deshmukhtanuj25@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-orange-400">🐙</span>
              <span>GitHub:</span>
              <a
                href="https://github.com/TanujDeshmukh09"
                target="_blank"
                className="text-orange-400 hover:underline"
              >
                github.com/TanujDeshmukh09
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-orange-400">📸</span>
              <span>Instagram:</span>
              <a
                href="https://www.instagram.com/tanujdeshmukh2"
                target="_blank"
                className="text-orange-400 hover:underline"
              >
                @tanujdeshmukh2
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
