import Link from "next/link";
import Image from "next/image"
import { siteConfig } from "@/config/site"
import GetChrome from "@/lib/assets/get-chrome.png"
import GetFirefox from "@/lib/assets/get-firefox.png"
import { LogosBrave, LogosChrome, LogosFirefox, LogosMicrosoftEdge, LogosOpera } from "@/components/icons";
import { Button } from "./ui/button";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

export function BrowserChoice() {
    const [browser, setBrowser] = useState<number | undefined>(undefined);

    const browsers = [
        {
            content: <LogosChrome className="size-10" />,
            key: "chrome"
        },
        {
            content: <LogosFirefox className="size-10" />,
            key: "firefox"
        },
        {
            content: <LogosOpera className="size-10" />,
            key: "opera"
        },
        {
            content: <LogosMicrosoftEdge className="size-10" />,
            key: "edge"
        },
        {
            content: <LogosBrave className="size-10" />,
            key: "brave"
        },
    ]

    return (
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter text-muted-foreground">
                Which <span className="text-red-500">Browser</span> do you use?
            </h1>
            <div className="flex justify-center items-center gap-4">
                {browsers.map((browserSingle, index) => (
                    <Button
                        variant="ghost"
                        size="iconLarge"
                        onClick={() => setBrowser(index)}
                        className={browser === index ? "ring-2 ring-offset-1 ring-red-500" : ""}
                        key={browserSingle.key}
                    >
                        {browserSingle.content}
                    </Button>
                ))
                }
                <Button
                    variant="outline"
                    onClick={() => setBrowser(5)}
                    className={browser === 5 ? "border-red-500" : ""}
                >
                    Other
                </Button>
            </div>
            <div className="flex justify-center items-center gap-4">
                {browser === undefined ? (
                    <p className="text-muted-foreground">Please select your browser</p>
                ) : (browser === 1) ? (
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
                ) : (browser < 5) ? (
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
                ) : (
                    <Card>
                        <CardContent>
                            <p className="text-muted-foreground">Please consult <a href="https://letmegooglethat.com/?q=How+to+download+Chrome" className="text-sky-400">Google</a> or find a compatible version.</p>
                        </CardContent>
                    </Card>
                )}
            </div>
            <div className="flex justify-center items-center gap-4">
                <p className="text-muted-foreground">After installing the extension, come back to continue the guide through the settings.</p>
            </div>
        </div>
    )
}