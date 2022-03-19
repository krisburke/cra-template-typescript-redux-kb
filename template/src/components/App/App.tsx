import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.svg';
import { Counter } from '../Counter';

function App() {
    return (
        <Wrapper>
            <Header>
                <Logo src={logo} alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <Link
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </Link>
                    <span>, </span>
                    <Link
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </Link>
                    <span>, </span>
                    <Link
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </Link>
                    ,<span> and </span>
                    <Link
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </Link>
                </span>
            </Header>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    text-align: center;
`;

const float = keyframes`
     0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${float} infinite 3s ease-in-out;
    }
`;

const Header = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

const Link = styled.a`
    color: rgb(112, 76, 182);
`;

export default App;
