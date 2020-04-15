import React from 'react';
import './MainFooter.scss'
import { Nav } from 'react-bootstrap'
import { FaBook } from 'react-icons/fa';
import { IoIosPaper } from "react-icons/io";
// import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

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
                    <LinkContainer to="/new-entry">
                        <Nav.Link >Add Entry</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </footer >
    );
};

export default MainFooter;


