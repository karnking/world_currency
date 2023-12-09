import { useSelector } from 'react-redux'

const CountryComp = () => {
    const countries = useSelector(state => state.currency.countries)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full font-sans px-10 py-2'>
            {countries?.map(ele => {
                return <div key={ele.name.common} className='flex items-center justify-center text-white bg-zinc-500 border flex-col m-5 rounded-lg gap-2 text-center py-5'>
                    <img src={ele.flags.png} alt={ele.name.common} className='w-[50%] h-[50%]'/>
                    <p className='font-extrabold text-lg'>{ele.name.common}</p>
                    <hr className='w-full'/>
                    <p className='font-semibold'><span className='font-bold'>Capital :</span> {ele.capital}</p>
                    <p className='font-semibold'><span className='font-bold'>Currency :</span> {ele.currencies[Object.keys(ele.currencies)[0]].name}</p>
                </div>
            })}
        </div>
    )
}

export default CountryComp