import Image from "next/image";
import { Button } from "./ui/button";
import ProjectDone from "@/lib/assets/project.png"

type DoneProps = {
    setPage: (page: number) => void;
    exportSettings: () => void;
}

export function DonePage(props: DoneProps) {
    return (
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter items-center inline-flex gap-2 text-white/80">
                Done! Your <span className="text-green-700 inline-flex items-center gap-2">customized</span> experience is waiting.
            </h1>
            <Image src={ProjectDone} width={150} alt="Project Done" />
            <div className="flex justify-around gap-4">
                <Button variant="default" onClick={props.exportSettings}>
                    Export to Extension
                </Button>
            </div>
            <div className="flex justify-around gap-4">
                <Button variant="destructive" onClick={() => props.setPage(0)}>
                    Restart
                </Button>
            </div>
        </div>
    )
}