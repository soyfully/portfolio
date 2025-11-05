import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"
import breakpoints from '../asset/js/breakpoint'
import Footer from "./Footer"

const menu = [
	{'home' :'/'},
	{'about' : '/about'},
	{'works' : '/works'},
	// {'study' : '/study'}
]

function Nav({currentMenu}) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen)
	};

	const filteredMenu = menu.filter(item => !Object.keys(item).includes(currentMenu))

	return (
		<Wrap>
			<button onClick={toggleMenu} className={!isOpen? `icon`: `icon open`}>
				<span />
				<span />
				<span />
			</button>

			<div className={!isOpen? `navWrap`: `navWrap open`}>
				<div className='LinkWrap'>
					{filteredMenu.map((item, index) => {
						const [name, path] = Object.entries(item)[0]
						return (
							<Link key={index} to={path} state={{ from: 'main' }} className='navAnimate navHighlight'>
								{name.toUpperCase()}
								<span>0{index + 1}</span>
							</Link>
						)
					})}
				</div>
				<div>
					<div className='info'>
						<ul>
							<li>KIM SOI</li>
							<li>Frontend Developer</li>
						</ul>
						<ul>
							<li>Seoul, Korea</li>
							<li>+82 010-3799-1219</li>
							<li>soyfully@gmail.com</li>
						</ul>
					</div>
					<Footer />
				</div>
			</div>  
		</Wrap>
	)
}
const Wrap = styled.div`
	.icon {
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
		z-index: 3;

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
	}

	.navWrap {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: absolute;
		background: #c0d57e;
		z-index: 2;
		padding: 50px;
		width: calc(100% - 100px);
		height: calc(100vh - 100px);
		top: 0;
		left: 0;
		transform: translateY(100%);
		transition: transform 500ms ease-in-out;

		&.open {
			transform: translateX(0%);
		}
			
		.LinkWrap {
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
			}
		}
		.info {
			font-size: 1rem;
			font-weight: 400;
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
		}
	}

	@media (max-width: ${breakpoints.tablet}) {
		.icon {
			top: 30px;
			right: 30px;
		}
		.navWrap {
			padding: 30px;
			width: calc(100% - 60px);
			height: calc(100vh - 60px);
			.LinkWrap {
				a {
					font-size: 2.5rem;
					span {
						top: 6px;
						font-weight: 200;
						font-size: 0.7rem;
					}
				}
			}
			.info {
				align-items: flex-start;
				flex-direction: column;
				gap: 20px 0px;
			}
		}
	}

	@media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.labtop})) {
		.navWrap {
			.LinkWrap {
				a {
					font-size: 3rem;
					span {
						top: 9px;
						font-weight: 200;
						font-size: 0.7rem;
					}
				}
			}
		}
	}

	@media ((min-width: ${breakpoints.labtop}) and (max-width: ${breakpoints.desktop})) {
		.navWrap {
			.LinkWrap {
				a {
					font-size: 3.5rem;
					span {
						top: 10px;
						font-weight: 200;
						font-size: 1rem;
						margin-left: 8px;
					}
				}
			}
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		.navWrap {
			.LinkWrap {
				a {
					font-size: 4.5rem;
					span {
						top: 10px;
						font-weight: 200;
						font-size: 1rem;
						margin-left: 10px;
					}
				}
			}
		}
	}
`

export default Nav
