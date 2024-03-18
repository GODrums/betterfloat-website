"use client"
import { CSFloatSettings } from "@/types/bf-settings";
import { SettingsCard } from "./settings/SettingsCard";
import { SettingsCheckbox } from "./settings/SettingsCheckbox";
import { IcOutlineDiscount, PhSticker } from "./icons";
import { ScrollArea } from "./ui/scroll-area";
import { SettingsSelect } from "./settings/SettingsSelect";

export function OnboardingSettings(props: CSFloatSettings) {
    return (
        <ScrollArea className="max-w-lg px-2">
            <div className="w-full flex flex-col pr-2 gap-4">
                <SettingsCard className="w-full">
                    <SettingsCheckbox
                        id="csf-stickerprices" text="Sticker Prices" icon={<PhSticker className="h-8 w-8" />} />
                    <p className="text-muted-foreground text-sm">Calculate sticker prices (% SP) using Buff prices and color the result accordingly. <br /> Formula: (itemPrice - Buffprice) / sumOfStickerPrices</p>
                </SettingsCard>
                <SettingsCard className="w-full">
                    <SettingsSelect id="csf-pricereference" text="Buff Price Reference" options={["Bid", "Ask"]} />
                    <p className="text-muted-foreground text-sm">Determines the primary Buff price used as reference value for difference calculations. <br /> Bid: Highest Buy Order ⬌ Ask: Lowest Listing </p>
                </SettingsCard>
                <SettingsCard className="w-full">
                    <SettingsCheckbox
                        id="csf-buffdifference" text="Show Buff Price Difference" icon={<IcOutlineDiscount className="h-8 w-8" />} initialValue={props.buffDifference} />
                    <p className="text-muted-foreground text-sm">Replace the original steam discount tag with a discount tag calculating the absolute price difference towards the selected Buff reference price.</p>
                </SettingsCard>
            </div>
        </ScrollArea>
    );
}