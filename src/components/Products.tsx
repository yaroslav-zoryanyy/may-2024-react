import React, {FC} from 'react';
import {IProduct} from "../models/IProduct";

const Products: FC<IProduct> = ({total, limit, products, skip}) => {
    return (
        <div>
            {products.map(product => (
                <ol>
                    <li>id - {product.id},</li>
                    <li>title - {product.title},</li>
                    <li>description - {product.description},</li>
                    <li>category - {product.category},</li>
                    <li>price - {product.price},</li>
                    <li>discountPercentage - {product.discountPercentage},</li>
                    <li>rating - {product.rating},</li>
                    <li>stock - {product.stock},</li>
                    <li>tags - {product.tags},</li>
                    <li>brand - {product.brand},</li>
                    <li>sku - {product.sku},</li>
                    <li>weight - {product.weight},</li>
                    <li>
                        <ul>
                            <li>dimensions_width - {product.dimensions.width}</li>
                            <li>dimensions_height - {product.dimensions.height}</li>
                            <li>dimensions_depth - {product.dimensions.depth}</li>
                        </ul>
                    </li>
                    <li>warrantyInformation - {product.warrantyInformation},</li>
                    <li>shippingInformation - {product.shippingInformation},</li>
                    <li>availabilityStatus - {product.availabilityStatus},</li>
                    <li>
                        {product.reviews.map((review) => (
                            <ul>
                                <li>review_rating - {review.rating}</li>
                                <li>review_comment - {review.comment}</li>
                                <li>review_date - {review.date}</li>
                                <li>review_reviewerName - {review.reviewerName}</li>
                                <li>review_reviewerEmail - {review.reviewerEmail}</li>
                                <br/>
                            </ul>
                        ))}
                    </li>
                    <li>returnPolicy - {product.returnPolicy},</li>
                    <li>minimumOrderQuantity - {product.minimumOrderQuantity},</li>
                    <li>
                        <ul>
                            <li>meta_createdAt - {product.meta.createdAt}</li>
                            <li>meta_updatedAt - {product.meta.updatedAt}</li>
                            <li>meta_barcode - {product.meta.barcode}</li>
                            <li>meta_qrCode - {product.meta.qrCode}</li>
                        </ul>
                    </li>
                    <li>images - {product.images},</li>
                    <li>thumbnail - {product.thumbnail},</li>
                    <br/>
                    <hr/>
                    <br/>
                </ol>
            ))}
            <li>Total:{total}</li>
            <li>Limit:{limit}</li>
            <li>Skip:{skip}</li>

        </div>
    );
};

export default Products;