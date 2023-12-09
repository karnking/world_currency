import SearchBar from './component/SearchBar'
import CountryComp from './component/CountryComp'
import { useSelector } from 'react-redux'
import LoadingComp from './component/LoadingComp'
import ErrorComp from './component/ErrorComp'

const App = () => {
  const isLoading = useSelector(state => state.currency.isLoading)
  const isError = useSelector(state => state.currency.isError)

  return (
    <div className='bg-yellow-100 min-h-screen'>
      <div className='text-center text-3xl uppercase font-extrabold p-4 font-mono'>Boost your currency knowledge</div>
      <div className='flex flex-col gap-10 justify-center items-center '>
        <SearchBar />
        {isError ? <ErrorComp />
          : isLoading ? <LoadingComp />
            : <CountryComp />
        }
      </div>
    </div>
  )
}

export default App
