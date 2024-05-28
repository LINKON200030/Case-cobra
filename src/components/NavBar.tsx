
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button"
import {ArrowRight} from "lucide-react";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


const NavBar =  async () => {
    const {getUser}=getKindeServerSession()
    const user=await getUser()
    const isAdmin=user?.email===process.env.NEXT_PUBLIC_ADMIN_EMAIL
    return (
        <nav className="sticky z-[100] top-0 w-full h-14 inset-x-0 border-b border-b-gray-200
        bg-white/70 backdrop-blur-lg transition-all">
            <MaxWidthWrapper className="flex justify-between items-center h-14">
                <div className="flex justify-between items-center h-14 ml-2 md:ml-0 w-full border-b border-zinc-200">
                    <Link href="/" className=" flex z-50 font-bold text-2xl">
                       Case<span className="text-green-600">cobra</span>
                    </Link>
                </div>

                <div className="flex h-full items-center space-x-4">
                    {
                        user?(
                            <>
                                <Link href="/api/auth/logout" className={buttonVariants({ variant: "ghost",
                                    size: "sm"})}>
                                    Sign Out
                                </Link>
                                {
                                    isAdmin?
                                        <Link href="/" className={buttonVariants({ variant: "ghost",
                                            size: "sm" })}>
                                            Dashboard ✨
                                        </Link>
                                        :null
                                }
                                <Link href="/configure/upload" className='hidden sm:block'>
                                    <Button size="sm" className="font-medium bg-green-700">
                                        Create case
                                        <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                                    </Button>
                                </Link>`

                            </>
                        ):(
                            <>
                                <Link href="/api/auth/register" className={buttonVariants({ variant: "ghost",
                                    size: "sm"})}>
                                    Sign Up
                                </Link>
                                <Link href="/api/auth/login" className={buttonVariants({ variant: "ghost",
                                    size: "sm"})}>
                                    Login
                                </Link>

                                <div className="h-8 w-px bg-zinc-200 hidden sm:block"/>
                                <Link href="/configure/upload" className=''>
                                    <Button size="sm" className="font-medium bg-green-700">
                                        Create case
                                        <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                                    </Button>
                                </Link>`
                            </>
                        )
                    }
                </div>

            </MaxWidthWrapper>

        </nav>
    )
}

export default NavBar