import React, {useEffect, useState} from 'react'
import styled from "styled-components"

export default function Scrollicon() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 800);
        return () => clearTimeout(t);
    }, []);

    return (
        <Icon className={`fade ${show ? 'show' : ''}`}>
            <div className="mouse" aria-hidden="true">
                <div className="mouse-wheel"></div>
            </div>
            <span className="arrow">
                <span className="arrow-down"></span>
            </span>
        </Icon>
    )
}

const Icon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(255,255,255,0);
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);

    &.fade {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.8s ease;
        &.show {
            opacity: 1;
            visibility: visible;
        }
    }

    .mouse{
        width: 30px;
        height: calc(30px * 1.4);
        border-radius: 22px;
        border: 3px solid rgba(0,0,0,0.9);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 6px;
        opacity: .95;
        .mouse-wheel{
            width: 4px;
            height: 10px;
            background:rgba(0,0,0,0.9);
            border-radius: 30%;
            animation: wheel-move 1.6s infinite;
        }
    }

    @keyframes wheel-move{
        0%   { transform: translateY(0); opacity: 0; }
        10%  { opacity: 1; }
        50%  { transform: translateY(10px); opacity: 1;}
        90%  { opacity: 0; }
        100% { transform: translateY(0); opacity: 0; }
    }

    .arrow {
        display: inline-block;
        animation: arrow-bounce 1.6s infinite;
        .arrow-down {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-bottom: 3px solid rgba(0,0,0,0.9);
            border-right: 3px solid rgba(0,0,0,0.9);
            transform: rotate(45deg);
        }
    }

    @keyframes arrow-bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(6px); }
        100% { transform: translateY(0); }
    }
`


