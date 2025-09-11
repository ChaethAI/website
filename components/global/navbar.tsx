import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/global/logo"

export default function Navbar() {
  return (
    <header className="w-full absolute top-0 left-0 z-20 text-white">
      <div className="w-full px-5 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Middle: Nav buttons */}
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-white" asChild>
            <Link href="#features">Features</Link>
          </Button>
          <Button variant="ghost" className="text-white" asChild>
            <Link href="https://demo.chaeth.com" target="_blank" rel="noopener noreferrer">Chat</Link>
          </Button>
          <Button variant="ghost" className="text-white" asChild>
            <Link href="#hosting">Hosting</Link>
          </Button>
        </nav>

        {/* Right: Demo */}
        <div>
          <Button variant="primary" size="lg" asChild>
            <Link href="https://demo.chaeth.com" target="_blank" rel="noopener noreferrer">Try Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
