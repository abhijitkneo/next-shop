import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/components/common/ProductList";

export default function Home() {
	return (
		<div >
			<ProductList />
		</div>
	);
}
