import Link from "next/link";

export default function CopyWrite({ text, social }: { text: string, social: any }) {
    return (
        <>
            <div className="py-30">
                <div className="container">
                    <div className="flex xs-to-sm-min:flex-row flex-col items-center xs-to-sm-min:justify-between justify-center xs-to-sm-max:gap-20 text-center">
                        <p className="text-base font-normal leading-[1.56] text-dark-subtitle">
                            {text}
                        </p>
                        <div className="footer-social-link">
                            <ul className="flex gap-14">
                                <li className="single-list">
                                    <Link
                                        className="bg-footer-bg text-white py-8 px-9 rounded-[10px] transition-bundle hover:bg-secondary hover:text-primary-title"
                                        href={social.facebook}
                                    >
                                        <i className="ri-facebook-fill"></i>
                                    </Link>
                                </li>
                                <li className="single-list">
                                    <Link
                                        className="bg-footer-bg text-white py-8 px-9 rounded-[10px] transition-bundle hover:bg-secondary hover:text-primary-title"
                                        href={social.instagram}
                                    >
                                        <i className="ri-instagram-line"></i>
                                    </Link>
                                </li>
                                <li className="single-list">
                                    <Link
                                        className="bg-footer-bg text-white py-8 px-9 rounded-[10px] transition-bundle hover:bg-secondary hover:text-primary-title"
                                        href={social.tiktok}
                                    >
                                        <i className="ri-tiktok-fill"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}