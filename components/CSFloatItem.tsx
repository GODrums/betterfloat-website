import { CSFloatSettings } from "@/types/bf-settings";
import { MaterialSymbolsAddShoppingCart } from "./icons";
import { Button } from "./ui/button";

export function CSFloatItem(props: CSFloatSettings) {
    return (
        <div className="flex flex-col p-2 text-left bg-[#303030]">
            <div className="w-[280px] bg-[#424242] rounded-[4px]">
                <div className="grid text-white" style={{ gridTemplateColumns: 'auto', gridTemplateRows: 'auto auto 1fr auto auto auto', gridTemplateAreas: `"header" "break" "image" "break2" "float" "footer"` }}>
                    <div className="min-h-[50px] pt-3 pb-0 px-3 min-w-0" style={{ gridArea: 'header' }}>
                        <h4 className="flex flex-col">
                            <span className="font-semibold" style={{ fontSize: '20px' }}>AK-47 | Nightwish</span>
                            <span className="text-[darkgray]" style={{ fontSize: '15px' }}>Factory New</span>
                        </h4>
                        {/* here: betterfloat-listing-age */}
                    </div>
                    <div className="h-1.5 w-full bg-[#303030]" style={{ gridArea: 'break' }}></div>
                    <div className="h-[200px] w-full bg-[#303030]" style={{ gridArea: 'image' }}>
                        <div className="relative w-full h-full" style={{ background: 'radial-gradient(circle, rgba(235, 75, 75, 0.4) 23%, rgba(255, 0, 0, 0) 111%)' }}>
                            <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09K_k4ifgP7nO4Tdn2xZ_IskiO2Vp4ikjQft-EJpNT_7IoSUIw8_M17R-Fbsk-3rh8Pt78zOnCcxpGB8sinnd9A3/280x210" alt="AK-47 | Nightwish" className="relative w-full top-1/2" style={{ aspectRatio: '512/384', transform: 'translateY(-50%)' }} />
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className="p-[5px] bg-[#0003] rounded-[5px] w-fit ml-2 mb-0.5" style={{ fontSize: '13px' }}>
                                    48.8% SP
                                </div>
                                <div className="flex">
                                    {[...Array(4)].map(() =>
                                        <img className="inline-block relative h-[38px]" style={{ filter: 'contrast(1)' }} src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/eslkatowice2015/teamenvyus_holo.f899c827cecae6d746d4039d972aec6b3c8295a6.png" />
                                    )}
                                </div>
                            </div>
                            <div className="absolute top-[5px] right-[5px] text-right">

                            </div>

                        </div>
                    </div>
                    <div className="h-1.5 w-full bg-[#303030]" style={{ gridArea: 'break2' }}></div>
                    <div className="flex flex-col mb-0 pt-[5px] pb-2 text-center border-t-white relative" style={{ gridArea: 'footer' }}>
                        <div className="relative mb-2.5 mt-0 text-sm">
                            <div className="absolute top-0 right-[5px]"> 147 </div>
                            <div className="flex justify-center gap-1">
                                <span className="text-[turquoise]">0.002562000649</span>
                                <span className="text-[#1e90ff]">(#257)</span>
                            </div>
                            <div className="flex relative w-full h-3 mt-[5px]">
                                <div className="absolute top-[-12px] text-[#d3d3d3]" style={{ left: 'calc(0.2562% - 7px)' }}>▼</div>
                                <div className="w-[7%] bg-[green] h-full"></div>
                                <div className="w-[8%] bg-[#18a518] h-full"></div>
                                <div className="w-[23%] bg-[#9acd32] h-full"></div>
                                <div className="w-[7%] bg-[#cd5c5c] h-full"></div>
                                <div className="w-[55%] bg-[#f92424] h-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-bold text-2xl">
                                $220.00
                                {/* here: buffdifference & difference percentage */}
                                <span className="bg-[#ce0000] text-base rounded-[5px] p-[5px] relative top-[-3px] left-[3px]">+$149.01</span>
                            </div>
                            <a className="inline-flex justify-center items-center mt-[5px] text-sm" href="https://buff.163.com/goods/887070">
                                <img className="h-[20px] mr-[5px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIGNIUk0AAHomAACAhAAA%2BgAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAVUExURUdwTCEhLSEhKyEhKyEhK%2F%2F%2F%2F5CQlT%2FHs8EAAAAEdFJOUwAkrvF26dtLAAAAAWJLR0QF%2BG%2FpxwAAAAd0SU1FB%2BcICwEUHWyOnOEAAABdSURBVCjPY2BUdkECRgIMwi4owJBBBVXAicEEVcCZwQUNkCsQCgV4BMCKU8NQBdxCU1AFIAoQAlAFCIFUNEPdsNjiQnMBN1TPhYGdhSSQQmGYYkQURlRiRDZ6cgAASNmKd21h8BYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDgtMTFUMDE6MjA6MjkrMDA6MDBHzK4PAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA4LTExVDAxOjIwOjI5KzAwOjAwNpEWswAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wOC0xMVQwMToyMDoyOSswMDowMGGEN2wAAAAASUVORK5CYII%3D" />
                                <div className="ml-0.5">
                                    <span className="text-[orange]">Bid $70.99</span>
                                    <span className="text-[gray] mx-[3px]">|</span>
                                    <span className="text-[greenyellow]">Ask $71.33</span>
                                </div>
                            </a>
                            <div className="flex justify-center gap-2 mt-2">
                                <Button variant="default" size="icon" className="bg-[#1565c0] w-16 shadow-lg">
                                    <MaterialSymbolsAddShoppingCart className="h-6 w-6 text-white" />
                                </Button>
                                <Button variant="default" className="bg-[#ff5722] w-24 shadow-lg text-white font-semibold">
                                    Buy Now
                                </Button>
                                <Button variant="outline" className="shadow-lg text-white font-semibold border-gray-500">
                                    Bargain
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}