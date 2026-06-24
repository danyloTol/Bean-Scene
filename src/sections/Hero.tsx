import heroBg from '../assets/coffee_image.jpg'
import Header from "./Header"

export default function Hero() {
    return (
        <section style={{ backgroundImage: `url(${heroBg})`}} className='min-h-screen w-full bg-cover bg-no-repeat px-20'>
            <div className='absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent z-0'></div>
            <div className='relative z-10 min-h-screen flex flex-col'>
                <Header />
                <div className='flex-1 flex flex-col justify-center items-start max-w-xl pb-10'>
                    <p className='text-[22px]'>We've got your morning covered with</p>
                    <h1 className='font-heading text-[220px]'>Coffee</h1>
                    <p className='mb-5'>It is the best to start your day with a cup of coffee. Discover the bes flavours coffee you will ever have. We provide the best for our customers</p>
                    <button className='text-[16px] text-[#1E1E1E] font-bold bg-[#F9C06A] px-6.5 py-3 rounded-full
                                        hover:bg-[#d0a159] duration-200'>Order Now</button>
                </div>
            </div>
        </section>
    )
}