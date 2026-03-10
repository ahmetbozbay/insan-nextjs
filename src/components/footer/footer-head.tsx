import Link from "next/link";
import Logo from "../logo";
import { getNavItems, getTranslations } from "@/actions/translations";

export default async function FooterHead() {
    const t = await getTranslations('footer.donate')
    const navItems = await getNavItems()
    return (
        <>
            <div className="relative z-2 pt-70 pb-50">
                <div className="col-lg-12">
                    <div className="menu-wrapper flex items-center justify-between">
                        <div className="logo">
                            <Logo white />
                        </div>
                        <div className="main-menu hidden xs-to-md-min:block">
                            <nav>
                                <ul className="listing" id="navigation2">
                                    {navItems.map((item, index) => (
                                        <li key={index} className="single-list inline-block">
                                            <Link
                                                href={item.href}
                                                className="text-white mr-38 text-lg font-semibold leading-none transition-bundle hover:text-secondary-content"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <ul className="cart">
                            <li className="cart-list">
                                <Link
                                    href="#"
                                    className="bg-primary border border-transparent text-white py-16 xs:py-12 px-32 xs:px-24 text-lg xs:text-md font-bold leading-[18px] rounded-[10px] transition-bundle hover:bg-transparent hover:border-primary hover:text-primary"
                                >
                                    {t}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}