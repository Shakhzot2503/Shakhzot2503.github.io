import React, {useEffect, useRef} from 'react'
import useLocalStorage from '../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'
import sun from "../../img/icons/sun.svg"
import moon from "../../img/icons/moon.svg"
import "./styles.css"

export default function BtnDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())
    const btnRef = useRef();

    useEffect(() => {
        if(darkMode === 'dark'){
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        }else{
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            })
    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        } );
    };

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}
