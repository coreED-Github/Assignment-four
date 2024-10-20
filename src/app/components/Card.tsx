"use client"

import React from "react"
const Card = () => {
    const productImages = [
        "https://assets.ajio.com/medias/sys_master/root/20230804/163c/64cc0468a9b42d15c98a1af5/-473Wx593H-466417359-white-MODEL.jpg",
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCOmUx-4Kvp9aarbQlMxd4TW5DcawMLve_fdoKW7_hFNYVWeXNcXsdoK-NcU88wvkaSI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyEaOeTt9jWtMMW3RO-xvIad5WJqCWBnWmQ&s"
    ];

    return (
        <div className='relative text-center p-2'>
            <div className='absolute inset-0'
                style={{
                    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMsSuuilIxSrUgDPQ6CAhC7p6nwnyeTBS7w&s')`,
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.7,
                }} />
            <h2 className='font-bold text-5xl mb-2 text-blue-800 z-10 relative'>BoundLess Shoe</h2>
            <h1 className='text-2xl mb-2 font-bold text-cyan-800 z-10 relative'>Winter Colection!</h1>
            <section
                id='Projects'
                className="container mb-1 mx-auto py-16 flex flex-col md:flex-row items-center gap-4"
            >
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-full w-full bg-sky-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:bg-sky-100 z-10 relative">
                        <a href="#">
                            <img
                                src={productImages[index]}
                                alt={`Product ${index + 1}`}
                                className="h-80 w-full object-cover rounded-t-xl"
                            />
                            <div className=" justify-center">
                                <span className="text-slate-900 mr-3 uppercase text-xs">Category</span>
                                <p className="text-lg font-bold text-blue-700 truncate block capitalize">Branded Shoes</p>
                                <h2 className="text-cyan-900 bold">
                                    Card  {index + 1}
                                </h2>
                                <p className="text-blue-900">Experience the perfect blend of comfort and style with our casual sneakers,
                                    ideal for everyday adventures and a touch of fashion flair.</p>

                                <div className="flex justify-center">
                                    <p className="text-lg font-bold text-cyan-700 my-3 cursor-auto">
                                        $20
                                    </p>
                                    <del>

                                        <br />
                                        <p className="text-sm text-blue-700 cursor-auto ml-2">{""} $25</p>
                                    </del>

                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    )
}
export default Card