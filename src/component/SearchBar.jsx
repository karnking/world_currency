import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { getCountry } from "../redux/action";

const SearchBar = () => {
    const [currency, setCurrency] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountry(currency))
    }, [currency])
    return (
        <div className='w-[50%]'>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                        <IoSearchOutline size={'1.5em'} />
                    </span>
                </div>
                <input
                    type="text"
                    name="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="block w-full rounded-md text-center border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6"
                    placeholder="Search Country By Currency"
                />
            </div>
        </div>
    )
}

export default SearchBar
