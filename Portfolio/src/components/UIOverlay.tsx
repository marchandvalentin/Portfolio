export default function UIOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 relative grid content-center gap-6 px-12 py-12 text-[#f7f2ea] max-sm:px-8 max-sm:py-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(11,12,18,0.6)_0%,_rgba(11,12,18,0.1)_60%,_rgba(11,12,18,0)_100%)]" />
      <header className="relative grid max-w-[520px] gap-3">
        <p className="text-[0.9rem] uppercase tracking-[0.3em] text-[#f4d58d]">
          Portfolio
        </p>
        <h1 className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
          React Three Fiber Demo
        </h1>
        <p className="text-[1.1rem] text-[#e5e1db]">
          Regular React UI layered on top of the 3D scene.
        </p>
      </header>
      <div className="relative pointer-events-auto flex gap-4 max-sm:flex-col max-sm:items-start">
        <button
          className="rounded-full bg-[#f4d58d] px-6 py-3 text-[0.95rem] text-[#1d1b16]"
          type="button"
        >
          Contact
        </button>
        <button
          className="rounded-full border border-[rgba(247,242,234,0.6)] px-6 py-3 text-[0.95rem] text-[#f7f2ea]"
          type="button"
        >
          Projects
        </button>
      </div>
    </div>
  )
}
