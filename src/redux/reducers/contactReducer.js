const initialState = [
    {
        id: 0,
        name: "Dean",
        number: 724751477,
        email: "dare@gmail.com",
    },
    {
        id: 1,
        name: "Sam",
        number: 824751457,
        email: "sam@gmail.com",
    },

];

const contactReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact) => 
            contact.id === action.payload.id? action.payload: contact);
            state = updateState;
            return state;
        default:
             return state;
    }
};

export default contactReducer;
