import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export const Footer = () => {
    return(
        <footer className="bg-white h-20 relative">
            <MaxWidthWrapper>
                <div className="border-t h-full border-gray-200 text-center items-center justify-center ">
                <div className="h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
                    <div className="text-center md:text-left pb-2 md:pb-0 ">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} All Rights Reserved
                        </p>

                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-4">
                            <Link href="/" className="text-sm text-muted-foreground
                            hover:text-gray-600">
                                Terms
                            </Link>
                            <Link href="/" className="text-sm text-muted-foreground
                            hover:text-gray-600">
                                Privacy Policy
                            </Link>
                            <Link href="/" className="text-sm text-muted-foreground
                            hover:text-gray-600">
                                Cookie Policy
                            </Link>

                        </div>

                    </div>
                </div>
                </div>
            </MaxWidthWrapper>

        </footer>
    )
}