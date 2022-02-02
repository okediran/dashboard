 const themeReducer = (state=true, action) =>{
    switch (action.type) {
        case 'THEME':
            return !state;  
        default:
            return state;
    }
};

export default themeReducer;
