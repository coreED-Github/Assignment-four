"use client"
import React from "react"
export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-3">
          <div className="py-4 px-6 rounded-xl border w-full bg-gradient-to-r from-black to-sky-700">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
               
                <div style={{ position: 'relative' }}>
                  <input className="rounded-3xl py-2 px-32 outline-black text-xs w-{200px} pr-32 hidden lg:block md:block"
                    placeholder="select your favourite shoes" />
                 
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                
                <p className="text-sm text-white hidden lg:block md:block" >
                  {" "}
                  You can order your favourite shoes...
                  <span className="text-yellow-200">Going Now</span>
                </p>


                
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-yellow-200 hover:text-amber-400"
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGhLekDwkSSjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718299417396?e=2147483647&v=beta&t=jMW9xW9mXvVLALaXEmfbGf4s0zTe7sCIXmpjQFFaj7o"
                  alt="user avtar"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}















                  