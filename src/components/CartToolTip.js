import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { CartSummary } from "./CartSummary";

export const CartToolTip = () => {
    const [cart, setCart] = useState(null);
    useEffect(() => {
        getCart().then((cart) => setCart(cart));
    }, []);
    return (
        <Popup
            trigger={<a href={"/cart"}>{cartIcon}</a>}
            on={["hover", "click"]}
            position="bottom right"
            contentStyle={{
                width: "min-content",
                maxWidth: "400px",
                minWidth: "200px",
                padding: "25%",
            }}
        >
            {cart ? (
                <CartSummary items={cart.item_count} total={cart.total_price} />
            ) : (
                <p>Fetching cart...</p>
            )}
        </Popup>
    );
};
