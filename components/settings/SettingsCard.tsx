import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import React from "react"
import { Card, CardContent } from "../ui/card";

export const SettingsCard = ({
    children,
    className,
}: { children: ReactNode, className?: string }) => {
    return (
        <Card className={cn(
            "shadow-md border-muted mx-1",
            className
        )}>
            <CardContent className="space-y-3 flex flex-col justify-between">
                {children}
            </CardContent>
        </Card>
    );
};