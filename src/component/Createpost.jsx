import { useContext, useRef } from "react";
import { postList } from "../store/post-list-store";

let CreatePost = function () {

  let {addPost} = useContext(postList);

  let IdElement=useRef();
  let TitleElement=useRef();
  let ContentElement=useRef();
  let TagsElement=useRef();

  function submitInputs(e){
    e.preventDefault();
    let Id=IdElement.current.value;
    let Title = TitleElement.current.value;
    let Content = ContentElement.current.value;
    let tags = TagsElement.current.value.split(" ");

    IdElement.current.value="";
    TitleElement.current.value="";
    ContentElement.current.value="";
    TagsElement.current.value="";

    addPost(Id,Title,Content,tags)

  }



  return (
    <>
      <form class="CreatePost" onSubmit={submitInputs}>

      <div className="mb-3">
          <label for="id" className="form-label">Enter ID</label>
          <input type="text" ref={IdElement} className="form-control" id="id" placeholder="Enter your ID" />
        </div>


        <div className="mb-3">
          <label for="title" className="form-label">Title</label>
          <input type="text" ref={TitleElement} className="form-control" id="title" placeholder="Enter your Title" />
        </div>

        <div className="mb-3">
          <label for="content" className="form-label">post Content</label>
          <textarea type="text"  ref={ContentElement} row="7" className="form-control" id="content"placeholder="Write more about it" />
        </div>

        <div className="mb-3">
          <label for="tags" className="form-label">Tags</label>
          <input type="text"  ref={TagsElement} className="form-control" id="tags" placeholder="Enter your tags here" />
        </div>
        
        <button type="submit" className="btn btn-primary">POST</button>
      </form>
    </>
  )
}

export default CreatePost;