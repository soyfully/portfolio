import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"
import breakpoints from '../config/breakpoint'

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const menu = ['MAIN', 'ABOUT', 'WORKS', 'STUDY']

	return (
		<>
			<Icon onClick={toggleMenu} className={!isOpen? ``: `open`}>
				<span />
				<span />
				<span />
			</Icon>

			<Wrap className={!isOpen? ``: `open`}>
				<LinkWrap>
					{menu.map((element, index) => (
						<Link key={index} to={`/${element.toLowerCase().replace(/\s+/g, '-')}`} className='navAnimate navHighlight'>
							{element}
							<span>0{index + 1}</span>
						</Link>
					))}
				</LinkWrap>
				<Footer>
					<ul>
						<li>KIM SOI</li>
						<li>Frontend Developer</li>
					</ul>
					<ul>
						<li>Seoul, Korea</li>
						<li>+82 010-3799-1219</li>
						<li>soyfully@gmail.com</li>
					</ul>
				</Footer>
			</Wrap>  
		</>
	)
}

const Icon = styled.button`
	border: 0;
	margin: 0;
	padding: 0;
	background: none;
	cursor: pointer;
	width: 30px;
	height: 15px;
	position: absolute;
	right: 50px;
	top: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 2;

	span {
		display: block;
		width: 100%;
		height: 3px;
		background: #222;
	}

	&.open {
		span:nth-child(1) {
			transform: translateY(5px) rotate(45deg);
		}

		span:nth-child(2) {
			opacity: 0;
		}

		span:nth-child(3) {
			transform: translateY(-7px) rotate(-45deg);
		}
	}
`
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	position: absolute;
	background: #e9e8e5;
	z-index: 1;
	padding: 50px;
	width: calc(100% - 100px);
	height: calc(100% - 100px);
	top: 0;
	left: 0;
	transform: translateX(100%);
	transition: transform 500ms ease-in-out;

	&.open {
		transform: translateX(0%);
	}
`;

const LinkWrap = styled.div`
	display: flex;
    flex-direction: column;
	a {
		position: relative;
		display: inline-block;
		width: fit-content;
		color: #222;
		text-align: left;
		text-decoration: none;
		line-height: 1;
		margin-bottom: 5px;
		font-weight: 900;
		letter-spacing: -1px;

		&:last-child {
			margin-bottom: 0;
		}

		span {
			position: absolute;
			margin-left: 5px;
		}

		@media (max-width: ${breakpoints.medium})   {
			font-size: 1.3rem;
			span {
				top: 2px;
				font-size: 0.5rem;
				font-weight: 200;
			}
		}

		@media (min-width: ${breakpoints.medium}) {
			font-size: 2rem;
			span {
				top: 4px;
				font-size: 0.7rem;
				font-weight: 200;
			}
		}

		@media (min-width: ${breakpoints.large}) {
			font-size: 3rem;
			span {
				top: 7px;
				font-size: 1rem;
				font-weight: 200;
			}
		}

		@media (min-width: ${breakpoints.extraLarge}) {
			font-size: 4rem;
			span {
				top: 10px;
				font-size: 1.1rem;
				font-weight: 200;
			}
		}

		
	}
`

const Footer = styled.div`
	font-size: 1rem;
	font-weight: 200;
	display: flex;
	align-items: flex-end;

	ul {
		flex: 1;
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			line-height: 1.5
		}
	}
`

export default Nav
