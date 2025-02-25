import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Nav from "../../components/nav"
import breakpoints from '../../config/breakpoint'

const worksLists = [
	{
		name : '네이트 썰 커뮤니티 운영',
		url : 'https://m.ssul.nate.com/',
		stacks : ['React', 'Typescript','ESLint', 'Prettier', 'style-components', 'Git', 'Figma'],
		detailId : 'work_1' ,
	},
	{
		name : '네이트 PC 뉴스 운영',
		url : 'https://news.nate.com/', 
		stacks : ['SEO', 'A11Y', 'Web performance', 'Pug', 'SCSS', 'Svn', 'Figma'],
		detailId : 'work_2'
	},
	{
		name : 'SKT NUGU 스마트홈 서비스 개발',
		stacks : ['webview', 'Vue.js', 'Vuex','ESLint', 'Git', 'Prettier', 'Git', 'Figma'],
		detailId : 'work_3'
	},
	{
		name : 'e편한세상 웹사이트 구축',
		url : 'https://www.elife.co.kr/Mnmn_main.action',
		stacks : ['Pug', 'Scss', 'lottie', 'GSAP', 'Git',' A11Y', 'Web performance'],
		detailId : 'work_4'
	},
	{
		name : '동아제약 OTC 웹사이트 구축',
		url : 'https://dpharm.co.kr/',
		stacks : ['Pug', 'Scss', 'lottie', 'GSAP', 'Git', 'A11Y', 'Web performance'],
		detailId : 'work_5'
	}
]

function Works() {
	const navigate = useNavigate()

	return (
		<Wrap className='container'>
			<Nav currentMenu={'works'}/>

			<div className='worksWrap'>
				<div className='pageTitle'>
					<span>
						What I <br /> worked on
					</span>
				</div>
				<ul className='lists'>
					<div>
						{worksLists.map(({name, stacks, detailId}, index) => {
							return (
								<li key={index} className='list' onClick={()=> {navigate(`/detail/${detailId}`)}}>
									<span className='index'>0{index + 1}</span>
									<span className='title'>{name}</span>
									<span className='stacks'>
										{stacks.map((stack, stackIndex) => (
											<span key={stackIndex} className='stack'> {stack} </span>
										))}
									</span>
								</li>
							)
						})}
					</div>
				</ul>
			</div>
		
			
		</Wrap>
	)
}

const Wrap = styled.div`
	background: #9bcffe;
	padding: 0px 140px 0px 50px;
	width: calc(100% - 190px);
	height: 100vh;
	color: #222;
	letter-spacing: -1px;
	line-height: 1.1;
	font-weight: 900;

	.worksWrap {
		display: flex;
		height: 100%;

		.pageTitle {
			padding: 50px 0 0 0;
			flex: 1;
			@media (max-width: ${breakpoints.small}) {
				font-size: 1;
			}

			@media (min-width: ${breakpoints.small}) {
				font-size: 1.5rem;
			}

			@media (min-width: ${breakpoints.medium}) {
				font-size: 2rem;
			}

			@media (min-width: ${breakpoints.large}) {
				font-size: 2.5rem;
			}

			@media (min-width: ${breakpoints.extraLarge}) {
				font-size: 3rem;
			}
		}

		.lists {
			flex: 1;
			list-style: none;
			margin: 0;
			padding: 50px 0 50px 0;
			overflow-y: scroll;
			&::-webkit-scrollbar {
				display: none;
			}

			.list {
				position: relative;
				border-top: 3px solid #222;
				padding: 20px 0 0 80px;
				margin: 80px 0 0 0;
				cursor: pointer;

				&:first-child {
					margin: 0;
				}

				.index {
					position: absolute;
					left: 0;
					font-weight: 200;
					font-size: 0.7rem;
				}

				.title {
					display: block;
					font-family: "Noto Sans", sans-serif;
					font-size: 1.5rem;    
				}

				.stacks {
					display: flex;
					flex-wrap: wrap;
					gap: 10px 10px;
					margin: 40px 0 0 0;
					
					.stack {
						border: 1px solid #222;
						border-radius: 100px;
						padding: 10px;
						font-weight: 400;
						font-size: 0.8rem;
					}
				}
			}
		}
	}
`
export default Works
