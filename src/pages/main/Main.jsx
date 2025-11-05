import React, { useEffect } from 'react';
import styled from "styled-components"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import breakpoints from '../../asset/js/breakpoint'

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
			<Nav currentMenu={'home'}/>

			<div className='mainWrap'>
				<span className='pageTitle'>Hello, I'm <em className='highLight'>SOI</em>.</span>
				<div>
					<span className='desc'>
						I'm a <em className='highLight'>frontend</em> <br /> <em className='highLight'>developer</em>.
						I primarily <br /> work with <em className='highLight'>React</em>, <em className='highLight'>SEO</em>, <br /> and <em className='highLight'>Web Performance</em>.
					</span>
					<Footer />
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
		.pageTitle {
			display: block;	
		}

		.desc {
			display: block;
		}
	}

	@media (max-width: ${breakpoints.mobile_L}) {
		padding: 30px;
		height: calc(100vh - 60px);

		.mainWrap {
			font-size: 1.2rem;
		}
	}

	@media ((min-width: ${breakpoints.mobile_L}) and (max-width: ${breakpoints.mobile_XL})) {
		padding: 30px;
		height: calc(100vh - 60px);

		.mainWrap {
			font-size: 1.5rem;
		}
	}

	@media ((min-width: ${breakpoints.mobile_XL}) and (max-width: ${breakpoints.tablet})) {
		padding: 30px;
		height: calc(100vh - 60px);

		.mainWrap {
			font-size: 2rem;
		}
	}

	@media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.labtop})) {
		.mainWrap {
			font-size: 2.7rem;
		}
	}

	@media ((min-width: ${breakpoints.labtop}) and (max-width: ${breakpoints.desktop})) {
		.mainWrap {
			font-size: 3.7rem;
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		.mainWrap {
			font-size: 4.5rem;
		}
	}
`

export default Main
