import { MaterialSymbolsAvgTimeOutlineRounded, MaterialSymbolsUpdate } from "../icons"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Switch } from "../ui/switch"

type AutoRefreshProps = {
    rInterval: string
}

export function AutoRefresh(props: AutoRefreshProps) {
    const intervalOptions = ["30s", "60s", "2min", "5min"]

    return (
        <div className='bg-transparent flex flex-col items-center' style={{ fontFamily: 'Roboto, "Helvetica Neue", sans-serif' }}>
            <Button variant='light' className='h-9 flex items-center gap-2 hover:bg-neutral-500/70'>
                <MaterialSymbolsUpdate className='size-6 text-white' />
                <Badge variant='default' className='text-white font-normal bg-red-600/50 hover:bg-red-500/30'>
                    &apos;OFF&apos;
                </Badge>
            </Button>
            <div className='bg-[#15171ccc] border-2 border-[#c1ceff12] flex flex-col items-center gap-2 p-6 mt-2 text-center'
                style={{ borderRadius: '12px', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                <Switch defaultChecked={false} />
                <div className='flex items-center gap-2 mt-2'>
                    <MaterialSymbolsAvgTimeOutlineRounded className="size-6 text-white" />
                    <select className='appearance-none bg-transparent text-[#9EA7B1] border border-[#c1ceff12] rounded-lg py-1 px-2 cursor-pointer' defaultValue={props.rInterval}>
                        {intervalOptions.map((option, index) => (
                            <option key={index} value={index.toString()} className='bg-slate-800'>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}