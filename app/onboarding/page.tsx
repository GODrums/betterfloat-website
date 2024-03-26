"use client"

import { Button } from "@/components/ui/button"
import { ItemSettings } from "@/components/ItemSettings"
import { useRecoilValue } from "recoil";
import { settingState } from "../recoilContextProvider";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { CSFNightwish } from "@/components/csf-nightwish";
import { CSFM9CH } from "@/components/csf-m9ch";
import { BrowserChoice } from "@/components/BrowserChoice";
import CSFloat from "@/lib/assets/csfloat.png"
import Image from "next/image";
import { DonePage } from "@/components/DonePage";

export default function OnboardingPage() {
  const settings = useRecoilValue(settingState);
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(20);
  const [exportError, setExportError] = useState(0);

  const extensionId = "bphfhlfhnohppnleaehnlfigkkccpglk";

  const exportSettings = () => {
    chrome.runtime.sendMessage(extensionId, {newSettings: settings},
      function(response) {
        if (response.success) {
          setExportError(0);
        } else {
          setExportError(1);
        }
      });
  }

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  useEffect(() => {
    setProgress((page + 1) * 20);
  }, [page]);

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
        <div className="flex justify-center gap-4 mt-4">
          <Button
            variant="secondary"
          >
            How to use
          </Button>
          <Button
            variant="outline"
          >
            Export Settings
          </Button>
        </div>
        <div className="flex justify-center">
          <Progress value={progress} className="w-[60%]" />
        </div>
        {page === 0 && (
          <BrowserChoice />
        )}
        {(page === 1 || page === 2) && (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter items-center inline-flex gap-2">
              Customize <span className="text-gray-700 inline-flex items-center gap-2">CSFloat
                <Image
                  src={CSFloat}
                  width={64}
                  alt="CSFloat Logo" /> </span> listings to your liking.
            </h1>
            <div className="flex justify-around gap-4">
              <div className="flex flex-col justify-center">
                {page === 1 ? (
                  <CSFNightwish {...settings} />
                ) : (
                  <CSFM9CH {...settings} />
                )}
              </div>
              <ItemSettings settings={settings} page={page} />
            </div>
          </div>
        )}
        {page === 3 && (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter items-center inline-flex gap-2">
              Complement <span className="text-gray-700 inline-flex items-center gap-2">CSFloat
                <Image src={CSFloat} width={64} alt="CSFloat Logo" /> </span> with more features.
            </h1>
            <div className="flex justify-around gap-4">
              <ItemSettings settings={settings} page={page} />
            </div>
          </div>
        )}
        {page === 4 && (
          <DonePage setPage={setPage} exportSettings={exportSettings}/>
        )}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button
            variant="ghost"
          >
            {page + 1} / 5
          </Button>
          <Button
            variant="default"
            disabled={page === 4}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}
