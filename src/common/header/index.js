import React from 'react'
import './header.scss';

export default function Header() {
    return (
        <>
            <header class="header">
                <nav>
                    <div class="logo">
                        <a href="#">Vine Themes</a>
                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    <ul class="menu">
                        <li><a href="/form">Support</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
