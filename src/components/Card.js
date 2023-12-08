export const Card = ({ pid, name, price, img, items, setItems }) => {
    const handleClick = () => { 
        setItems([...items,{id: pid,name:name, price:price, img:img}]);}
    return (

        <div className="w-full mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="px-3 pt-4 mb-4 rounded-lg h-72" src={img} alt={name} />
            <div className="px-4 pb-5">
                <p className="text-lg mb-4 tracking-tight text-gray-900 dark:text-white">{name}</p>


                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <span onClick={handleClick} className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</span>
                </div>
            </div>
        </div>

    )
}
