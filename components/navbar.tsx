import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/global/typography"
import Logo from "@/components/logo"

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
            <Link href="#chat">Chat</Link>
          </Button>
          <Button variant="ghost" className="text-white" asChild>
            <Link href="#hosting">Hosting</Link>
          </Button>
        </nav>

        {/* Right: Demo */}
        <div>
          <Button variant="primary" size="lg" asChild>
            <Link href="demo.chaeth.com">Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
