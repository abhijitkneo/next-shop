import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/components/common/ProductList";
import HomeCarousel from "@/components/common/HomeCarousel";
import ProductCategories from "@/components/common/ProductCategories";

export default function Home() {
	return (
		<>
			<ProductCategories />
			<ProductList />
		</>
	);
}
