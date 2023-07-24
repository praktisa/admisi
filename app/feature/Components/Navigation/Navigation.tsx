import N from './Navigation.module.css'
import NavigationMenu from './NavigationMenu'
import ButtonLogout from '../Button/ButtonLogout/ButtonLogout'


export default function Navigation() {


    return (
        <>
            <div className={N['layout']}>
                <span className={N['layout__logo']}>
                    <h1>Admisi</h1>
                </span>
                <span className={N['layout__menu']}>
                    <NavigationMenu />
                </span >
                <span className={N['layout__footer']}>
                    <ButtonLogout />
                </span>
            </div >
        </>
    )
}
