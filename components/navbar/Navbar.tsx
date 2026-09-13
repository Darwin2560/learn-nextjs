import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "@/components";


const navItems = [
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/pricing", text: "Pricing" },
];


export const Navbar = () => {

    console.log("Navbar component rendered");

    return (
        <nav className="flex bg-gray-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href="/" className="text-xl font-bold">
                <HomeIcon size={24} className="inline-block mr-2" />
                Home
            </Link>
            <ul className="flex space-x-4 ml-auto">
                {navItems.map((item) => (
                    <ActiveLink key={item.path} { ...item } />
                ))}
            </ul>
        </nav>
    )
}
