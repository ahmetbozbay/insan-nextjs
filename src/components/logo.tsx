import Image from "next/image";

export default function Logo({ className = '', white = false, w = false }: { className?: string, white?: boolean, w?: boolean }) {
    return (
        <>
            {w ? (<>
                <Image className={`${className}`} src="/assets/images-used/logo/logo-ww.png" alt="logo" width={372} height={142} />
            </>) : (
                <>
                    {white ? (
                        <Image className={`${className}`} src="/assets/images-used/logo/logo-w.svg" alt="logo" width={80} height={80} />

                    ) : (
                        <Image className={`${className}`} src="/assets/images-used/logo/logo.svg" alt="logo" width={80} height={80} />
                    )}
                </>
            )}
            {/* <Image className={`${className}`} src="/assets/images/logo/Logo-charitfix.png" alt="logo" /> */}
        </>
    )
}