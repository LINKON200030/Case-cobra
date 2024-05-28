
import { cn } from "@/lib/utils"
import React from "react";

const MaxWidthWrapper=({className,children}:{
    className?:string,
    children:React.ReactNode,
})=>{
return(
    <div className={cn(
        "h-full w-full max-w-screen-xl overflow-hidden mx-auto px-2.5 md:px-20",
        className,
    
)}>
    {children}

    </div>
)
}


export default MaxWidthWrapper