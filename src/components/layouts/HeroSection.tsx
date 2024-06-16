import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown, FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typerwriter-effect";

const words = [
  {
    text: "Steeped in Tradition, Brewed with",
  },
  {
    text: "Love",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const teas = [
  {
    img: "/TeaCollection/tea1.jpg",
    name: "Masala Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea2.jpg",
    name: "Kolkata Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea2.jpg",
    name: "Kolkata Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea3.jpg",
    name: "Rajasthani Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea1.jpg",
    name: "Masala Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea3.jpg",
    name: "Rajasthani Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea1.jpg",
    name: "Masala Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea2.jpg",
    name: "Kolkata Chai",
    price: "₹350 ₹333",
  },
  {
    img: "/TeaCollection/tea2.jpg",
    name: "Kolkata Chai",
    price: "₹350 ₹333",
  },
];

const HeroSection = () => {
  return (
    <div className="w-full mt-8">
      <div className="w-8/12 mx-auto flex flex-col items-center justify-center">
        <div className="flex h-[15rem] flex-col  items-center justify-center ">
          <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  ">
            From Our Hands to Yours, with Love.
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white transition-all duration-200 hover:scale-95 dark:border-white ">
              Join now
            </button>
            <button className="h-10 w-40 rounded-xl border border-black bg-white text-sm text-black transition-all duration-200 hover:scale-95 ">
              Signup
            </button>
          </div>
        </div>
        <div className="lg:mt-10 flex-col justify-start gap-y-6 w-full flex items-start">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-row gap-2 items-center justify-center">
              <p className="text-lg">Featured</p> <FaAngleDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>FIlter your Tea</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Best Selling</DropdownMenuItem>
              <DropdownMenuItem>Alphabetically, A-Z</DropdownMenuItem>
              <DropdownMenuItem>Alphabetically, Z-A</DropdownMenuItem>
              <DropdownMenuItem>Price, high to low</DropdownMenuItem>
              <DropdownMenuItem>Price, low to high</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex flex-wrap gap-x-4 gap-y-6 md:gap-y-8">
            {teas.map((tea, index) => (
              <div key={index} className="ml-1">
                <div className="w-[20rem]">
                  <div className="relative rounded-xl w-[20rem]">
                    <Image
                      src={tea.img}
                      alt={tea.name}
                      width={300}
                      height={400}
                      className="rounded-2xl"
                    />
                    <div className="absolute bottom-4 justify-around w-full flex gap-x-4 p-4 ">
                      <button className="rounded-full p-3 mr-2 bg-black text-white hover:p-5 duration-200 transition-all flex items-center justify-center">
                        <FaRegHeart fontSize={20} />
                      </button>
                      <button className="rounded-full p-3 ml-2 bg-white text-black hover:bg-black hover:text-white hover:p-4 duration-200 transition-all flex justify-center items-center">
                        <FaEye fontSize={20} />
                      </button>
                    </div>
                  </div>
                  <div className="w-[20rem]">
                    <p className="text-lg text-center mt-2 font-mono">
                      {tea.name}
                    </p>
                    <p className="w-full text-center text-md font-bold mt-2 mb-2">
                      {tea.price}
                    </p>
                    <button className="w-full border border-black bg-white text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-md py-2 text-md ">
                      Quick Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
