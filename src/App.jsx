import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header1'
import Sidebar from './component/SideBar2'
import Footer from './component/Footer3'
import Postlist from './component/Postlist'
import CreatePost from './component/Createpost'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'

function App() {

  let [SelectTab,setSelectTab] =useState("home");

  function SelectHome(){
    setSelectTab("home")
  }

  function SelectCreatePost(){
    setSelectTab("createPost")
  }

  return (
    <PostListProvider>
    <div className='div-container'>
      <Sidebar SelectHome={SelectHome} SelectCreatePost={SelectCreatePost} SelectTab={SelectTab}></Sidebar>
      <div className="div-container2">
        <Header></Header>
        {SelectTab==="home" ? <Postlist ></Postlist>: <CreatePost ></CreatePost>}
        
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App;
