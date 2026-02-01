export default function HowItWorksPage() {
  return (
    <main className="min-h-screen px-24 py-16 bg-background">

      {/* PAGE TITLE */}
      <h1 className="text-6xl font-bold mb-12">
        How It Works
      </h1>

      {/* HERO EXPLANATION BOX */}
      <div
        className="
          max-w-5xl 
          rounded-2xl 
          p-12 
          shadow-2xl 
          bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950
          border border-zinc-800
          relative
          overflow-hidden
          mb-24
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.08),transparent_60%)] pointer-events-none" />

        <p className="relative z-10 text-xl leading-relaxed text-zinc-200">
          <span className="block text-2xl font-semibold text-white mb-4 tracking-wide">
            Not every image deserves your trust.
          </span>

          This system dissects images at a structural level by analyzing
          <span className="text-orange-400 font-medium"> frequency patterns</span>,
          <span className="text-orange-400 font-medium"> texture consistency</span>, and
          <span className="text-orange-400 font-medium"> noise signatures</span>
          to determine whether content is authentic or artificially generated.

          <span className="block mt-4 text-zinc-400">
            Designed for a world where visual truth matters.
          </span>
        </p>
      </div>

      {/* ANALYSIS PIPELINE STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mb-32">
        <div className="rounded-xl p-8 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            1. Frequency Analysis (FFT)
          </h3>
          <p className="text-zinc-300">
            Detects unnatural frequency patterns introduced by AI generation.
          </p>
        </div>

        <div className="rounded-xl p-8 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            2. Wavelet Decomposition
          </h3>
          <p className="text-zinc-300">
            Examines texture consistency across multiple scales.
          </p>
        </div>

        <div className="rounded-xl p-8 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            3. Noise & Pixel Artifacts
          </h3>
          <p className="text-zinc-300">
            Identifies pixel-level inconsistencies left by generative models.
          </p>
        </div>
      </div>

      {/* DIAGRAM STYLE SECTION */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Inside the Detection Pipeline
          </h2>

          <p className="text-lg text-zinc-700 mb-6">
            The system evaluates images using multiple independent signals rather
            than relying on visual appearance alone.
          </p>

          <p className="text-lg text-zinc-700">
            This layered analysis makes the detector robust against manipulation,
            filtering, and post-processing.
          </p>
        </div>

        {/* RIGHT SIMPLE EXPLANATION */}
        <div className="rounded-2xl p-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl text-zinc-200">
          <div className="space-y-4 text-base">
            <p><b>1.</b> The input image is prepared for analysis.</p>
            <p><b>2.</b> Frequency patterns are analyzed to detect synthetic signals.</p>
            <p><b>3.</b> Texture consistency is examined using wavelet methods.</p>
            <p><b>4.</b> Noise residuals reveal pixel-level irregularities.</p>
            <p><b>5.</b> Extracted signals are fused into a single feature set.</p>
            <p><b>6.</b> A machine learning model evaluates authenticity.</p>

            <div className="pt-4 font-semibold">
              <span className="text-green-400">REAL</span>
              <span className="mx-2 text-white">or</span>
              <span className="text-red-500">AI GENERATED</span>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT CREATOR (SMALL & CLEAN) */}
      <div className="max-w-4xl mb-16 border-t border-zinc-800 pt-8">
        <h3 className="text-2xl font-semibold mb-3 text-orange-400">
          About the Creator
        </h3>

        <p className="text-zinc-300 leading-relaxed">
          This project was built by <span className="text-white font-medium">Tanuj Deshmukh</span>,
          a computer science student passionate about AI, image forensics, and
          building real-world systems that address modern digital trust issues.
        </p>

        <p className="mt-2 text-zinc-400">
          📧 Contact: <span className="text-white">deshmukhtanuj25@gmail.com</span>
        </p>
      </div>

    </main>
  );
}
