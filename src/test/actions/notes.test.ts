import {  AnyAction } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { startNewNote } from '../../actions/note';
import {  TStore } from '../../store/store';

const middlewares = [thunk]

type DispatchExts = ThunkDispatch<TStore, void, AnyAction>;

const mockStore = configureMockStore<TStore, DispatchExts>(middlewares); 

const store = mockStore({
    auth: {
        uid: "TESTING"
    },
    note:{
        notes: [],
        active: null 
    },
    ui:{
        loading: false,
        msgError: null,
    }
})

describe('Action notes', () => {
    test('should create a new note (startNewNote)', async() => {
        store.dispatch(startNewNote());
        expect("asd").toBe(1)
    })
})
