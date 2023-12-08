import {Link} from "react-router-dom";
export const Footer = () => {
    return (


        <footer className=" max-w-7xl m-auto border-gray-200  dark:bg-gray-800">
            <div className="flex flex-row justify-center  mx-auto border-t  p-4  ">
                <span className="text-sm text-gray-500  dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Shopcart™</Link>. All Rights Reserved.
                </span>
             
            </div>
        </footer>

    )
}
