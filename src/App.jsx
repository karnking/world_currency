import React, { useEffect } from 'react'
import SearchBar from './component/SearchBar'
import CountryComp from './component/CountryComp'
import { useSelector, useDispatch } from 'react-redux'
import LoadingComp from './component/LoadingComp'
import { getFlags } from './redux/action'

const App = () => {
  const isLoading = useSelector(state => state.currency.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlags())
  }, [])
  return (
    <div className='flex flex-col gap-10 justify-center items-center min-h-screen'>
      <SearchBar />
      {isLoading ? <LoadingComp /> : <CountryComp />}
    </div>
  )
}

export default App
