import React, { useState, useCallback } from 'react'
import { useTransition } from 'react-spring'
import { Box, Div, Icons, Notification } from './styles'

const modes = {
  light: [`日间`, Icons.Sun,],
  dark: [`夜览`, Icons.Moon,],
  auto: [`自动`, Icons.SunMoon],
}

export default function DarkToggle({ size = `1em`, ...rest }) {
  const [colorMode, set] = useState('light')
  const onClick = useCallback(() => set(state => state == 'auto' ? 'dark' : (state == 'dark' ? 'light': 'auto')), [])
  //  
  const transitions = useTransition(colorMode, null, {
    initial: null,
    from: { opacity: 0, transform: `translateX(100%)` },
    enter: { opacity: 1, transform: `translateX(0%)` },
    leave: { opacity: 0, transform: `translateX(-100%)` },
  })

  return (
    <Box {...rest}>
      {transitions.map(({ item, props: style, key }) => {
        // Since we can't know the value of media queries or localStorage during SSR,
        // defer any rendering of the toggle until after rehydration on the client.
        if (!item) return null
        const [title, Icon] = modes[item]
        return (
          <Div key={key} style={style}>
            <Icon size={size} title={title} onClick={onClick} />
            <Notification>{title}</Notification>
          </Div>
        )
      })}
    </Box>
  )
}
