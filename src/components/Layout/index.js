import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar></Sidebar>
            <div className="App">
                <Outlet></Outlet>
            </div>
        </div>

    )
}

export default Layout