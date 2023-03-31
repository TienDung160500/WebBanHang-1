import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BlogProduct, getProductById } from "../../../../../store/products/productActionAdmin";

const ReviewProduct = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const editorRef = useRef(null);

    const detailProduct = useSelector((state) => state.getProductById.product);

    const log = () => {
        if (editorRef.current) {
            const blogContent = String(editorRef.current.getContent());
            dispatch(BlogProduct(id, {blogContent}, () => {
                alert("Add review product success")
            }));
        }
    };

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    return (
        <section id="review">
            <div className="review">
                <span className="review-title">Review</span>

                <div className="review-content">

                    <button onClick={log}>Add Review Product</button>
                </div>
            </div>
        </section>
    )
}

export default ReviewProduct;