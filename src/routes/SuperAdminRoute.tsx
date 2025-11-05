import Layout from '@/Layout'
import SuperAdminHome from '@/pages/SuperAdmin/SuperAdminHome'
import { Route } from 'react-router-dom'

const SuperAdminRoutes = () => (
    <Route element={<Layout/>}>
        <Route path='/superDashboard' element={<SuperAdminHome/>}/>
    </Route>
)

export default SuperAdminRoutes