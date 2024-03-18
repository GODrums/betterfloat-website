import { useState, type ReactElement } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { IconProps } from "@tabler/icons-react";
import { useSetRecoilState } from "recoil";
import { settingState } from "@/app/recoilContextProvider";

type CheckboxProps = {
    id: string;
    text: string;
    icon?: ReactElement<IconProps>;
    initialValue?: boolean;
};

export const SettingsCheckbox = ({
    id,
    text,
    icon,
    initialValue = false
}: CheckboxProps) => {
    const [checked, setChecked] = useState(initialValue);
    const setSettings = useSetRecoilState(settingState);

    const onCheckedChange = (checked: boolean) => {
        setChecked(checked);
        setSettings((prev) => ({ ...prev, [id]: checked }));
    }

    return (
        <div className="flex justify-between items-center align-middle">
            <div className="flex items-center gap-2">
                {icon}
                <Label htmlFor={id} className="text-balance leading-5">{text}</Label>
            </div>
            <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
        </div>
    );
};