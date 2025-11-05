import Layout from '@/Layout'
import Home from '@/pages/User/Home'
import { Route } from 'react-router-dom'

const UserRoutes = () => (
    <Route element={<Layout/>}>
        <Route path='/userDashboard' element={<Home/>}/>
    </Route>
)

export default UserRoutes