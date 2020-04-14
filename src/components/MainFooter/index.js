import React from 'react';
import './MainFooter.scss'
import { Nav } from 'react-bootstrap'
import { FaBook } from 'react-icons/fa';
import { IoIosPaper } from "react-icons/io";


const MainFooter = () => {
    return (
        <footer className="footer" >
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <FaBook />
                    <Nav.Link href="/home">Add Journal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <IoIosPaper />
                    <Nav.Link href="/new-entry">Add Entry</Nav.Link>
                </Nav.Item>
            </Nav>
        </footer >
    );
};

export default MainFooter;


