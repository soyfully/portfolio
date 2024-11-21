import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from "./pages/main/main"
import About from "./pages/about/about"
import Works from "./pages/works/works"
import Study from "./pages/study/study"
import ToDoList from "./pages/study/toDoList/toDoList"
import Netflix from "./pages/study/netflix/netflix"

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
