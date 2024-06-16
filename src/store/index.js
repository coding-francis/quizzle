import {} from 'jotai'
import {atomWithStorage} from "jotai/utils";


const category = atomWithStorage('category', '')
const limit = atomWithStorage('limit', '')
const difficulty = atomWithStorage('difficulty', '')
const type = atomWithStorage('type', '')
const question = atomWithStorage('question', '')