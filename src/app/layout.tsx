import type { Metadata } from "next";
import '@/styles/global.scss';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "react-bootstrap";
import { SearchProvider } from "@/context/SearchContext";


export const metadata: Metadata = {
	title: "Next Shop",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
				rel="stylesheet"
				/>
			</head>
			<body>
				<SearchProvider>
					<Header />
					<main>
						<Container>
							{children}
						</Container>
					</main>
					<Footer />
				</SearchProvider>
			</body>
		</html>
	);
}
