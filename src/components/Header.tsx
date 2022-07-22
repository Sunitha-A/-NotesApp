import * as React from 'react';
import {Navbar} from 'react-bootstrap'
import { Container } from 'react-bootstrap';

interface IHeaderProps{

};

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <Navbar fixed ="top" bg="dark" variant="dark">
        <Container>
             <Navbar.Brand>
                <h2>React Typescript and Bootstrap</h2>
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Header;
