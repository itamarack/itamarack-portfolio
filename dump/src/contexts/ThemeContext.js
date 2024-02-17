import React, { createContext, useState } from 'react'

import blueThemeboy from '../assets/svg/about/blueTheme-boy.svg'
import blueThemegirl from '../assets/svg/about/blueTheme-girl.svg'
import eduBlue from '../assets/svg/education/eduBlue.svg'
import expBlue from '../assets/svg/experience/expBlue.svg'
import contactsBlue from '../assets/svg/contacts/contactsBlue.svg'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {

    const theme = {
        type: 'light',
        primary: '#545fc4',
        primary400: '#6e76c7',
        primary600: '#3644c9',
        primary80: '#545fc4cc',
        primary50: '#545fc480',
        primary30: '#545fc44d',
        secondary: '#eaeaea',
        secondary70: '#eaeaeab3',
        secondary50: '#eaeaea80',
        tertiary: '#212121',
        tertiary80: '#212121cc',
        tertiary70: '#212121b3',
        tertiary50: '#21212180',
        aboutimg1: blueThemeboy,
        aboutimg2: blueThemegirl,
        eduimg: eduBlue,
        expimg: expBlue,
        contactsimg: contactsBlue
    }

    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider