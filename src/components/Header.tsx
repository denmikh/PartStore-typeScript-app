import * as React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export namespace Header {
  export interface Props {
    //empty
  }
  export interface State {
    //empty
  }
}
export class Header extends React.Component<Header.Props, Header.State > {
    constructor(props) {
      super(props);
    }
  
    render () {
      return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">AutoParts61</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Главная</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Каталог</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">О нас</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Обратная связь</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
      );
    }
  };