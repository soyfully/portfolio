import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import Nav from "../../components/nav"
import styled from 'styled-components'
import breakpoints from '../../config/breakpoint'
import worksLists from "../../asset/json/worksLists"

function Detail() {
	const navigate = useNavigate()
    const { detailId } = useParams() 

	const numDetailId = Number(detailId) || 0
	const {name, url, descs, year, contribution} = worksLists.data[numDetailId - 1] ?? {}

    return (
        <Wrap className='container'>
			<span className='arrowArea' onClick={()=> {navigate(-1)}}>
				<span className='arrow'></span>
			</span>
            {/* <Nav currentMenu={'works'}/> */}

			<div className='detailWrap'>
				<div className='detail'>
					<div className='textWrap'>
						<h1 className='title'>
							{ name }
						</h1>
						<ul className='desc'>
							{ descs.map((desc, index) => {
								return (
									<li key={ index }>{ desc }</li>
								)
							})}
						</ul>
						<ul className='info'>
							<li>
								Year : { year }
							</li>
							<li>
								Role : FE Development
							</li>
							<li>
								{contribution && `Contribution: ${contribution}`}
							</li>
						</ul>
					</div>
					{url && 
						<a href={url} target="_blank" rel="noopener noreferrer" className='view'>
							view
						</a>
					}
					
				</div>
				<div className='imgWrap'>
					<img src='https://placehold.co/1920x1080' className='img' />
				</div>
			</div>
        </Wrap>
    )
}

const Wrap = styled.div`
	background: #e9e8e5;
	padding: 50px;
	width: calc(100% - 100px);
	height: calc(100vh - 100px);
	color: #222;
	letter-spacing: -1px;
	line-height: 1.1;
	font-weight: 900;

	.arrowArea {
		position: relative;
		display: inline-block;
		width: 80px;
		height: 20px;
		cursor: pointer;

		.arrow {
			position: absolute;
			left: 0;
			bottom: 7px;
			display: inline-block;
			width: 80px;
			height: 2px;
			background: #222;

			&::after {
				content: "";
				position: absolute;
				left: 0;
				transform: translate(-30%, -113%) rotate(-300deg);
				width: 15px;
				height: 15px;
				border-right: 2px solid #222;
			}
		}
	}

	.detailWrap {
		display: flex;
		margin: 50px 0 0 0;
		gap: 0 40px;
		height: calc(100vh - 170px);

		.detail {
			flex: 0.7;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.textWrap {
				.title {
					margin: 0;
					word-break: keep-all;
					font-family: "Noto Sans", sans-serif;
					font-weight: 900;
					line-height: 1.2;
				}

				.desc {
					word-break: keep-all;
					font-family: "Noto Sans", sans-serif;
					margin: 40px 0 0 0;
					line-height: 1.5;
					font-weight: 500;
					padding: 0;
					list-style: none;
					
					li {
						position: relative;
						padding: 0 0 0 20px;

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

				.info {
					list-style: none;
					padding: 0;
					margin: 60px 0 0 0;
					font-family: "Noto Sans", sans-serif;
					font-weight: 400;

					li {
						margin: 0 0 5px 0;

						&:last-child {
							margin: 0;
						}
					}
				}
			}

			.view {
				border-radius: 100%;
				width: 100px;
				height: 100px;
				display: block;
				border: 2px solid #222;
				background: none;
				cursor: pointer;
				margin: 0;
				padding: 0;
				font-size: 0.8rem;
				font-weight: 900;
				text-align: center;
				line-height: 100px;
				color: #222;
				text-decoration: none;
				letter-spacing: 0;
			}
			
		}
		.imgWrap {
			flex: 1;
			align-content: flex-end;

			.img {
				display: block;
				width: 100%;
			}
		}
	}


	@media (max-width: ${breakpoints.tablet}) {
		padding: 30px;
		width: calc(100% - 60px);
		height: calc(100vh - 60px);

		.detailWrap {
			flex-direction: column-reverse;
			margin: 30px 0 0 0;
			gap: 30px 0;
			height: calc(100vh - 120px);
			.detail {
				flex: 1;
				.textWrap {
					.title {
						font-size: 1.5rem;
					}
					.desc {
						font-size: 0.8rem;
					}
				}

				.view {
					position: absolute;
					right: 30px;
					bottom: 30px;
				}
			}

			.imgWrap {
				max-width: 550px;
				flex: none;
				margin: 0 auto;
			}
		}
	}

	@media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.labtop})) {
		.detailWrap {
			flex-direction: column-reverse;
			margin: 30px 0 0 0;
			gap: 30px 0;
			height: calc(100vh - 120px);
			.detail {
				flex: 1;
				.textWrap {
					.title {
						font-size: 2rem;
					}
					.desc {
						font-size: 0.9rem;
					}
				}
				.view {
					position: absolute;
					right: 30px;
					bottom: 30px;
				}
			}
			.imgWrap {
				max-width: 600px;
				flex: none;
				margin: 0 auto;
			}
		}
	}	

	@media ((min-width: ${breakpoints.labtop}) and (max-width: ${breakpoints.desktop})) {
		.detailWrap {
			.detail {
				.textWrap {
					.title {
						font-size: 2.5rem;
					}
				}
			}
			
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		.detailWrap {
			.detail {
				.textWrap {
					.title {
						font-size: 3rem;
					}
					.desc {
						font-size: 1.1rem;
					}
				}
			}
			
		}
	}

`

export default Detail
