import { useState, type ReactElement } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { IconProps } from "@tabler/icons-react";

type CheckboxProps = {
    id: string;
    text: string;
    icon?: ReactElement<IconProps>;
    tooltipText?: string;
};

export const SettingsCheckbox = ({
    id,
    text,
    icon
}: CheckboxProps) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex justify-between items-center align-middle">
            <div className="flex items-center gap-2">
                {icon}
                <Label htmlFor={id} className="text-balance leading-5">{text}</Label>
            </div>
            <Checkbox id={id} checked={checked} onCheckedChange={() => setChecked} onClick={() => {
                
            }} />
        </div>
    );
};