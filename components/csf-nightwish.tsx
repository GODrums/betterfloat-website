import { CSFloatSettings } from "@/types/bf-settings";
import { CSFloatItem } from "./settings/CSFloatItem";

export function CSFNightwish(props: CSFloatSettings) {
    return <CSFloatItem
        settings={props}
        item={{
            name: 'AK-47 | Nightwish',
            condition: 'Factory New',
            buffAsk: 67.35,
            buffBid: 65.56,
            float: 0.002562000649,
            listingAge: '40 days ago',
            price: 220.00,
            floatRank: 257,
            stickers: true,
            pattern: 147,
            buffLink: 'https://buff.163.com/goods/887070',
            imageUrl: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09K_k4ifgP7nO4Tdn2xZ_IskiO2Vp4ikjQft-EJpNT_7IoSUIw8_M17R-Fbsk-3rh8Pt78zOnCcxpGB8sinnd9A3/280x210'
        }}
    />
}