"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from 'next/image';
import snake1 from "../../public/snake-1.png";

import {ArrowRight, Check, Icon, Star} from "lucide-react";
import Phone from "@/components/Phone";
import {Icons} from "@/components/Icons";
import Reviews from "@/components/Reviews";
import imgSrc from '../../public/testimonials/1.jpg'
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";




export default function Home() {
    return (
        <>
        <div className="bg-slate-50">
            {/*Hero Section*/}
            <section>
                <MaxWidthWrapper
                    className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-10 lg:pb-52 xl:pt-12">
                    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto text-center lg:text-left flex item-center flex-col lg:items-start">
                            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                                <Image src={snake1} alt="Snake" width={28} height={28}/>
                            </div>
                            <h1 className="relative w-full tracking-tighter text-balance mt-16 lg:mt-8 font-bold !leading-tight text-gray-900
                            text-5xl md:text-6xl lg:text-6xl lg:leading-tight flex-col space-y-5">Your Image on a <span
                                className="bg-green-600 px-2 text-white">Custom</span> Phone Case</h1>
                            <p className="mt-8 lg:mt-6 text-lg lg:pr-12 max-w-prose tracking-tighter lg:text-left text-balance md:text-wrap">
                                Capture your favourite moment with your own, <span
                                className="font-semibold">one-of-one</span> phone case. Casecobra allows you to protect
                                your
                                memories, not just your phone case.
                            </p>
                            <ul className="flex flex-col mt-8 lg:mt-4 space-y-2 items-center lg:items-start text-left text-balance font-medium ">
                                <div className="spacce-y-2">
                                    <li className="flex gap-1.5 items-center text-left">
                                        <Check className="w-5 h-5 shink-0 text-green-600"/>
                                        High-quality, durable materials
                                    </li>
                                    <li className="flex gap-1.5 items-center text-left">
                                        <Check className="w-5 h-5 shink-0 text-green-600"/>
                                        5 years print guarantee
                                    </li>
                                    <li className="flex gap-1.5 items-center text-left">
                                        <Check className="w-5 h-5 shink-0 text-green-600"/>
                                        Modern Iphone models supported
                                    </li>

                                </div>
                            </ul>

                            <div className="mt-10 lg:mt-5 flex flex-col sm:flex-row items-center justify-center
                             gap-5">
                                <div className="flex -space-x-4">

                                    <img src="/user/user-1.png" alt="User"
                                         className="w-10 h-10 rounded-full border-2 ring-2 ring-slate-100 dark:border-gray-800"/>
                                    <img src="/user/user-2.png" alt="User"
                                         className="w-10 h-10 rounded-full border-2 ring-2 ring-slate-100 dark:border-gray-800"/>
                                    <img src="/user/user-3.png" alt="User"
                                         className="w-10 h-10 rounded-full border-2 ring-2 ring-slate-100 dark:border-gray-800"/>
                                    <img src="/user/user-4.jpg" alt="User"
                                         className="w-10 h-10 rounded-full border-2 ring-2 ring-slate-100 dark:border-gray-800"/>
                                    <img src="/user/user-5.jpg" alt="User"
                                         className="w-10 h-10 rounded-full border-2  ring-2 ring-slate-100 dark:border-gray-800"/>
                                </div>

                            </div>

                            <div className="flex flex-col mt-6 justify-start items-center lg:items-start  ">
                                <div className="flex gap-0.5">
                                    <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                    <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                    <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                    <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                    <Star className="w-4 h-4 text-green-700 fill-green-700"/>

                                </div>
                                <p className="text-sm font-medium text-gray-900 mt-3 ">
                                    <span className="font-semibold">1.250</span> happy customers
                                </p>
                            </div>


                        </div>
                    </div>

                    <div
                        className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
                        <div className='relative md:max-w-xl'>
                            <img
                                src='/your-image.png'
                                className='absolute w-40 lg:w-52 left-40 -top-20 select-none hidden sm:block lg:hidden xl:block'
                            />
                            <img
                                src='/line.png'
                                className='absolute w-20 -left-6 -bottom-6 select-none'
                            />
                            <Phone className='w-64 md:w-52' imgSrc='/testimonials/1.jpg'/>
                        </div>
                    </div>


        </MaxWidthWrapper>
</section>

{/*Value Proposition Section */
}
    <section className="bg-slate-100 py-24 ">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-24    ">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                <h2 className="text-5xl font-bold order-1 my-4 tracking-tighter
                        text-center text-balance !leading-tight md:text-6xl text-gray-900">
                    What our {' '}
                    <span className="relative px-2">
                                customers <Icons.underline className=" hidden sm:block
                                pointer-events-none absolute inset-x-0  -bottom-7 text-green-500"/>{" " }
                            </span>
                            say {" "}
                        </h2>
                        <img src="/snake-2.png" className=" w-24 order-0 lg:order-2"/>
                    </div>
                    <div id="reviews-container" className="flex flex-col lg:flex-row items-center space-y-16 lg:space-y-0 justify-between lg:space-x-8 px-6 md:px-4 lg:px-8 gap-4 sm:gap-6 w-full lg:w-11/12 ">
                        <div id="review01" className="w-full flex flex-col gap-4 ">
                            <div className="flex gap-0.5">
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>

                            </div>
                            <div className='text-lg text-justify leading-8'>
                                <p>
                                    The case feels durable and I even got a compliment on the
                                    design. Had the case for two and a half months now and{' '}
                                    <span className='p-0.5 bg-slate-800 text-white'>
                                     the image is super clear
                                     </span>
                                    , on the case I had before, the image started fading into
                                    yellow-ish color after a couple weeks. Love it.
                                </p>
                            </div>
                            <div id="review01-img" className="flex gap-4 items-center mt-4 ">
                                <img src="/user/user-1.png" alt="User"
                                     className="w-10 h-10 rounded-full border-2 ring-2 ring-slate-100 dark:border-gray-800"/>
                                <span className="text-sm gap-1 font-medium text-gray-900">
                                    <span className="font-bold">Jane Doe</span>
                                   <span className="flex gap-1.5 items-center text-left text-zinc-700 font-medium">
                                         <Check className="w-4 h-4 shink-0 text-green-600"/>
                                    verified customer
                                   </span>
                                </span>
                            </div>


                        </div>


                        <div id="review02" className="w-full flex flex-col gap-4 ">
                            <div className="flex gap-0.5">
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                <Star className="w-4 h-4 text-green-700 fill-green-700"/>

                            </div>
                            <div className='text-lg text-justify leading-8'>
                                <p>
                                    I usually keep my phone together with my keys in my pocket
                                    and that led to some pretty heavy scratchmarks on all of my
                                    last phone cases. This one, besides a barely noticeable
                                    scratch on the corner,{' '}
                                    <span className='p-0.5 bg-slate-800 text-white'>
                                    looks brand new after about half a year
                                     </span>
                                    . I dig it.

                                </p>
                            </div>
                            <div id="review02-img" className="flex gap-4 items-center mt-4 ">
                                <img src="/user/user-2.png" alt="User"
                                     className="w-10 h-10 rounded-full border-2 ring-2 ring-slate-100 dark:border-gray-800"/>
                                <span className="text-sm gap-1 font-medium text-gray-900">
                                    <span className="font-bold">Alexa Min</span>
                                   <span className="flex gap-1.5 items-center text-left text-zinc-700 font-medium">
                                         <Check className="w-4 h-4 shink-0 text-green-600"/>
                                    verified customer
                                   </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16">
                       <Reviews/>
                    </div>
                </MaxWidthWrapper>

            </section>


{/*Convincing Customer Section*/}
    <section >
                <MaxWidthWrapper className="py-16">
                    <div className=" px-6 lg:px-8">
                        <div id="title" className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-5xl font-bold order-1 my-4 tracking-tighter
                        text-center text-balance !leading-tight md:text-6xl text-gray-900">
                               Upload your photo and get {' '}
                                <span className="relative px-2 bg-green-600 text-white">
                                your own case
                            </span>{" "}
                                now {" "}
                            </h2>

                        </div>

                        <div id="body" className="mx-auto max-w-6xl px-6 flex flex-col pt-16 lg:px-8 gap-16">

                            <div className="relative flex flex-col items-center md:grid grid-cols-2
                            gap-40">

                                <div className="relative h-80 md:h-full w-full md:justify-self-end
                                max-w-sm rounded-xl bg-gray-900/10 ring-inset ring-1 ring-gray-900/5 lg:rounded-2xl">
                                    <img src="/horse_phone.jpg" alt="horse_phone" className="rounded-md
                                    object-cover bg-white shadow-2xl ring-1 ring-gray-900/10
                                    h-full w-full"/>
                                </div>

                                <img src="/arrow.png" alt="arrow" className="absolute top-[25rem] md:top-1/2
                                left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rotate-90 md:rotate-0"/>

                                <Phone className="w-60 md:w-72 rounded-2xl" imgSrc='/horse.jpg' dark={true}/>
                            </div>
                            <div>
                                <ul className="flex flex-col  items-center lg:items-start text-left text-balance font-medium ">
                                    <div className="flex flex-col space-y-2">
                                        <li className="flex gap-1.5 items-center text-left">
                                            <Check className="w-5 h-5 shink-0 text-green-600"/>
                                            High-quality silicone materials
                                        </li>
                                        <li className="flex gap-1.5 items-center text-left">
                                            <Check className="w-5 h-5 shink-0 text-green-600"/>
                                            Scratch- and fingerprint resistant coating
                                        </li>
                                        <li className="flex gap-1.5 items-center text-left">
                                            <Check className="w-5 h-5 shink-0 text-green-600"/>
                                            Wireless charging compatible
                                        </li>
                                        <li className="flex gap-1.5 items-center text-left">
                                            <Check className="w-5 h-5 shink-0 text-green-600"/>
                                            5 years printing warranty
                                        </li>

                                    </div>
                                </ul>

                                <div className="flex justify-center">
                                    <Link href='/configure/upload' className={buttonVariants({
                                        variant: "default",
                                        size: "lg",
                                        className: "mx-auto mt-8"
                                    })} >
                                        Create your case now <ArrowRight className="w-4 h-4 ml-1.5"/>

                                    </Link>
                                </div>


                            </div>


                        </div>

                    </div>

                </MaxWidthWrapper>

            </section>




        </div>
        </>
    );
}
