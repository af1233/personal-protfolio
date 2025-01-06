// ThemeToggle.tsx
"use client";

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie for handling cookies
import './theme-toggle.css'; // Import the CSS file

interface ThemeToggleProps {
	initialTheme: 'dark' | 'light';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ initialTheme }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(initialTheme === 'dark');

	// Toggle theme and save preference in cookies
	const toggleTheme = () => {
		const newTheme = isDarkTheme ? 'light' : 'dark';
		setIsDarkTheme(!isDarkTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		Cookies.set('theme', newTheme, { expires: 365 }); // Save theme in cookies for 1 year
	};

	// Apply initial theme on component mount
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', initialTheme);
		Cookies.set('theme', initialTheme, { expires: 365 }); // Ensure the theme is saved in cookies
	}, [initialTheme]);

	return (
		<div className="toggle-wrapper">
			<label>
				<input
					className="toggle-checkbox"
					type="checkbox"
					checked={isDarkTheme}
					onChange={toggleTheme}
				/>
				<div className="toggle-slot">
					<div className="sun-icon-wrapper">
						<svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="5" fill="#ffbb52" />
							<line x1="12" y1="1" x2="12" y2="3" stroke="#ffbb52" strokeWidth="2" />
							<line x1="12" y1="21" x2="12" y2="23" stroke="#ffbb52" strokeWidth="2" />
							<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#ffbb52" strokeWidth="2" />
							<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#ffbb52" strokeWidth="2" />
							<line x1="1" y1="12" x2="3" y2="12" stroke="#ffbb52" strokeWidth="2" />
							<line x1="21" y1="12" x2="23" y2="12" stroke="#ffbb52" strokeWidth="2" />
							<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#ffbb52" strokeWidth="2" />
							<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#ffbb52" strokeWidth="2" />
						</svg>
					</div>
					<div className="toggle-button"></div>
					<div className="moon-icon-wrapper">
						<svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								fill="white"
								d="M21.75 15.5A9.25 9.25 0 1110.5 2.25a7.25 7.25 0 0011.25 13.25z"
							/>
						</svg>
					</div>
				</div>
			</label>
		</div>
	);
};

export default ThemeToggle;
