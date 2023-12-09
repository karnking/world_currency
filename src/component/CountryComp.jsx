import { useSelector } from 'react-redux'

const CountryComp = () => {
    const countries = useSelector(state => state.currency.countries)
    return (
        <div>
            {countries?.map(ele=><p key={ele.name.common}>
                {ele.name.common}
            </p>)}
        </div>
    )
}

export default CountryComp