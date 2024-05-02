import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import Masonry from 'react-responsive-masonry'

import CardGif from '../../components/cardGif'
import { fetchTrendingGifs } from '../../store/gifsSlice'
import getRandomInt from '../../utils/getRandomInt'
const Home = () => {
  const dispatch: any = useDispatch()
  const gifs = useSelector((state: any) => state.gifs.giphys)
  const offset = useSelector((state: any) => state.gifs.offset)
  const fetchData = () => {
    dispatch(fetchTrendingGifs(offset))
  }

  return (
    <>
      {gifs && (
        <div>
          <InfiniteScroll
            dataLength={gifs.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Masonry columnsCount={4} gutter="10px">
              {gifs.map((image: any, i: number) => {
                const num = getRandomInt(4)
                return <CardGif key={i} index={num} image={image} />
              })}
            </Masonry>
          </InfiniteScroll>
        </div>
      )}
    </>
  )
}

export default Home