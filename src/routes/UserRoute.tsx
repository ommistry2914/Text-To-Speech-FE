import Layout from '@/Layout'
// import Setting from '@/pages/Setting/Setting'
import Home from '@/pages/User/Home'
// import UserSetting from '@/pages/User/UserSetting'
import DashboardContact from '@/pages/DashboardContact'
import { Route } from 'react-router-dom'

const UserRoutes = () => (
    <Route element={<Layout/>}>
        <Route path='/userDashboard' element={<Home/>}/>
        <Route path='/contactUs' element={<DashboardContact/>}/>
        {/* Temporarily commented out - to be used in future
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/userSetting' element={<UserSetting/>}/>
        */}
    </Route>
)

export default UserRoutes