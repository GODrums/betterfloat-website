import { CSFloatSettings } from "@/types/bf-settings";

type CSFItemProps = {
    settings: CSFloatSettings;
    item: {
        name: string;
        condition: string;
        price: number;
        stickers?: boolean;
        listingAge: string;
        float: number;
        floatRank?: number;
        buffBid: number;
        buffAsk: number;
        pattern: number;
        buffLink: string;
        imageUrl: string;
        bluegem?: string;
    };
}

export function CSFloatItem(props: CSFItemProps) {
    const currencyFormat = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    return (
        <div className="p-3 bg-[#15171C] h-fit" style={{ fontFamily: 'Roboto,Helvetica Neue,sans-serif' }}>
            <div className="w-[250px] bg-[#1B1D24] rounded-[12px] border-[#1b1d24]" style={{ boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)' }}>
                <div className="grid text-white" style={{ gridTemplateColumns: 'auto', gridTemplateRows: 'auto auto 1fr auto auto auto', gridTemplateAreas: `"header" "break" "image" "break2" "float" "footer"` }}>
                    <div className="min-h-[50px] p-2.5 min-w-0" style={{ gridArea: 'header' }}>
                        <h4 className="block whitespace-nowrap font-medium">
                            <span className="block text-ellipsis" style={{ fontSize: '16px' }}>{props.item.name}</span>
                            <span className="text-[#9EA7B1] mt-1.5" style={{ fontSize: '14px' }}>{props.item.condition}</span>
                        </h4>
                    </div>
                    <div className="w-[250px]" style={{ gridArea: 'image' }}>
                        <div className="relative size-full" style={{ background: 'linear-gradient(rgba(27, 29, 36, 0) 20%, rgba(235, 75, 75, 0.32) 100%)', borderBottomColor: 'rgb(235, 75, 75)' }}>
                            <img src={props.item.imageUrl} alt={props.item.name} className="relative w-full top-1/2" style={{ aspectRatio: '512/384', transform: 'translateY(-50%)' }} />
                            {(props.item.bluegem && props.settings["csf-csbluegem"]) &&
                                <div className="absolute top-0 left-0 p-1.5 flex items-center" style={{ fontSize: '12px' }}>
                                    <img className="h-5 mr-1.5" style={{ filter: 'brightness(0) saturate(100%) invert(57%) sepia(46%) saturate(3174%) hue-rotate(160deg) brightness(102%) contrast(105%)'}} src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Ctitle%3EArtboard-13%3C%2Ftitle%3E%3Cg%20id%3D%22Diamod%22%3E%3Cpolygon%20points%3D%2243.132%209%2038.868%209%2041%2012.197%2043.132%209%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpolygon%20points%3D%2239.25%2023.088%2046.716%2015%2041.739%2015%2039.25%2023.088%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpolygon%20points%3D%2235.132%209%2030.868%209%2033%2012.197%2035.132%209%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpolygon%20points%3D%2239.132%2013%2037%209.803%2034.868%2013%2039.132%2013%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpolygon%20points%3D%2227.284%2015%2034.75%2023.088%2032.262%2015%2027.284%2015%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpolygon%20points%3D%2229%209.803%2026.868%2013%2031.132%2013%2029%209.803%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpolygon%20points%3D%2234.354%2015%2037%2023.599%2039.646%2015%2034.354%2015%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpath%20d%3D%22M52%2C0H10a6%2C6%2C0%2C0%2C1%2C6%2C6V63a1%2C1%2C0%2C0%2C0%2C.566.9A1.011%2C1.011%2C0%2C0%2C0%2C17%2C64a1%2C1%2C0%2C0%2C0%2C.625-.219L22%2C60.28l4.38%2C3.5a1%2C1%2C0%2C0%2C0%2C1.249%2C0l4.377-3.5%2C4.372%2C3.5a1%2C1%2C0%2C0%2C0%2C1.25%2C0l4.374-3.5%2C4.373%2C3.5a1%2C1%2C0%2C0%2C0%2C1.25%2C0L52%2C60.281l4.373%2C3.5A1%2C1%2C0%2C0%2C0%2C58%2C63V6A6%2C6%2C0%2C0%2C0%2C52%2C0ZM24.168%2C13.445l4-5.995A1.041%2C1.041%2C0%2C0%2C1%2C29%2C7H45a1.039%2C1.039%2C0%2C0%2C1%2C.836.452l4%2C5.993a1.03%2C1.03%2C0%2C0%2C1-.1%2C1.233l-12%2C13A1.018%2C1.018%2C0%2C0%2C1%2C37%2C28a.994.994%2C0%2C0%2C1-.734-.322l-12-13A1.019%2C1.019%2C0%2C0%2C1%2C24.168%2C13.445ZM22%2C41H46a1%2C1%2C0%2C0%2C1%2C0%2C2H22a1%2C1%2C0%2C0%2C1%2C0-2Zm-1-4a1%2C1%2C0%2C0%2C1%2C1-1H46a1%2C1%2C0%2C0%2C1%2C0%2C2H22A1%2C1%2C0%2C0%2C1%2C21%2C37Zm1%2C11a1%2C1%2C0%2C0%2C1%2C0-2H46a1%2C1%2C0%2C0%2C1%2C0%2C2Zm30%2C5H42a1%2C1%2C0%2C0%2C1%2C0-2H52a1%2C1%2C0%2C0%2C1%2C0%2C2Zm0-5H49a1%2C1%2C0%2C0%2C1%2C0-2h3a1%2C1%2C0%2C0%2C1%2C0%2C2Zm0-5H49a1%2C1%2C0%2C0%2C1%2C0-2h3a1%2C1%2C0%2C0%2C1%2C0%2C2Zm0-5H49a1%2C1%2C0%2C0%2C1%2C0-2h3a1%2C1%2C0%2C0%2C1%2C0%2C2Zm0-5H22a1%2C1%2C0%2C0%2C1%2C0-2H52a1%2C1%2C0%2C0%2C1%2C0%2C2Z%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpath%3E%3Cpolygon%20points%3D%2247.132%2013%2045%209.803%2042.868%2013%2047.132%2013%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpolygon%3E%3Cpath%20d%3D%22M10%2C2A4%2C4%2C0%2C0%2C0%2C6%2C6V27a1%2C1%2C0%2C0%2C0%2C1%2C1h7V6A4%2C4%2C0%2C0%2C0%2C10%2C2Z%22%20style%3D%22fill%3A%20%23232328%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                                    <span className="text-[#00bfff] text-[14px]">{props.item.bluegem}</span>
                                </div>
                            }
                            {props.item.stickers &&
                                <div className="absolute bottom-2 left-0 right-0">
                                    {props.settings["csf-stickerprices"] ?
                                        <div className="p-[5px] rounded-[5px] w-fit ml-2 mb-1 bg-[#f4f50066]" style={{ fontSize: '12px' }}>
                                            46.9% SP
                                        </div>
                                        : <div className="p-[5px] rounded-[5px] w-fit ml-2 mb-1 bg-[#0003]" style={{ fontSize: '12px' }}>
                                            48.8% SP
                                        </div>
                                    }
                                    <div className="flex">
                                        {[...Array(4)].map(() =>
                                            <img className="inline-block relative h-[29px]" style={{ filter: 'contrast(1)' }} src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/eslkatowice2015/teamenvyus_holo.f899c827cecae6d746d4039d972aec6b3c8295a6.png" alt="Sticker | Team EnVyUs (Holo) | Katowice 2015" />
                                        )}
                                    </div>
                                </div>
                            }
                            <div className="absolute top-[5px] right-[5px] text-right flex flex-col gap-1">
                                {props.settings["csf-listingage"] &&
                                    <div className="flex items-center">
                                        <p className="inline mx-[5px] text-[#9EA7B1] text-[13px]">{props.item.listingAge}</p>
                                        <img className="h-4" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C%21--%21%20Font%20Awesome%20Pro%206.4.2%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%20%28Commercial%20License%29%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M256%200a256%20256%200%201%201%200%20512A256%20256%200%201%201%20256%200zM232%20120V256c0%208%204%2015.5%2010.7%2020l96%2064c11%207.4%2025.9%204.4%2033.3-6.7s4.4-25.9-6.7-33.3L280%20243.2V120c0-13.3-10.7-24-24-24s-24%2010.7-24%2024z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" style={{ filter: 'brightness(0) saturate(100%) invert(59%) sepia(55%) saturate(3028%) hue-rotate(340deg) brightness(101%) contrast(101%)' }}></img>
                                    </div>
                                }
                                <div className="inline-flex justify-end">
                                    <div className="bg-[#fff3] text-[#9EA7B1] py-1 px-2 rounded-[20px] inline-flex gap-1 backdrop-blur-sm">
                                        <svg _ngcontent-ng-c2631012479="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" fill="none" className="text-[20px] size-[20px]"><path _ngcontent-ng-c2631012479="" fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 4.5013C4.76316 4.5013 3.25988 7.01636 2.73122 8.20357C2.64602 8.39497 2.64602 8.60764 2.73122 8.79904C3.25988 9.98624 4.76316 12.5013 7.99999 12.5013C11.2369 12.5013 12.74 9.98617 13.2686 8.79897C13.3537 8.60764 13.3537 8.39497 13.2686 8.20364C12.74 7.01646 11.2369 4.5013 7.99999 4.5013ZM1.51318 7.66123C2.09274 6.35967 3.92748 3.16797 7.99999 3.16797C12.0726 3.16797 13.9072 6.35985 14.4867 7.66137C14.7255 8.19783 14.7255 8.80477 14.4867 9.34124C13.9072 10.6428 12.0726 13.8346 7.99999 13.8346C3.92748 13.8346 2.09274 10.6429 1.51318 9.34137C1.27425 8.80477 1.27425 8.19783 1.51318 7.66123Z" fill="#9EA7B1"></path><path _ngcontent-ng-c2631012479="" fill-rule="evenodd" clip-rule="evenodd" d="M8.00065 5.83203C6.52789 5.83203 5.33398 7.02594 5.33398 8.4987C5.33398 9.97143 6.52789 11.1654 8.00065 11.1654C9.47338 11.1654 10.6673 9.97143 10.6673 8.4987C10.6673 7.02594 9.47338 5.83203 8.00065 5.83203ZM7.94418 7.16656C7.96292 7.16576 7.98172 7.16536 8.00065 7.16536C8.73705 7.16536 9.33398 7.7623 9.33398 8.4987C9.33398 9.2351 8.73705 9.83203 8.00065 9.83203C7.26425 9.83203 6.66732 9.2351 6.66732 8.4987C6.66732 8.47976 6.66772 8.46096 6.66852 8.44223C6.77245 8.47876 6.88418 8.4987 7.00065 8.4987C7.55292 8.4987 8.00065 8.05096 8.00065 7.4987C8.00065 7.38223 7.98072 7.2705 7.94418 7.16656Z" fill="#9EA7B1"></path><line _ngcontent-ng-c2631012479="" x1="2" y1="2" x2="14" y2="14" vector-effect="non-scaling-stroke" stroke="#9EA7B1"></line></svg>
                                        <span className="text-[14px]">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] flex flex-col p-3 text-center relative gap-2.5" style={{ gridArea: 'footer' }}>
                        <div className="flex items-center gap-1.5">
                            <div className="font-medium" style={{ fontSize: '22px' }}>
                                {currencyFormat.format(props.item.price)}
                            </div>
                            {props.settings["csf-buffdifference"]
                                ?
                                <span className="bg-[#ce0000] inline-flex relative rounded-[5px] p-1" style={{ fontSize: '15px' }}>
                                    <span>{props.settings["csf-pricereference"] === '0' ? '+$154.44' : '+$152.65'}</span>
                                    {props.settings["csf-buffdifferencepercent"] && <span className="ml-[5px]">{props.settings["csf-pricereference"] === '0' ? '(336%)' : '(327%)'}</span>}
                                </span>
                                :
                                <div className="grow flex justify-end">
                                    <div className="flex items-center gap-1 py-1 px-1.5" style={{ background: 'rgba(255,255,255,.04)', borderRadius: '20px' }}>
                                        <span className="size-[19px]">
                                            <svg _ngcontent-ng-c4231322047="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none"><circle _ngcontent-ng-c4231322047="" cx="7" cy="7.5" r="7" fill="#FD484A" fill-opacity="0.25"></circle><path _ngcontent-ng-c4231322047="" d="M3.5 7.5H10.5" stroke="#FD484A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c4231322047="" d="M7 4L7 11" stroke="#FD484A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </span>
                                        <span className="text-[#9EA7B1] font-bold" style={{ fontSize: '14px' }}>&gt;100%</span>
                                    </div>
                                </div>
                            }
                        </div>
                        <a className="inline-flex items-center" target="_blank" href={props.item.buffLink} style={{ fontSize: '15px' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIGNIUk0AAHomAACAhAAA%2BgAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAVUExURUdwTCEhLSEhKyEhKyEhK%2F%2F%2F%2F5CQlT%2FHs8EAAAAEdFJOUwAkrvF26dtLAAAAAWJLR0QF%2BG%2FpxwAAAAd0SU1FB%2BcICwEUHWyOnOEAAABdSURBVCjPY2BUdkECRgIMwi4owJBBBVXAicEEVcCZwQUNkCsQCgV4BMCKU8NQBdxCU1AFIAoQAlAFCIFUNEPdsNjiQnMBN1TPhYGdhSSQQmGYYkQURlRiRDZ6cgAASNmKd21h8BYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDgtMTFUMDE6MjA6MjkrMDA6MDBHzK4PAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA4LTExVDAxOjIwOjI5KzAwOjAwNpEWswAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wOC0xMVQwMToyMDoyOSswMDowMGGEN2wAAAAASUVORK5CYII%3D" alt="Buff163" style={{ height: '20px', marginLeft: '5px', border: '1px solid dimgray', borderRadius: '4px' }} />
                            <div className="ml-1 pt-px font-medium">
                                <span className="text-[#ffa500]">Bid {currencyFormat.format(props.item.buffBid)}</span>
                                <span className="text-stone-600 mx-1">|</span>
                                <span className="text-[#adff2f]">Ask {currencyFormat.format(props.item.buffAsk)}</span>
                            </div>
                        </a>
                        <div className="block relative w-full h-2 mt-[5px] rounded-[4px]">
                            <div className="absolute top-[-12px] text-[#d3d3d3]" style={{ left: 'calc(0.2562% - 2px)' }}>▼</div>
                            <div className="inline-block w-[7%] bg-[green] h-full align-top"></div>
                            <div className="inline-block w-[8%] bg-[#18a518] h-full align-top"></div>
                            <div className="inline-block w-[23%] bg-[#9acd32] h-full align-top"></div>
                            <div className="inline-block w-[7%] bg-[#cd5c5c] h-full align-top"></div>
                            <div className="inline-block w-[55%] bg-[#f92424] h-full align-top"></div>
                        </div>
                        <div className="flex gap-1" style={{ fontSize: '14px' }}>
                            <div className={props.settings["csf-floatcoloring"] ? (props.item.float < 0.5 ? 'text-[#40e0d0]' : 'text-[#cd5c5c]') : 'text-white'}>{props.item.float}</div>
                            {props.item.floatRank && <div className="text-[#9EA7B1]">(#{props.item.floatRank})</div>}
                            <div className="grow"></div>
                            <div className="text-white">{props.item.pattern}</div>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="size-[13px]" _ngcontent-ng-c3357461559="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none" aria-describedby="cdk-describedby-message-ng-1-181" cdk-describedby-host="ng-1"><circle _ngcontent-ng-c3357461559="" cx="5" cy="5" r="3" fill="#9EA7B1"></circle><circle _ngcontent-ng-c3357461559="" cx="5" cy="5" r="4" stroke="#9EA7B1" stroke-opacity="0.15" stroke-width="2"></circle></svg>
                            <span style={{ fontSize: '14px' }}>Online</span>
                            <div className="grow"></div>
                            <svg className="max-w-[22px] h-[18px]" _ngcontent-ng-c3357461559="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-describedby="cdk-describedby-message-ng-1-182" cdk-describedby-host="ng-1"><path _ngcontent-ng-c3357461559="" fill="#ff8c00" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path></svg>
                            <svg className="max-w-[22px] h-[18px]" _ngcontent-ng-c3357461559="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 12" fill="none" aria-describedby="cdk-describedby-message-ng-1-173" cdk-describedby-host="ng-1"><circle _ngcontent-ng-c3357461559="" cx="5" cy="6" r="4" stroke="#FFD53F" stroke-width="2"></circle><path _ngcontent-ng-c3357461559="" d="M9 6L20 6" stroke="#FFD53F" stroke-width="2" stroke-linecap="round"></path><path _ngcontent-ng-c3357461559="" d="M14.043 6V8C14.043 8.55228 14.4907 9 15.043 9H17.043C17.5953 9 18.043 8.55228 18.043 8V6" stroke="#FFD53F" stroke-width="2"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}