import { useEffect, useState } from 'react'

import { categories } from '../../constants'
import s from './index.module.scss'
import SearchContainer from './searchContainer'

const Header = () => {
  const [width, setWidth] = useState('firstWidth')
  const [headerPosition, setHeaderPosition] = useState('')
  const [logoPosition, setLogoPosition] = useState('firstPosition')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setWidth('secondWidth')
        setHeaderPosition('secondHeaderPosition')
        setLogoPosition('secondLogoPosition')
      } else {
        setWidth('firstWidth')
        setHeaderPosition('firstHeaderPosition')
        setLogoPosition('firstLogoPosition')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <header className={`${s.header} ${s[headerPosition]}`}>
        <div style={{ display: 'flex' }}>
          <img
            className={s[logoPosition]}
            src="/images/giphyLogo.png"
            alt=""
            width={170}
            height={50}
          />
          <ul className={s.menu}>
            {categories.map((item: string) => (
              <li key={item}>
                <button className={`${s.button} ${s[item.toLowerCase()]}`}>
                  <h2>{item}</h2>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <SearchContainer width={width} />
      </header>
      <div className={s.fakeDiv}></div>
    </>
  )
}

export default Header