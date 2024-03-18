import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { NavItem } from "@/types/nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import BetterFloatLogo from "@/lib/assets/icon.png"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  // const items = siteConfig.mainNav as NavItem[]
  const items = [] as NavItem[]
  return (
    <header className="backdrop-blur-sm sticky top-0 z-40 w-full">
      <div className="container h-16 flex items-center justify-between space-x-4 sm:space-x-0">
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={BetterFloatLogo}
            width={32}
            height={32}
            alt="BetterFloat Icon"
          />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        {items?.length ? (
          <nav className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
