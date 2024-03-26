import { CSFloatSettings } from "@/types/bf-settings";
import { CSFloatItem } from "./settings/CSFloatItem";

export function CSFM9CH(props: CSFloatSettings) {
    return <CSFloatItem
        settings={props}
        item={{
            name: '★ M9 Bayonet | Case Hardened',
            condition: 'Battle-Scarred',
            buffAsk: 521.6,
            buffBid: 497.22,
            float: 0.973900914192,
            listingAge: '100 days ago',
            price: 570.00,
            floatRank: 36,
            stickers: false,
            pattern: 876,
            buffLink: 'https://buff.163.com/goods/43077',
            imageUrl: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRZ7cRnk6eRp9_z2VHj-RU6NTynINfEIVdtYVnU-lm_wO65hpO66pzBznsxsnYk-z-DyGCi22Cd/280x210',
            bluegem: '30% / 32%'
        }}
    />
}