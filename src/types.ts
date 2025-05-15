import { ReactNode } from "react";

export type ChildrenProps = {
	children: ReactNode;
}

export type WeatherApiResponse = {
	name: string;
	weather: {
		main: string;
		description: string;
		icon: string;
	}[];
	main: {
		temp: number;
		feels_like: number;
		temp_max: number;
		temp_min: number;
		humidity: number;
	};
};