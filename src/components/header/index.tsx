import Image from "next/image";
import Link from "next/link";
import Logo from "../logo";
import MobileMenuButton from "./mobile-menu-button";
import NavItem from "./nav-item";
import { getNavItems, getTranslations } from "@/actions/translations";
import { MenuItem, Select } from "@mui/material";

const Header = async ({ lang }: { lang: string }) => {
    const t = await getTranslations('header')
    const navItems = await getNavItems()

    return (
        <header className="header-area bg-white font-inter">
            <div className="header-sticky">
                <div className="container">
                    <div className="relative">
                        <div className="flex items-center justify-between xs-to-md-max:pt-20 xs-to-md-max:pb-15">
                            <div className="image-wrapper">
                                <div className="xs:hidden block">
                                    <Link href="/">
                                        <Logo className="max-w-250" w />
                                    </Link>
                                </div>
                                <div className="hidden xs:block">
                                    <Link href="/">
                                        <Logo className="max-w-140" />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu">
                                <nav className="xs-to-md-max:hidden block">
                                    <ul className="listing" id="navigation">
                                        {navItems.map((item, index) => (
                                            <NavItem key={index} item={item} />
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex items-center gap-10">
                                {/* <Select
                                    defaultValue={lang}
                                    className="border-none outline-none text-primary"
                                    sx={{
                                        '.MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                            outline: 'none'
                                        }
                                    }}
                                >
                                    <MenuItem value={'tr'} className="text-primary">
                                        <Link href={'/tr'}>
                                            Turkish
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value={'en'} className="text-primary">
                                        <Link href={'/en'}>
                                            English
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value={'ar'} className="text-primary">
                                        <Link href={'/ar'}>
                                            العربية
                                        </Link>
                                    </MenuItem>
                                </Select> */}
                                <Link
                                    href="/projects"
                                    className="bg-primary border border-transparent text-white py-16 xs:py-12 px-32 xs:px-24 text-lg xs:text-md font-bold leading-[18px] rounded-[10px] transition-bundle hover:bg-transparent hover:border-primary hover:text-primary"
                                >
                                    {t.donate}
                                </Link>
                                {/* <a href="javascript:void(0)" className="circle-btn w-50 h-50 search-bar">
                                    <i className="ri-search-line"></i>
                                </a> */}
                                <MobileMenuButton navItems={navItems} />
                            </div>
                        </div>
                    </div>
                    {/* <div className="search-container">
                        <input type="text" id="searchField" className="search-field" placeholder="Search..." />
                        <button id="closeSearch" className="circle-btn w-35 h-35 inline">
                            <i className="ri-close-line"></i>
                        </button>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
