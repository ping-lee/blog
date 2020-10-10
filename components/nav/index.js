import { useOnClickOutside } from '../../hooks'
import React, { useRef, useState, useEffect } from 'react'
import { NavDiv, NavLink, NavToggle } from './style'
import { globalHistory } from '@reach/router'

export default function Nav(props) {
    let nav = [
        { title: '物理', url: 'physics'},
        { title: 'ML', url: '/ml'},
        { title: 'Web', url: '/web'},
        { title: '自然', url: '/nature'},
        { title: '博文', url: '/blog'},
        { title: '联系', url: '/contact'},
    ]
    const ref = useRef()
    const [open, setOpen] = useState(false)
    useOnClickOutside(ref, () => open && setOpen(false))
    useEffect(() => globalHistory.listen(() => setOpen(false)), [])
    return (
        <>
        <NavToggle opener open={open} onClick={() => setOpen(true)} />
        <NavDiv ref={ref} open={open} onScroll={e => e.preventDefault()} {...props}>
            <NavToggle open={open} onClick={() => setOpen(false)} />
            {nav.map(({ title, url }) => (
            <NavLink key={url} href={url}>
                {title}
            </NavLink>
            ))}
        </NavDiv>
        </>
    )   
}