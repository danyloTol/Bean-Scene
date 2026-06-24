export default function Header() {
    const ButtonClassName = "hover:text-[#afafaf] duration-200"

    return (
        <header className="w-full h-20 grid grid-cols-12 gap-5 items-center">
            <div className="col-span-4">
                <h1 className="font-heading text-[35px]">Bean Scene</h1>
            </div>
            <nav className="col-span-4">
                <ul className="flex flex-row justify-between w-full text-[14px]">
                    <li><button className={ButtonClassName}>Home</button></li>
                    <li><button className={ButtonClassName}>Menu</button></li>
                    <li><button className={ButtonClassName}>About Us</button></li>
                    <li><button className={ButtonClassName}>Contact Us</button></li>
                </ul>
            </nav>
        </header>
    )
}