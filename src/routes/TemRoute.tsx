import Layout from '@/Layout'
import Home from '@/pages/User/Home'
import { Route } from 'react-router-dom'

const TemRoute = () => (
    <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
    </Route>
)

export default TemRoute