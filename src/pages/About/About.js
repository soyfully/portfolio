import React from 'react'
import styled from "styled-components"
import Nav from "../../components/nav"
import breakpoints from '../../config/breakpoint'

function About() {
	return (
		<Wrap className='container'>
			<Nav currentMenu={'about'}/>

			<div className='aboutWrap'>
				<div className='pageTitle'>
					<h1 className='title'>
						Hi, <br />
						I'm SOI.
					</h1>
				</div>
				<ul className='lists'>
					<li className='list'>
						<h2 className='title'>
							SK커뮤니케이션즈
						</h2>
						<span className='info'>FE개발팀 / 매니저 <span>2021.03 ~</span></span>
						<div>
							<div className='work'>
								<h5>네이트 썰 커뮤니티 운영 <span className='date'>2023.01 ~</span></h5>
								<ul>
									<li>React와 Typescript를 사용해 각종 컴포넌트 개발</li>
									<li>React hook을 활용한 상태 관리</li>
									<li>ESLint, Prettier 사용하여 코드 퀄리티 및 일관성 있는 코드 작성</li>
									<li>UI/UX 개선 및 운영 (SEO, 접근성 등)</li>
									<li>Git을 이용한 코드 형상 관리</li>
								</ul>
							</div>
							<div className='work'>
								<h5>네이트 뉴스 운영 <span className='date'>2021.03 ~</span></h5>
								<ul>
									<li>UI/UX 개선 및 운영 (SEO, 접근성, 성능 최적화 등)</li>
									<li>pug, scss 와 같은 전처리기를 이용해 모듈화 하여 재사용성 높힘</li>
									<li>레거시 소스 리팩토링 및 공통화</li>
									<li>크롬 버전 업데이트 대응</li>
									<li>소나 큐브를 활용한 코드 품질 관리 개선</li>
									<li>웹 접근성 준수 및 마크 획득</li>
									<li>크로스 브라우징 대응</li>
								</ul>
							</div>
							<div className='work'>
								<h5>SKT 협업 스마트홈 개발 <span className='date'>2021.08 - 2022.02</span></h5>
								<ul>
									<li>webview 환경 개발 경험</li>
									<li>Vue.js와 Vue Router를 사용하여 사용성과 유지보수 고려해 컴포넌트 개발</li>
									<li>Vuex를 활용한 상태 관리</li>
									<li>ESLint, Prettier 사용하여 코드 퀄리티 및 일관성 있는 코드 작성</li>
									<li>Git을 이용한 코드 형상 관리</li>
								</ul>
							</div>
						</div>
					</li>
					<li className='list'>
						<h2 className='title'>
							이트라이브
						</h2>
						<span className='info'>스크립터 / 사원 <span>2019.01 - 2020.10</span></span>
						<div>
							<div className='work'>
								<h5>e편한세상 웹사이트 구축 <span className='date'>2020.04 - 2020.10</span></h5>
								<ul>
									<li>퍼블리싱부터 javascript 및 개발 comm까지 전담</li>
									<li>lottie, GSAP를 활용한 모션 제작</li>
								</ul>
							</div>
							<div className='work'>
								<h5>동아제약 OTC 웹사이트 구축 <span className='date'>2019.10 - 2020.03</span></h5>
								<ul>
									<li>퍼블리싱부터 javascript 및 개발 comm까지 전담</li>
									<li>lottie, GSAP를 활용한 모션 제작</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			
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
			list-style: none;
			margin: 0;
			overflow-y: scroll;


			&::-webkit-scrollbar {
				display: none;
			}

			.list {
				position: relative;
				margin-top: 100px;
				border-top: 3px solid #222;
				padding: 40px 20px 0 20px;

				&:first-child {
					margin-top: 0;
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
				}
				.info {
					font-weight: 400;
					display: flex;
					/* justify-content: space-between; */
					gap: 0 10px;
					margin: 10px 0 0 0;
				}
				.work {
					border-top: 0.5px solid #222;
					padding: 60px 20px 0;
					margin: 80px 0 0 0;
					&:first-child {
						margin: 60px 0 0 0;
					}

					h5 {
						margin: 0 0 20px 0;
						display: flex;
						justify-content: space-between;
						align-items: center;
						gap: 0 20px;
						font-weight: 900;
						
						.date {
							font-weight: 200;
						}
					}

					ul {
						list-style: none;
						padding: 0;

						li {
							margin: 0 0 10px 0;
							padding: 0 0 0 20px;
							line-height: 1.5;
							font-weight: 500;
							position: relative;

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
			
			}
			.lists {
				padding: 100px 0 100px 0;
				.list { 
					.title {
						font-size: 1.3rem;
					}
					.info {
						font-size: 0.8rem;
					}
					.work {
						h5 {
							font-size: 1.1rem;

							.date {
								font-size: 0.8rem;
							}
						}
						ul {
							li {
								font-size: 0%.9;
							}
						}
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
			}
			.lists {
				padding: 100px 0 100px 0;

				.list {
					.title {
						font-size: 1.5rem;
					}
					.info {
						font-size: 0.8rem;
					}
					.work {
						h5 {
							font-size: 1.2rem;

							.date {
								font-size: 0.8rem;
							}
						}
						ul {
							li {
								font-size: 1rem;
							}
						}
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

				.list { 
					.title {
						font-size: 1.5rem;
					}
					.info {
						font-size: 0.8rem;
					}
					.work {
						h5 {
							font-size: 1.2rem;

							.date {
								font-size: 0.8rem;
							}
						}
						ul {
							li {
								font-size: 1rem;
							}
						}
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
				.list { 
					padding: 50px 40px 0 40px;
					.title {
						font-size: 2rem;
					}
					.info {
						font-size: 1em;
					}
					.work {
						padding: 80px 20px 0;
						&:first-child {
							margin: 80px 0 0 0;
						}

						h5 {
							font-size: 1.7rem;
							margin: 0 0 25px 0;

							.date {
								font-size: 1rem;
							}
						}
						ul {
							li {
								font-size: 1.3rem;
								margin: 0 0 20px 0;
								&::before {
									top: 18px;
								}
							}
						}
					}
				}
			}
		}
	}

`
export default About