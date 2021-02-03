type note = {
    id: string,
    title: string,
    body: string,
    imageUrl: string,
    date: Date,
}

type noteState = {
    notes: Array<[]>,
    active: null | note
}

const initialState = {
    notes: [],
    active: null 
}
export const noteReducer = (action, state: noteState = initialState) => {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            return state;
    }
}