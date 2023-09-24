import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header'
import Loading from '../components/LodingSpinar/Loading';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                {
                    navigation.state === "loading" ? <Loading /> : <Outlet />
                }
            </div>
        </div>
    )
}

export default MainLayout