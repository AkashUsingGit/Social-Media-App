import { createContext, useReducer } from "react";

export let postList = createContext({})


function postlistReducer(currPostList, action) {
    let newPostList = currPostList;
    if (action.type == "Delete_Post") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.PostId)
    }

    else if(action.type ==  "Add_Post"){
        newPostList=[action.payload,...currPostList]   

    }


    return newPostList;
}

let PostListProvider = ({ children }) => {

    let [usepostList, dispatchPostList] = useReducer(postlistReducer, preList)

    function addPost(Id,Title,Content,Tags) {
        dispatchPostList({
            type : "Add_Post",
            payload : {
                id: Id,
                title:Title ,
                body: Content,
                tags:Tags,
            }
        })

    };

    function delPost(PostId) {
        dispatchPostList({
            type: "Delete_Post",
            payload: {
                PostId,
            }
        })

    };

    return <postList.Provider value={{ usepostList, addPost, delPost }}>{children}</postList.Provider>

}

let preList = [{
    id: 1,
    title: "Enjoying Weekend",
    body: "Off for a weekend vacation",
    tags: ["weather", "weekend", "cofee"]
},
{
    id: 2,
    title: "Indian history",
    body: "Reading modern history of India",
    tags: ["britishers", "FreedomFighters", "brave"]
}
];

export default PostListProvider;