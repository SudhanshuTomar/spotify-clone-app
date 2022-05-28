export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:"BQATP5_yhWvt8vxeWYtWVYDJzeBOhzwY_oocdDdksl0GiHJnWsy5ZZIfCuDvfC3yDVjCnQ1RpA7b3YPKjiUguLMXAVT8RKt208alCc5p6vAYkjKOJ-UEjInPvGt7cYPYjnZstsGcTnSgzoBjFLWlmgcRcqPeidzs4O0yW55rb4MvpLi3",
    
};

const reducer = (state,action) =>{
console.log(action);

switch(action.type){
    case "SET_USER":
        return {
            ...state,
            user: action.user,
        };
    case "SET_TOKEN":
        return{
            ...state,
            token: action.token,
        };
    case "SET_PLAYLISTS":
        return{
            ...state,
            playlists: action.playlists,
        }
    default:
        return state;
}

}

export default reducer;