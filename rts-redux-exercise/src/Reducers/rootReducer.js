// root reducer is sufficient for application

const initialState = {
    searches: [
        // {id: '1', title:'this is the title of the 1st fake search in initial state', 'url':'http://www.google.com'},
        // {id: '2', title:'2nd item Title', 'url':'http://www.yahoo.com'},
        // {id: '3', title:'3rd item Title', 'url':'http://www.duckduckgo.com'},
        // {id: '4', title:'Fourth Title', 'url':'http://www.amazon.com'},
        // {id: '5', title:'Another Title. the 5th one', 'url':'http://www.bing.com'}
        // {}
    ],
    previousSearchTerms: [
        // {id: '1', title:'PREVIOUSSEARCHTERMPREVIOUSSEARCHTERM'},
        // {id: '2', title:'PREVIOUSSEARCHTERMPREVIOUSSEARCHTERM'},
    ]
}

const rootReducer = (state = initialState, action) => {
    // createStore() in app.js uses rootReducer() as an argument to determine state. State is determined by examining action.type and
    // returning the new state accordingly. 
    
    // console.log('action: ',action)
    
    if (action.type === 'FETCH_RESULTS_ERROR') {
        console.log('Error fecthing results', action.err);
        return state;
    } 
    
    
    
    
    else if (action.type === 'CREATE_NEW_SEARCH') {
        const lastElement = state.previousSearchTerms.length -1


        // if/else to assign a unique ID number to each item in previousSearchTerms
        if(state.previousSearchTerms.length === 0){
            const newID = 1
            return {
                ...state,
                previousSearchTerms: [...state.previousSearchTerms, { id:newID, title:action.terms}]
            }
        } else {
            const newID = parseInt(state.previousSearchTerms[lastElement].id) + 1
            return {
                ...state,
                previousSearchTerms: [...state.previousSearchTerms, { id:newID, title:action.terms}]
            }
        }
    } 
    
    
    
    else if (action.type === 'FETCH_RESULTS') {
        console.log(action.ApiResponse)
        return {
            ...state,
            searches: action.ApiResponse
        }
    } 
    return state;
}

export default rootReducer;