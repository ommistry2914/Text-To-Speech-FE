import Layout from '@/Layout'
import Setting from '@/pages/Setting/Setting'
import Home from '@/pages/User/Home'
import { Route } from 'react-router-dom'

const TemRoute = () => (
    <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/setting' element={<Setting/>}/>
    </Route>
)

export default TemRoute