import N from './Navigation.module.css'
import NavigationMenu from './NavigationMenu'



export default function Navigation(
    // { children }: { children: React.ReactNode }
) {


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

                </span>
            </div >
        </>
    )
}
