import { useState, useEffect } from 'react'

export const useDarkMode = () => {
    const [colorMode, set] = useState('light')
    function setColorMode() {
        set(state => state == 'auto' ? 'dark' : (state == 'dark' ? 'light': 'auto'))
    }
    useEffect(() => {
        console.log('efff')
    })
    return [colorMode, setColorMode]
}