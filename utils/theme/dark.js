import { COLORS } from '../constants'

const { gray, blue, orange } = COLORS

export default {
    colors: {
        text: gray.lighter,
        background: blue.darker,
        shadow: `black`,
        link: blue.lighter,
        lightLink: blue.lighter,
        accentBackground: `rgba(0, 0, 0, 0.7)`,
        gray: gray.light,
        lightGray: gray.darker,
        darkGray: gray.darkest,
        a: orange.darker,
        b: blue.darkest,
        c: blue.lighter,
        d: orange.darkest,
    }
}