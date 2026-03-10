import Link from "next/link";

type NaItemProps = {
    href: string,
    label: string,
    children?: {
        href: string,
        label: string,
    }[]
}
const NavItem = ({ item }: { item: NaItemProps }) => {
    return (
        <li className="single-list inline-block">
            <Link href={item.href} className="single nav-link">
                {item.label}
                {item.children && <i className="ri-arrow-down-s-line"></i>}
            </Link>
            {item.children && (
                <ul className="main-submenu">
                    {item.children?.map((child: NaItemProps, index: number) => (
                        <li key={index} className="single-list">
                            <Link href={child.href} className="sub-single nav-link">
                                {child.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavItem;
