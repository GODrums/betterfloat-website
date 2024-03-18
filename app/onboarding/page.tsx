"use client"

import { Button } from "@/components/ui/button"
import { CSFloatItem } from "@/components/CSFloatItem"
import { OnboardingSettings } from "@/components/OnbordingSettings"
import { useRecoilValue } from "recoil";
import { settingState } from "../recoilContextProvider";
import { useEffect } from "react";

export default function OnboardingPage() {
  const settings = useRecoilValue(settingState);

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Make <span className="text-blue-600">BetterFloat</span> your own.
        </h1>
        <p className="text-lg text-muted-foreground">
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
          <div className="flex flex-col justify-center">
            <CSFloatItem {...settings} />
          </div>
          <OnboardingSettings {...settings} />
        </div>
      </div>
    </section>
  )
}
