import { Label } from "@radix-ui/react-label";
import { IconProps } from "@tabler/icons-react";
import { type ReactElement, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type SelectProps = {
    id: string;
    text: string;
    options: string[];
    icon?: ReactElement<IconProps>;
};

export const SettingsSelect = ({
    id,
    text,
    options,
    icon
}: SelectProps) => {
    const [value, setValue] = useState<any>("0");
    // the radix-ui select component is bugged and needs manual open/close handling
    const [open, setOpen] = useState(false);

    const onValueChange = (value: string) => {
        setValue(value);
        setOpen(false);
    }

    return (
        <div className="flex justify-between items-center align-middle gap-4">
            <div className="flex items-center gap-2">
                {icon}
                <Label htmlFor={id}>{text}</Label>
            </div>
            <Select open={open} value={value} onValueChange={onValueChange}>
                <SelectTrigger className="w-[100px]" onClick={() => setOpen(!open)}>
                    <SelectValue aria-label={value}>
                        <SelectValue>{options[value ?? 0]}</SelectValue>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent
                    className="w-[50px]"
                    position="popper"
                    sideOffset={2}
                    align="center">
                    {options.map((option, index) => (
                        <SelectItem key={index} value={index.toString()}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
