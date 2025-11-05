import React, { useState, useRef, useEffect } from 'react'
import styled from "styled-components"
import Nav from "../../components/Nav"
import breakpoints from '../../asset/js/breakpoint'
import Footer from "../../components/Footer"
import Scrollicon from "../../components/Scrollicon"

function About() {
	const [showIcon, setShowIcon] = useState(true);
	const iconShown = JSON.parse(sessionStorage.getItem("pageAboutIconShown"));
	
	const listsRef = useRef(null); 

	useEffect(() => {
		const scrollTarget = listsRef.current;
		if (!scrollTarget) return;

		const handleScroll = () => {
			if (scrollTarget.scrollTop > 10) {
				setShowIcon(false);
				scrollTarget.removeEventListener("scroll", handleScroll);
				sessionStorage.setItem("pageAboutIconShown", "true");
			}
		};

		scrollTarget.addEventListener("scroll", handleScroll);

		return () => scrollTarget.removeEventListener("scroll", handleScroll);
	}, []);

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
				<div className='lists' ref={listsRef}>
					{ showIcon && !iconShown && <Scrollicon />}
					<span className='name'>
						안녕하세요. <br />
						FE 개발자 김소이 입니다.
					</span>
					<ul>
						<li className='desc'>React 및 Vue.js 환경에서 재사용 가능한 UI 컴포넌트 설계 및 관리</li>
						<li className='desc'>React Hook을 활용한 상태 관리 및 사이드이펙트 처리</li>
						<li className='desc'>Styled-Components 및 SCSS를 활용한 컴포넌트 스타일링 경험</li>
						<li className='desc'>Axios 및 Fetch API를 통한 RESTful API 통신 구현 경험</li>
						<li className='desc'>ESLint, Prettier 등을 통한 코드 품질 관리 및 일관성 유지</li>
						<li className='desc'>Webpack, Gulp 등 Node.js 기반 빌드 환경 설정</li>
						<li className='desc'>레거시 코드 기반 프로젝트의 유지보수 및 신규 기능 개발 경험</li>
						<li className='desc'>Lighthouse를 활용한 웹 성능 진단 및 최적화 경험 (이미지 최적화, 렌더링 개선 등)</li>
						<li className='desc'>Git, Jira, Slack, Figma 등을 활용한 협업 및 업무 프로세스 경험</li>
						<li className='desc'>HTML5, CSS3, JavaScript 등 마크업 및 기본 웹 표준에 대한 이해와 실무 적용 능력 보유</li>
						<li className='desc'>다양한 디바이스 대응을 위한 반응형 웹 프로젝트 다수 참여</li>
						<li className='desc'>디자이너와의 협업을 통해 인터랙션 및 모션 구현 경험 다수</li>
					</ul>
					<ul>
						<li className='company'>
							<h2 className='title'>
								SK커뮤니케이션즈 <span>2021.03 ~ 2025.04</span>
							</h2>
							<span className='info'>FE개발팀 / FE / 매니저 </span>
						</li>
						<li className='company'>
							<h2 className='title'>
								이트라이브 <span>2019.01 - 2020.10</span>
							</h2>
							<span className='info'>UIUX개발팀 / 퍼블리셔 / 사원</span>
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
			position: relative;

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