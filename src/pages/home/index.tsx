import { useEffect } from 'react'

import GifsContainer from '../../components/gifsContainer'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchTrendingGifs } from '../../store/gifsSlice'

const Home = () => {
  const dispatch = useAppDispatch()

  const { offset, trendingGifs, error } = useAppSelector(
    (state) => state.trendingGifs,
  )

  const fetchData = () => {
    dispatch(fetchTrendingGifs(offset))
  }

  useEffect(() => {
    if (trendingGifs.length) return
    const promise = dispatch(fetchTrendingGifs(0))
    return () => {
      promise?.abort()
    }
  }, [])

  return (
    <>
      <GifsContainer
        fetchData={fetchData}
        gifsArray={trendingGifs}
        error={error}
        directory={'gifs'}
        opacity={true}
      />
    </>
  )
}

export default Home
