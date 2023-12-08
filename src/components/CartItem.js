export const CartItem = ({ item, items, setItems }) => {
    const { id, img, name, price } = item;
    const handleRemove = () => {
        console.log(id);
        setItems(items.filter(i => id !== i.id));

    }
    return (
        <div className="flex flex-col w-full my-2  items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row    dark:border-gray-700 dark:bg-gray-800 ">
           <div> <img className="object-cover  w-56 md:w-36  md:rounded-none md:rounded-s-lg" src={img} alt="" /></div>


           <div className="w-96  pt-2 md:flex md:flex-row md:justify-left"> <p className="mb-2 text-base text-center md:text-left tracking-tight text-gray-900 dark:text-white">{name}</p></div>
           <div className="w-24 pb-4 text-center"> <p>${price}</p></div>
           <div className="w-24 pb-4 text-center"> <p>1</p></div>
           <div> <span onClick={handleRemove} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">Remove</span></div>
        </div>
    )
}
