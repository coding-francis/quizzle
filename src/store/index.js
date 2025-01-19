import {} from 'jotai'
import {atomWithStorage} from "jotai/utils";

export const category = atomWithStorage('category', null);
export const limit = atomWithStorage('limit', 10);
export const difficulty = atomWithStorage('difficulty', '');
const type = atomWithStorage('type', '');
const question = atomWithStorage('question', '');