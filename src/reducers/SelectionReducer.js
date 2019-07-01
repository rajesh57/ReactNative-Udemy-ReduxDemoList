
// Selected row or not 
// Reducers always state and action.
export default (state = null, action) =>{

    console.log ("Actions ==",action);

    switch (action.type) {

        case 'select_library':
            return action.payload;
        
        default:
            return state;    // return last state 
    }
};
