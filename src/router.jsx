import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from "./pages/main/Main"
import About from "./pages/about/About"
import Works from "./pages/works/Works"
import Detail from "./pages/works/Detail"
import Study from "./pages/study/Study"
import ToDoList from "./pages/study/toDoList/ToDoList"
import Netflix from "./pages/study/netflix/Netflix"

function Router() {
	let isBack;

	window.onpopstate = () => {
		isBack = true
	}

	const location = useLocation()
	const transitionName = isBack ? 'left' : 'right'

	return (
		<TransitionGroup className={`transitions-wrapper=${transitionName}`} >
			<CSSTransition
				key={location.pathname}
				classNames={transitionName}
				timeout={500}
				onExited={() => {
					isBack = false;
				}}
			>
				<Routes location={location}>
					<Route path="/" element={<Main />} />
					<Route path="/about" element={<About />} />
					<Route path="/works" element={<Works/>} />
						<Route path="/detail/:detailId" element={<Detail/>} />
					<Route path="/study" element={<Study/>}>
						<Route path="toDoList" element={<ToDoList/>} />
						<Route path="netflix" element={<Netflix/>} />
					</Route>
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default Router
