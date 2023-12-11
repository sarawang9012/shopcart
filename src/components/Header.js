import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

import Logo from "../assets/logo.png";
export const Header = () => {
    const { cartList } = useCart();
    const activeClass = "inline-block px-2.5 py-2 text-gray-700 bg-slate-200 rounded active dark:bg-gray-800 dark:text-blue-500";
    const inactiveClass="inline-block py-2 px-2.5 rounded-lg";
    return (

        <header>

            <nav className="bg-white  border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl border-b flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-10" alt="Shopcart Logo" />
                        <span className="self-center text-lg  whitespace-nowrap dark:text-white">Shopping Cart</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="cart">
                            <span className="font-bold text-lg">Cart: {cartList.length}</span>
                        </Link>
                    </div>
                    <div className="items-center justify-left hidden w-full md:flex  md:w-auto md:order-1 md:mx-0" id="navbar-cta">


                        <ul className="flex flex-wrap text-lg font-medium text-center text-gray-700 dark:border-gray-700 dark:text-gray-400">
                            <li>
                                <NavLink to="/" aria-current="page"className={({isActive})=>(isActive? activeClass: inactiveClass)} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="cart" className={({isActive})=>(isActive? activeClass: inactiveClass)} end>Cart</NavLink>
                            </li>
                          
                        </ul>

                    </div>
                </div>
            </nav>

        </header>
    )
}
