import {postList as postListData} from "../store/post-list-store";
import Post from "./post";
import { useContext } from "react";

function Postlist(){

    let {usepostList}=useContext(postListData)
    return(
        <>
        {usepostList.map((post)=>(
            <Post post={post}></Post>
        ))}
        </>
       
    )
}

export default Postlist;