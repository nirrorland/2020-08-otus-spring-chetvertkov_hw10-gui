import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Collapse} from 'react-bootstrap';

export class Header extends React.Component {

    render() {
        return (
            <header>
				<Navbar bg="primary" variant="light">
					<Navbar.Brand href="/">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/Book">Book</Nav.Link>
						<Nav.Link href="/Author">Author</Nav.Link>
						<Nav.Link href="/Genre">Genre</Nav.Link>
					</Nav>

				</Navbar>
            </header>
        )
    }
}