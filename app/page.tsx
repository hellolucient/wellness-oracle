import Link from "next/link"

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <div className="mb-12">
          <h1 className="text-5xl font-light mb-6">Wellness Oracle</h1>
          <p className="text-xl text-[#2d3142]/80 max-w-2xl">
            Discover personalized wellness recommendations tailored to your unique needs
          </p>
        </div>

        <Link href="/pillars" className="relative w-64 h-64 mb-12 cursor-pointer group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e8ddd3] to-[#d1c3b6] group-hover:from-[#d1c3b6] group-hover:to-[#e8ddd3] transition-colors duration-300"></div>
          <div className="absolute inset-4 rounded-full bg-[#f8f5f2] flex items-center justify-center">
            <span className="text-2xl font-light">Begin</span>
          </div>
        </Link>
      </div>

      <footer className="absolute bottom-6 text-sm text-[#2d3142]/60">
        Touch to begin your personalized wellness experience
      </footer>
    </div>
  )
}
