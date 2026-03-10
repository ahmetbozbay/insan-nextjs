import Link from "next/link";

export default function FooterLinksCol({ links, title }: { links: any[] | string, title: string }) {

    return (
        <>
            <div className="xs-to-md-max:col-span-12 xs-to-lg-min:col-span-4 xs-to-md-min:col-span-6">
                <div className="footer-link">
                    <h4 className="text-xl xs-to-sm-max:text-base font-bold leading-normal text-white mb-20">{title}</h4>
                    <ul className="space-y-5">
                        {Array.isArray(links) ? links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    className="text-base xs-to-sm-max:text-md text-dark-subtitle font-normal leading-[1.56]"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )) : (
                            <>
                                <li>
                                    <p
                                        className="text-base xs-to-sm-max:text-md text-dark-subtitle font-normal leading-[1.56]"
                                    >
                                        {links}
                                    </p>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}