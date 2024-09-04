
import styles from './Layout.module.scss'
import { Outlet,NavLink, Link } from 'react-router-dom'
import img from '../../assets/logo.png'

const Layout = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to="/" className={styles.logo}>
                    <img src={img} alt=""/>
                </Link>
                    
                <nav>
                    <ul className={styles.linkes}>
                        
                        <li className={styles.link}>
                            <NavLink to="/model">Модель</NavLink>
                        </li>
                        <li className={styles.link}>
                            <NavLink to='/map'>карта</NavLink>
                        </li>
                        <li className={styles.link}>
                            <NavLink to='/statistics'>Статистика</NavLink>
                        </li>
                    </ul>
        
                </nav>
                <div className={styles.link}>
                    <a className={styles.linkSite} href="https://yupest2.pythonanywhere.com/celestial/">Поднебесный</a>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            <div className={styles.mainContainer}>
                <Outlet/>
            </div>
        </main>
    </>
  )
}

export default Layout
