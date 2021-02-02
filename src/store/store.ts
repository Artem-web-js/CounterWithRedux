import { createStore } from 'redux';
import { counterReducer } from './counter-reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния

// непосредственно создаём store
export const store = createStore(counterReducer);

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof counterReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;