//import {stringLength} from './modules/index.js';

const stringLength = require('./index.js')

test ('testing string', ()=> {
    let string = "Itsfriday"
    stringLength(string)
    expect(string.length).toBe(9)
})