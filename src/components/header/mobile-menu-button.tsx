'use client'
import { cn } from "@/lib/utils";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const MenuItem = ({ active = false, item }: { active?: boolean, item: any }) => {
    const { children } = item
    const [open, setOpen] = useState(false)
    return (
        <>
            {(children && children.length > 0) ? (
                <>
                    <li>
                        <button onClick={() => setOpen(!open)} className={cn("text-primary-title font-semibold xs-to-lg-min:text-base lg:text-md hover:text-primary", active && 'relative text-primary')}>{item.label}</button>
                    </li>
                    <Collapse in={open}>
                        {children.map((child: any, index: number) => (
                            <li className="pl-[10px]" key={index}>
                                <Link href={child.href} className={cn("text-primary-title font-semibold xs-to-lg-min:text-base lg:text-md hover:text-primary", active && 'relative text-primary')}>{child.label}</Link>
                            </li>
                        ))}
                    </Collapse>
                </>
            ) : (
                <>
                    <li>
                        <Link href={item.href} className={cn("text-primary-title font-semibold xs-to-lg-min:text-base lg:text-md hover:text-primary", active && 'relative text-primary')}>{item.label}</Link>
                    </li>
                </>
            )}
        </>
    )
}

export default function MobileMenuButton({ navItems }: { navItems: any[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button className="xs-to-md-min:hidden" onClick={() => setIsOpen(!isOpen)}>
                <div className="space-y-[7px]">
                    <div className="w-[30px] h-[2px] bg-primary"></div>
                    <div className="w-[30px] h-[2px] bg-primary"></div>
                    <div className="w-[30px] h-[2px] bg-primary"></div>
                </div>
            </button>

            {isOpen && (
                <div className="bg-white p-10 w-full absolute top-[7rem] left-0 z-[9999]">
                    <ul className="space-y-4 p-20">
                        {navItems.map((item, index) => (
                            <MenuItem key={index} active={index == 0} item={item} />
                        ))}
                    </ul>
                </div>
            )}

        </>
    )
}