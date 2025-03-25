import AddPostForm from './features/post/AddPostForm.jsx'
import PostLists from './features/post/postList.jsx'
import SinglePostpage from './features/post/SinglePostpage.jsx'
import EditPostForm from './features/post/EditPostForm.jsx'
import UserList from './features/user/UserList.jsx'
import UserPage from './features/user/UserPage.jsx'
import Layout from './components/Layout.jsx'
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<PostLists/>}/>

        <Route path='post'>
          <Route index element={<AddPostForm/>}/>
          <Route path=':postId' element={<SinglePostpage/>}/>
          <Route path='edit/:postId' element={<EditPostForm/>}/>
        </Route>

        <Route path='user'>
          <Route index element={<UserList/>}/>
          <Route path=':userId' element={<UserPage/>}/>
        </Route>     

        <Route path='*' element={<Navigate to='/' replace/>}/>     
        
      </Route>
    </Routes>
  )
}

export default App