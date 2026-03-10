'use client'

import { Dialog, DialogContent } from "@mui/material"

export default function BlogItemDialog({ open, setOpen, url }: any) {
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg" fullWidth>
                <DialogContent>
                    <div className="relative w-full h-[500px]">
                        {/* <iframe
                            src={url}
                            className="w-full h-full"
                            style={{ border: 'none' }}
                            allowFullScreen
                        ></iframe> */}
                        <iframe className="w-full h-full" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
} 