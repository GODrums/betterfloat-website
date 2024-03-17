"use client"
import { CSFloatSettings } from "@/types/bf-settings";
import { SettingsCard } from "./settings/SettingsCard";
import { SettingsCheckbox } from "./settings/SettingsCheckbox";
import { PhSticker } from "./icons";
import { ScrollArea } from "./ui/scroll-area";

export function OnboardingSettings(props: CSFloatSettings) {
    return (
        <ScrollArea className="max-w-lg px-2">
            <div className="w-full flex flex-col pr-2">
                <SettingsCard className="w-full">
                    <SettingsCheckbox
                        id="csf-stickerprices" text="Sticker Prices" icon={<PhSticker className="h-8 w-8" />} />
                    <p className="text-muted-foreground text-sm">Calculate sticker prices (% SP) using Buff prices and color the result accordingly. <br/> Formula: (itemPrice - Buffprice) / sumOfStickerPrices</p>
                </SettingsCard>

            </div>
        </ScrollArea>
    );
}