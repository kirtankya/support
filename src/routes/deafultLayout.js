import React from 'react'
import Header from '../common/header'
import { Outlet } from 'react-router-dom'

export default function DeafultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
