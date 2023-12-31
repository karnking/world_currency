import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { getCountry } from "../redux/action";
import { IS_LOADING } from "../redux/actionType";

const SearchBar = () => {
    const [currency, setCurrency] = useState('')
    const dispatch = useDispatch()
    let timer=null;
    const debounce = (func) => {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func()
        },500)
    }
    useEffect(() => {
        dispatch({type:IS_LOADING})
        debounce(()=>dispatch(getCountry(currency)))
        return () => clearTimeout(timer);
    }, [currency])
    const ref = useRef(null)
    const handleShortcut = (e) => {
        ref.current.focus()
    }
    useEffect(()=>{
        window.addEventListener('keypress',handleShortcut)
        return ()=>{
            window.removeEventListener('keypress',handleShortcut)
        }
    },[])
    return (
        <div className='w-[90%] sm:w-[50%] transition-all'>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none hidden sm:flex absolute inset-y-0 left-0 items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                        <IoSearchOutline size={'1.5em'} />
                    </span>
                </div>
                <input
                    type="text"
                    name="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="block w-full rounded-md text-sm text-center border-0 py-3 pl-4 sm:pl-10 pr-10 sm:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-md sm:leading-6"
                    placeholder="Search Country By Currency (e.g. euro,dollar,rupees)"
                    autoFocus
                    ref={ref}
                />
            </div>
        </div>
    )
}

export default SearchBar
