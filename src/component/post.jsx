import { useContext } from "react";
import {postList} from "../store/post-list-store";




let Post = ({ post }) => {

  let {delPost} = useContext(postList)


  return (
    <>
      <div className="card post" style={{ width: "20rem" }}>

        <div className="card-body">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
          onClick={()=>delPost(post.id)}>
            x
            <span class="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>

          {post.tags.map((e) => (
            <span class="badge text-bg-primary tag" >{e}</span>
          ))}



        </div>
      </div>
    </>
  )
}

export default Post;