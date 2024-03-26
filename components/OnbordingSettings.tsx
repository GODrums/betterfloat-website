"use client"
import { CSFloatSettings } from "@/types/bf-settings";
import { SettingsCard } from "./settings/SettingsCard";
import { SettingsCheckbox } from "./settings/SettingsCheckbox";
import { IcOutlineDiscount, IcRoundAccessTime, PhSticker, StreamlineDiscountPercentCoupon } from "./icons";
import { ScrollArea } from "./ui/scroll-area";
import { SettingsSelect } from "./settings/SettingsSelect";

export function OnboardingSettings(props: CSFloatSettings) {
    return (
        <ScrollArea className="max-w-lg max-h-[500px] px-2">
            <div className="w-full flex flex-col pr-2 gap-4">
                <SettingsCard className="w-full">
                    <SettingsCheckbox
                        id="csf-stickerprices" text="Sticker Prices" icon={<PhSticker className="h-8 w-8" />} />
                    <p className="text-muted-foreground text-sm">Recalculate sticker prices (% SP) using Buff prices and color the result accordingly. <br /> Formula: (itemPrice - Buffprice) / sumOfStickerPrices</p>
                </SettingsCard>
                <SettingsCard className="w-full">
                    <SettingsCheckbox
                        id="csf-buffdifference" text="Show Buff Price Difference" icon={<IcOutlineDiscount className="h-8 w-8" />} />
                    <p className="text-muted-foreground text-sm">Replace the original steam discount tag with a discount tag calculating the absolute price difference towards the selected Buff reference price.</p>
                    {props["csf-buffdifference"] &&
                        <div className="flex flex-col gap-1 px-2">
                            <SettingsSelect id="csf-pricereference" text="Buff Price Reference" options={["Bid", "Ask"]} />
                            <p className="text-muted-foreground text-sm pb-3">Determines the primary Buff price used as reference value for difference calculations. <br /> Bid: Highest Buy Order ⬌ Ask: Lowest Listing </p>
                            <SettingsCheckbox id="csf-buffdifferencepercent" text="Add Difference in Percentage" icon={<StreamlineDiscountPercentCoupon className="h-6 w-6" />} />
                            <p className="text-muted-foreground text-sm">Requires 'Show Buff Price Difference' to be activated. Display the ratio of an item's price to the Buff price in percentage. Price equality equates to 100%.</p>
                        </div>
                    }
                </SettingsCard>
                <SettingsCard className="w-full">
                    <SettingsCheckbox
                        id="csf-listingage" text="Show Listing Age" icon={<IcRoundAccessTime className="h-8 w-8" />} />
                    <p className="text-muted-foreground text-sm">Replace the original steam discount tag with a discount tag calculating the absolute price difference towards the selected Buff reference price.</p>
                </SettingsCard>
                <SettingsCard className="w-full">
                    <SettingsCheckbox
                        id="csf-floatcoloring" text="Low/High Float Coloring" />
                    <p className="text-muted-foreground text-sm">Low and high floats in respect to each condition will get colored. 0.000X and 0.999X floats get the most prominent coloring.</p>
                </SettingsCard>
            </div>
        </ScrollArea>
    );
}