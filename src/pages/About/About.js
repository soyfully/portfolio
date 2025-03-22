import React from 'react'
import styled from "styled-components"
import Nav from "../../components/nav"
import breakpoints from '../../config/breakpoint'
import Footer from "../../components/Footer"

function About() {
	return (
		<Wrap className='container'>
			<Nav currentMenu={'about'}/>

			<div className='aboutWrap'>
				<div className='pageTitle'>
					<h1 className='title'>
						Hi there, <br />
						I'm SOI.
					</h1>
					<Footer />
				</div>
				<div className='lists'>
					<span className='name'>
						안녕하세요. <br />
						FE 개발자 김소이 입니다.
					</span>
					<ul>
						<li className='desc'>React 와 Vue.js 를 사용해 재사용 가능한 공통 컴포넌트 개발 및 운영 경험</li>
						<li className='desc'>Webview 개발 경험</li>
						<li className='desc'>ESLint, Prettier 사용 경험</li>
						<li className='desc'>Webpack, Gulp 등 nodeJs 기반 개발 경험</li>
						<li className='desc'>SEO 개선 경험</li>
						<li className='desc'>Lighthouse 활용한 웹 성능 최적화 경험</li>
						<li className='desc'>Git, Jira, Slack, Figma 를 통한 협업 경험</li>
						<li className='desc'>Html, CSS 등 시멘틱 마크업 관련 이해도를 바탕으로 업무에서 활용 가능</li>
						<li className='desc'>반응형 프로젝트 경험 다수</li>
						<li className='desc'>디자이너와의 협업을 통한 모션 인터렉션 경험 다수</li>
					</ul>
					<ul>
						<li className='company'>
							<h2 className='title'>
								SK커뮤니케이션즈 <span>2021.03 ~</span>
							</h2>
							<span className='info'>FE개발팀 / FE / 매니저 </span>
						</li>
						<li className='company'>
							<h2 className='title'>
								이트라이브 <span>2019.01 - 2020.10</span>
							</h2>
							<span className='info'>UIUX개발팀 / 스크립터 / 사원</span>
						</li>
					</ul>
				</div>
			
			</div>
		
			
		</Wrap>
	)
}

const Wrap = styled.div`
	background: #fff;
	padding: 0px 140px 0px 50px;
	width: calc(100% - 190px);
	height: 100vh;
	color: #222;
	letter-spacing: -1px;
	line-height: 1.1;
	font-weight: 900;
	overflow: hidden;

	.aboutWrap {
		display: flex;
		height: 100%;

		.pageTitle {
			padding: 50px 0 50px 0;
			flex: 0.7;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title {
				font-weight: 900;
				margin: 0;
			}
		}
			
		.lists {
			flex: 1;
			overflow-y: scroll;

			&::-webkit-scrollbar {
				display: none;
			}

			.name {
				font-family: "Noto Sans", sans-serif;
				display: block;
				line-height: 1.4;
				margin: 0 0 50px 0;
			}

			ul {
				list-style: none;
				margin: 0;
				padding: 0;

				.desc {
					margin: 0 0 15px 0;
					padding: 0 0 0 20px;
					line-height: 1.5;
					font-weight: 500;
					position: relative;
					font-family: "Noto Sans", sans-serif;
					font-weight: 400;

					&:last-child {
						margin: 0;
					}

					&:before {
						content: '';
						position: absolute;
						left: 6px;
						top: 13px;
						display: block;
						width: 3px;
						height: 3px;
						background: #222;
						border-radius: 100%;
					}

				}

				.company {
					position: relative;
					margin-top: 100px;
					border-top: 3px solid #222;
					padding: 60px 20px 0 20px;

					&:last-child {
						margin-top: 60px;
						border-top: 1px solid #c6c5c5;
					}

					.title {
						margin: 0;
						font-weight: 900;
						display: block;
						word-break: keep-all;
						font-family: "Noto Sans", sans-serif; 
						display: flex;
						justify-content: space-between;
						align-items: center;

						span {
							font-weight: 200;
							font-size: 1rem;
						}
					}
					.info {
						font-weight: 400;
						display: flex;
						gap: 0 10px;
						margin: 10px 0 0 0;
					}
				}
			}
		}
	}

	@media (max-width: ${breakpoints.tablet}) {
		padding: 30px 30px 0 30px;
		width: calc(100% - 60px);

		.aboutWrap {
			flex-direction: column;
			.pageTitle {
				padding: 20px 0 20px 0;
				flex: 0;
				display: block;

				.title {
					font-size: 2.5rem;
				}
			
				.footer {
					display: none;
				}
			}
			.lists {
				padding: 100px 0 100px 0;

				.name {
					font-size: 1.2rem;
					font-weight: 900;
				}

				.desc {
					font-size: 1rem;
					&::before {
						top: 19px !important;
					}
				}
				
				.company {
					.title {
						font-size: 1.2rem;

						span {
							font-size: 0.8rem !important;
						}
					}
					.info {
						font-size: 0.8rem;
					}
				}
			}
		}
	}
	@media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.labtop})) {
		padding: 30px 30px 0 30px;
		width: calc(100% - 60px);

		.aboutWrap {
			flex-direction: column;
			.pageTitle {
				padding: 20px 0 20px 0;
				flex: 0;
				display: block;

				.title {
					font-size: 3.5rem;
				}

				.footer {
					display: none;
				}
			}
			.lists {
				padding: 100px 0 100px 0;

				.name {
					font-size: 1.5rem;
					font-weight: 900;
				}

				.desc {
					font-size: 1.3rem;
					&::before {
						top: 19px !important;
					}
				}
			}
		}
	}

	@media ((min-width: ${breakpoints.labtop}) and (max-width: ${breakpoints.desktop})) {
		.aboutWrap {
			.pageTitle {
				.title {
					font-size: 3.5rem;
				}
			}
			.lists {
				padding: 50px 0 80px 0;

				.name {
					font-size: 1.5rem;
					font-weight: 900;
				}

				.desc {
					font-size: 1.3rem;
					&::before {
						top: 19px !important;
					}
				}
			}
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		.aboutWrap {
			.pageTitle {
				.title {
					font-size: 4rem;
				}
			}
			.lists {
				padding: 50px 0 80px 0;

				.name {
					font-size: 1.7rem;
					font-weight: 900;
				}

				.desc {
					font-size: 1.5rem;
					&::before {
						top: 20px !important;
					}
				}

				.company {
					.title {
						font-size: 1.5rem;
					}
					.info {

					}
				}
			}
		}
	}

`
export default About