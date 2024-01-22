import { useState, useEffect } from "react";

export function useWindowScroll() {
	const [state, setState] = useState({
		x: window.scrollX,
		y: window.scrollY,
	});

	useEffect(() => {
		const handleScroll = () => {
			setState({
				x: window.scrollX,
				y: window.scrollY,
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return state;
}
