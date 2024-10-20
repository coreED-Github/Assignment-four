"use client"
import React from "react"

const CardTwo = () => {
    const productImages = [
      "https://rukminim2.flixcart.com/image/850/1000/l572ufk0/shoe/o/j/w/-original-imagfxf6swwfjqpw.jpeg?q=90&crop=false",
       "https://pinkivyshoes.net/cdn/shop/files/image_a3126dcb-67cb-4c62-b262-8264a6ff6369_4472x.jpg?v=1690582792", 
    ];

    return (
        <div className='relative text-center p-10'>
            <div className='absolute inset-0'
                style={{
                    backgroundImage:`url('https://wallpapercave.com/wp/wp8891854.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.7,
                }} />
            <h1 className='font-bold text-7xl mb-4 text-pink-700 z-10 relative'>Most Demanded Items</h1>
            <h1 className='text-4xl text-red-700 mb-4 z-10 relative'>Winter Colection</h1>

<section
id='Projects'
className="container mx-auto py-10 flex flex-col md:flex-row items-center gap-4"
>
{Array.from({ length: 2}).map((_, index) => (
    <div
        key={index}
        className="h-full w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-100 z-10 relative">
        <a href="#">
            <img
                src={productImages[index]}
                alt={`Product ${index + 1}`}
                className="h-96 w-full object-cover rounded-t-xl"
            />
            <div className="justiy-center">
                <span className="text-slate-700 mr-3 uppercase text-xs">Best Selection</span>
                <h2 className="text-lg font-bold text-red-500 truncate block capitalize">Classic Shoes</h2>
                
                <p className="text-red-700">Let's experience the best style and comfort with One Degree. Here innovation meets best manufacturing.
                     They have the best shoes for all in many sizes.</p>
                <div className="flex justify-center">
                    <p className="text-lg font-bold text-red-600 my-3 cursor-auto">
                    $20
                    </p>
                    <del>

                        <br />
                        <p className="text-sm text-red-900 cursor-auto ml-2">{""} $30</p>
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
export default CardTwo
