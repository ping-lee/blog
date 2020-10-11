import { COLORS } from '../constants'

const { gray, blue, orange } = COLORS

export default {
    colors: {
        text: 'black',
        background: 'white',
        shadow: gray.lighter,
        link: blue.light,
        lightLink: blue.lighter,
        accentBackground: `rgba(0, 0, 0, 0.05)`,
        gray: gray.regular,
        lightGray: gray.lightest,
        darkGray: gray.default,
        a: orange.default,
        b: blue.dark,
        c: blue.light,
        d: orange.darker,
    }
}