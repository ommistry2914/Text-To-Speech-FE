import Layout from '@/Layout'
// import Setting from '@/pages/Setting/Setting'
import SuperAdminHome from '@/pages/SuperAdmin/SuperAdminHome'
// import SuperAdminSetting from '@/pages/SuperAdmin/SuperAdminSetting'
import DashboardContact from '@/pages/DashboardContact'
import { Route } from 'react-router-dom'

const SuperAdminRoutes = () => (
    <Route element={<Layout/>}>
        <Route path='/superDashboard' element={<SuperAdminHome/>}/>
        <Route path='/contactUs' element={<DashboardContact/>}/>
        {/* Temporarily commented out - to be used in future
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/superAdminSetting' element={<SuperAdminSetting/>}/>
        */}
    </Route>
)

export default SuperAdminRoutes