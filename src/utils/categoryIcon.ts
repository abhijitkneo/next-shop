/* import { ReactNode, createElement } from "react";
import { FaMale, FaFemale, FaGem, FaLaptop, FaBoxOpen } from "react-icons/fa";

export const getCategoryIcon = (category: string): ReactNode => {
	const map: Record<string, ReactNode> = {
		"men's clothing": createElement(FaMale),
		"women's clothing": createElement(FaFemale),
		"jewelery": createElement(FaGem),
		"electronics": createElement(FaLaptop),
	};

  	return map[category.toLowerCase()] || createElement(FaBoxOpen);
}; */

import { FaBox, FaBoxOpen, FaFemale, FaGem, FaLaptop, FaMale } from "react-icons/fa";
import { IconType } from "react-icons";
import { createElement, ElementType, ReactNode } from "react";


const categoryIconMap: Record<string, IconType> = {
	"men's clothing": FaMale,
	"women's clothing": FaFemale,
	"jewelery": FaGem,
	"electronics": FaLaptop,
}

export const getCategoryIcon = (category: string): ReactNode => {
  	const Icon = categoryIconMap[category.toLowerCase()] || FaBoxOpen;
	return createElement(Icon);
}


/* import { ReactNode, createElement } from "react";
import { FaMale, FaFemale, FaGem, FaLaptop, FaBoxOpen } from "react-icons/fa";

export const getCategoryIcon = (category: string): ReactNode => {
	switch (category.toLowerCase()) {
		case "men's clothing":    return createElement(FaMale);
		case "women's clothing":  return createElement(FaFemale);
		case "jewelery":          return createElement(FaGem);
		case "electronics":       return createElement(FaLaptop);
		default:                  return createElement(FaBoxOpen);
	}
}; */