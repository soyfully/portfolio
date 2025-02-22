import React, { useEffect } from 'react';
import styled from "styled-components"
import Nav from "../../components/nav"
import breakpoints from '../../config/breakpoint'

function Main() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const highLights = document.querySelectorAll('.highLight');

		for (let i = 0; i < highLights.length; i++) {
			setTimeout(() => {
				highLights[i].classList.add('animate');
			}, i * 150);
		}
	}, []);

	return (
		<Wrap>
			<Nav currentMenu={'main'}/>

			<div className='mainWrap'>
				<span className='pageTitle'>Hello, I'm <em className='highLight'>SOI</em>.</span>
				<div>
					<span className='desc'>
						I'm a <em className='highLight'>frontend</em> <br /> <em className='highLight'>developer</em>.
						I primarily <br /> work with <em className='highLight'>React</em>, <em className='highLight'>SEO</em>, <br /> and <em className='highLight'>Web Performance</em>.
					</span>
					<span className='footer'>
						© 2025 KIM SOI. All rights reserved.
					</span>
				</div>
			</div>
		</Wrap>
	)
}

const Wrap = styled.div`
	position: relative;
	padding: 50px;
	height: calc(100vh - 100px);
	background: rgb(252 218 106);
	color: #222;
	letter-spacing: -1px;
	line-height: 1.1;
	font-weight: 900;

	em {
		font-style: normal;
	}

	.mainWrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		@media (max-width: ${breakpoints.small}) {
			font-size: 1.3rem;
		}

		@media (min-width: ${breakpoints.small}) {
			font-size: 2rem;
		}

		@media (min-width: ${breakpoints.medium}) {
			font-size: 2.5rem;
		}

		@media (min-width: ${breakpoints.large}) {
			font-size: 3.5rem;
		}

		@media (min-width: ${breakpoints.extraLarge}) {
			font-size: 4.5rem;
		}
		
		.pageTitle {
			display: block;	
		}

		.desc {
			display: block;
		}
		
		.footer {
			display: block;
			height: auto;
			font-weight: 200;
			font-size: 1rem;

			@media (max-width: ${breakpoints.small}) {
				font-size: 0.6rem;
			}

			@media (min-width: ${breakpoints.small}) {
				font-size: 0.7rem;
			}

			@media (min-width: ${breakpoints.medium}) {
				font-size: 0.8rem;
			}

			@media (min-width: ${breakpoints.large}) {
				font-size: 0.9rem;
			}

			@media (min-width: ${breakpoints.extraLarge}) {
				font-size: 1rem;
			}
		}
	}
`

export default Main
