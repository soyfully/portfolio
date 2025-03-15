import React from 'react'
import { useNavigate } from 'react-router-dom'
// import useSWR from 'swr'
import styled from "styled-components"
import Nav from "../../components/nav"
import breakpoints from '../../config/breakpoint'
import Footer from "../../components/Footer"
import worksLists from "../../asset/json/worksLists"

// const fetcher = (url) => {
// 	return fetch(url, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Accept': 'application/json',
// 		},
// 	}).then((res) => res.json());
// };

function Works() {
	const navigate = useNavigate()
	// const { data, error } = useSWR('/worksLists.json', fetcher)

	return (
		<Wrap className='container'>
			<Nav currentMenu={'works'}/>

			<div className='worksWrap'>
				<div className='pageTitle'>
					<h1 className='title'>
						What I <br /> worked on
					</h1>
					<Footer />
				</div>
				<ul className='lists'>
					<div>
						{worksLists.data.map(({name, stacks, detailId}, index) => {
							return (
								<li key={index} className='list' onClick={()=> {navigate(`/detail/${detailId}`)}}>
									<span className='index'>0{index + 1}</span>
									<h2 className='title'>{name}</h2>
									<span className='stacks'>
										{stacks.map((stack, stackIndex) => (
											<span key={stackIndex} className='stack'> {stack} </span>
										))}
									</span>
									<span className='arrowArea'>
										<span className='arrow'></span>
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
	overflow: hidden;

	.worksWrap {
		display: flex;
		height: 100%;

		.pageTitle {
			padding: 50px 0 50px 0;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title {
				font-weight: 900;
				margin: 0;
			}
		}

		.lists {
			flex: 0.8;
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
				padding: 40px 0 0 80px;
				margin: 100px 0 0 0;
				cursor: pointer;

				&:first-child {
					margin: 0;
				}

				&:hover {
					.arrow {
						animation: shake 0.4s ease-in-out infinite alternate;
					}
				}

				.index {
					position: absolute;
					left: 0;
					top: 42px;
					font-weight: 200;
					font-size: 0.7rem;
				}

				.title {
					margin: 0;
					font-weight: 900;
					display: block;
					word-break: keep-all;
					font-family: "Noto Sans", sans-serif; 
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

				.arrowArea {
					position: relative;
					display: block;
					height: 50px;

					.arrow {
						position: absolute;
						right: 0;
						bottom: 0;
						display: inline-block;
						width: 100px;
						height: 1px;
						background-color: black;
						&::after {
							content: "";
							position: absolute;
							right: 0;
							transform: translate(-13%, -27%) rotate(300deg);
							width: 15px;
							height: 15px;
							border-right: 1px solid black;
						}
					}
				}
				
			}
		}
	}

	@media (max-width: ${breakpoints.tablet}) {
		padding: 30px 30px 0 30px;
		width: calc(100% - 60px);

		.worksWrap {
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
				flex: 1;
				padding: 100px 0 100px 0;
				.list { 
					.title {
						font-size: 1.3rem;
					}
					.stacks {
						.stack {
							font-size: 0.7rem;
						}
					}
				}
			}
		}
	}
	@media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.labtop})) {
		.worksWrap {
			.pageTitle {
				.title {
					font-size: 2.8rem;
				}
			}
			.lists {
				.list { 
					.title {
						font-size: 1.5rem;
					}
					.stacks {
						.stack {
							font-size: 0.8rem;
						}
					}
				}
			}
		}
	}

	@media ((min-width: ${breakpoints.labtop}) and (max-width: ${breakpoints.desktop})) {
		.worksWrap {
			.pageTitle {
				.title {
					font-size: 3.5rem;
				}
			}
			.lists {
				.list { 
					.title {
						font-size: 1.5rem;
					}
					.stacks {
						.stack {
							font-size: 0.8rem;
						}
					}
				}
			}
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		.worksWrap {
			.pageTitle {
				.title {
					font-size: 4rem;
				}
			}
			.lists {
				.list { 
					.index {
						font-size: 1rem;
					}
					.title {
						font-size: 2rem;
					}
					.stacks {
						margin: 60px 0 0 0;
						.stack {
							font-size: 1rem;
							padding: 15px;
						}
					}
					.arrowArea {
						height: 70px;
					}
				}
			}
		}
	}

	@keyframes shake {
		0% { transform: translateX(0); }
		100% { transform: translateX(-20px); }
	}
`
export default Works
