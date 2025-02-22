import React from 'react'
import styled from "styled-components"
import Nav from "../../components/nav"
import breakpoints from '../../config/breakpoint'

const worksLists = [
	{'작업한 것 이름 및 어쩌구 ,,' : ['React', 'style-components', 'Git']},
	{'어쩌구 저쩌궁 ... 강동은 바보' : ['React', 'style-components', 'Git', 'adsfadsfasdf', 'asdfasdfasdfa','React', 'style-components', 'Git', 'adsfadsfasdf', 'asdfasdfasdfa']},
	{'힝구 힝구 하기 시러용용ㅇ옹' : ['React', 'style-components', 'Git', 'adsfadsfasdf', 'asdfasdfasdfa']},
	{'스크롤 해서 아래쪽으로 쮺뀨ㅉㅠㅉ' : ['React', 'style-components', 'Git', 'adsfadsfasdf', 'asdfasdfasdfa']}
]

function works() {
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
						{worksLists.map((item, index) => {
							const [title, stacks] = Object.entries(item)[0]
							return (
								<li key={index} className='list'>
									<span className='index'>0{index + 1}</span>
									<span className='title'>{title}</span>
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
	padding: 50px 140px 50px 50px;
	width: calc(100% - 190px);
	height: calc(100vh - 100px);
	color: #222;
	letter-spacing: -1px;
	line-height: 1.1;
	font-weight: 900;

	.worksWrap {
		display: flex;
		height: 100%;

		.pageTitle {
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
			padding: 0;
			overflow-y: scroll;
			&::-webkit-scrollbar {
				display: none;
			}

			.list {
				position: relative;
				border-top: 3px solid #222;
				padding: 20px 0 0 80px;
				margin: 80px 0 0 0;
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
export default works
