import Layout from '@/Layout'
import Setting from '@/pages/Setting/Setting'
import Home from '@/pages/User/Home'
import UserSetting from '@/pages/User/UserSetting'
import { Route } from 'react-router-dom'

const UserRoutes = () => (
    <Route element={<Layout/>}>
        <Route path='/userDashboard' element={<Home/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/userSetting' element={<UserSetting/>}/>
    </Route>
)

export default UserRoutes