import { Button } from "@/components/ui/button"
import { CSFloatItem } from "@/components/CSFloatItem"
import { OnboardingSettings } from "@/components/OnbordingSettings"

export default function OnboardingPage() {
  

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Make <span className="text-blue-600">BetterFloat</span> your own.
        </h1>
        <p className="max-w-[800px] text-lg text-muted-foreground">
          We guide you through all the settings and features to make BetterFloat your best experience.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center gap-4 mt-12">
          <Button
            className=""
            variant="secondary"
          >
            How to use
          </Button>
          <Button
            className=""
            variant="outline"
          >
            Import Settings
          </Button>
          <Button
            className=""
            variant="outline"
          >
            Export Settings
          </Button>
        </div>
        <div className="flex justify-around gap-4">
          <CSFloatItem listingAge={false} spColoring={false} floatColoring={false} buffPrice={false} buffDifference={false} buffDifferencePercent={false} />
          <OnboardingSettings listingAge={false} spColoring={false} floatColoring={false} buffPrice={false} buffDifference={false} buffDifferencePercent={false} />
        </div>
      </div>
    </section>
  )
}
