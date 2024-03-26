"use client"
import { CSFloatSettings } from "@/types/bf-settings";
import { SettingsCard } from "./settings/SettingsCard";
import { SettingsCheckbox } from "./settings/SettingsCheckbox";
import { IcOutlineDiscount, IcRoundAccessTime, MaterialSymbolsAvgTimeOutlineRounded, MaterialSymbolsUpdate, MdiChevronUp, OpenmojiGemStone, PhSticker, StreamlineDiscountPercentCoupon } from "./icons";
import { ScrollArea } from "./ui/scroll-area";
import { SettingsSelect } from "./settings/SettingsSelect";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { AutoRefresh } from "./settings/AutoRefresh";

type ItemSettingsProps = {
    settings: CSFloatSettings;
    page: number;
}

export function ItemSettings(props: ItemSettingsProps) {
    return (
        <>
            {props.page === 1 && (
                <ScrollArea className="max-w-lg max-h-[500px] px-2">
                    <div className="w-full flex flex-col pr-2 gap-4">
                        <SettingsCard className="w-full">
                            <SettingsCheckbox
                                id="csf-stickerprices" text="Sticker Prices" icon={<PhSticker className="size-8" />} />
                            <p className="text-muted-foreground text-sm">Recalculate sticker prices (% SP) using Buff prices and color the result accordingly. <br /> Formula: (itemPrice - Buffprice) / sumOfStickerPrices</p>
                        </SettingsCard>
                        <SettingsCard className="w-full">
                            <SettingsCheckbox
                                id="csf-buffdifference" text="Show Buff Price Difference" icon={<IcOutlineDiscount className="size-8" />} />
                            <p className="text-muted-foreground text-sm">Replace the original steam discount tag with a discount tag calculating the absolute price difference towards the selected Buff reference price.</p>
                            {props.settings["csf-buffdifference"] &&
                                <div className="flex flex-col gap-1 px-2">
                                    <SettingsSelect id="csf-pricereference" text="Buff Price Reference" options={["Bid", "Ask"]} />
                                    <p className="text-muted-foreground text-sm pb-3">Determines the primary Buff price used as reference value for difference calculations. <br /> Bid: Highest Buy Order ⬌ Ask: Lowest Listing </p>
                                    <SettingsCheckbox id="csf-buffdifferencepercent" text="Add Difference in Percentage" icon={<StreamlineDiscountPercentCoupon className="size-6" />} />
                                    <p className="text-muted-foreground text-sm">Requires &apos;Show Buff Price Difference&apos; to be activated. Display the ratio of an item&apos;s price to the Buff price in percentage. Price equality equates to 100%.</p>
                                </div>
                            }
                        </SettingsCard>
                        <SettingsCard className="w-full">
                            <SettingsCheckbox
                                id="csf-listingage" text="Show Listing Age" icon={<IcRoundAccessTime className="size-8" />} />
                            <p className="text-muted-foreground text-sm">Replace the original steam discount tag with a discount tag calculating the absolute price difference towards the selected Buff reference price.</p>
                        </SettingsCard>
                        <SettingsCard className="w-full">
                            <SettingsCheckbox
                                id="csf-floatcoloring" text="Low/High Float Coloring" />
                            <p className="text-muted-foreground text-sm">Low and high floats in respect to each condition will get colored. 0.000X and 0.999X floats get the most prominent coloring.</p>
                        </SettingsCard>
                    </div>
                </ScrollArea>
            )}
            {props.page === 2 && (
                <div className="max-w-lg max-h-[500px] flex flex-col justify-center items-center pr-2 gap-4">
                    <SettingsCard className="w-full">
                        <SettingsCheckbox
                            id="csf-csbluegem" text="CSBlueGem Integration" icon={<OpenmojiGemStone className="size-8" />} />
                        <p className="text-muted-foreground text-sm">Adds blue percentages to the item previews of case hardened skins. Item pages will be further enhanced with past sales of the specific patterns. Data powered by CSBlueGem.com.</p>
                    </SettingsCard>
                </div>
            )}
            {props.page === 3 && (
                <div className="max-w-3xl max-h-[500px] grid place-items-center gap-4" style={{ gridTemplateColumns: '25% 1fr'}}>
                    <AutoRefresh rInterval={props.settings["csf-refreshinterval"]} />
                    <SettingsCard className="w-full">
                        <SettingsCheckbox
                            id="csf-autorefresh" text="Auto-Refresh" icon={<MaterialSymbolsUpdate className="size-8" />} />
                        <p className="text-muted-foreground text-sm">Adds an auto-refresh menu to the top bar when market is sorted after &apos;Newest&apos;. You can manually enable or disable the refreshing on the page itself.</p>
                        {props.settings["csf-autorefresh"] &&
                            <div className="flex flex-col gap-1 px-2">
                                <SettingsSelect id="csf-refreshinterval" text="Auto-Refresh Interval" options={["30s", "60s", "2min", "5min"]} icon={<MaterialSymbolsAvgTimeOutlineRounded className="size-6" />} />
                                <p className="text-muted-foreground text-sm">The default interval to refresh the listings when enabled. Can also be adjusted accordingly in the inline-menu.</p>
                            </div>
                        }
                    </SettingsCard>
                    <Button className="rounded-full cursor-pointer" variant="secondary" size="icon">
                        <MdiChevronUp className="size-10" />
                    </Button>
                    <SettingsCard className="w-full">
                        <SettingsCheckbox
                            id="csf-topbutton" text="Show 'Back to Top'-Button" icon={<MdiChevronUp className="h-6 w-6 bg-neutral-800 rounded-full" />} />
                        <p className="text-muted-foreground text-sm">Adds a small button to the bottom right of the page, which instantly transports you back to the top of the page. Useful when scrolling through listings a lot.</p>
                    </SettingsCard>
                </div>
            )}
        </>

    );
}