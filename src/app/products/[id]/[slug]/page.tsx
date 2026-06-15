import ProductRatings from "@/components/common/ProductRatings";
import { getProductById } from "@/services/ProductService";
import { Button, Col, Row } from "react-bootstrap";

type Props = {
	params: Promise<{
		slug: string,
		id: string
	}>
}

export default async function ProductDetailsPage({params}: Props) {
	const {id} = await params;
	const product = await getProductById(id);
	console.log(product, '+++ single product');

	return (
		<section className="my-3">
			<Row>
				<Col md={3}>
					<div className="bg-white rounded-3 p-3 border border-dark border-opacity-10">
						<figure className="m-0 bg-dark bg-opacity-10 rounded-3 p-3">
							<img src={product.image} alt="" className="img-fluid" />
						</figure>
					</div>
				</Col>
				<Col md={9}>
					<div className="bg-white rounded-3 p-3 border border-dark border-opacity-10 h-100">
						<span className="d-inline-block rounded-2 bg-primary-subtle text-uppercase small fw-semibold px-2 mb-2">{product.category}</span>
						<h1 className="fs-5 mb-1">{product.title}</h1>
						<div className="mb-3">
							<ProductRatings rate={product.rating.rate} count={product.rating.count} />
						</div>
						<hr />
						<p>{product.description}</p>
						<h2 className="fw-semibold mb-3">${product.price.toFixed(2)}</h2>
						<div className="d-flex justify-content-between">
							<Button type="button" variant="primary">Add to Cart</Button>
						</div>
					</div>
				</Col>
			</Row>
		</section>
	)
}