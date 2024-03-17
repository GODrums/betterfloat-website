import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import BFWindow from "@/lib/assets/betterfloat_window.png"
import GetChrome from "@/lib/assets/get-chrome.png"
import GetFirefox from "@/lib/assets/get-firefox.png"
import { cn } from "@/lib/utils"
import { FeatureGrid } from "@/components/FeatureGrid"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Your Personal CS2 Shopping Assistant.</span>
        </h1>
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl text-blue-500 mb-4">BetterFloat.</h1>
        <Link
          href='/onboarding'
          rel="noreferrer"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-semibold text-xl text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Get Started
        </Link>
      </div>
      <div className="flex justify-center">
        <Image
          src={BFWindow}
          width={900}
          alt="BetterFloat Hero"
        />
      </div>
      <div className="flex justify-center gap-4">
        <Link
          href={siteConfig.links.chrome}
          target="_blank"
          rel="rums.dev"
        >
          <Image
            src={GetChrome}
            height={75}
            alt="Chrome Web Store"
          />
        </Link>
        <Link
          target="_blank"
          rel="rums.dev"
          href={siteConfig.links.firefox}
        >
          <Image
            src={GetFirefox}
            height={75}
            alt="Firefox Addons"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2 mt-32">
        <h1 className="text-3xl text-stone-300 font-extrabold leading-tight tracking-tighter md:text-4xl">
          <span className="text-blue-600">Personalize</span> it just the way you like it.
        </h1>
      </div>
    </section>
  )
}
