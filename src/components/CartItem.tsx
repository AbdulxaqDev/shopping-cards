import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contex/ShoppingCartContext";
import storeItems from "../data/items.json";
import { foramtCurrency } from "../utilities/formatCurrency";


type CartItemProps = {
    id: number;
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);

    if (item === null) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item?.imgUrl}
                style={{
                    width: "125px",
                    height: "75px",
                    objectFit: "cover"
                }}
            />
            <div className="me-auto" >
                <div>
                    {item?.name} {quantity > 1 && (<span className="text-muted"
                        style={{ fontSize: "0.65rem" }}>x{quantity}</span>)}
                </div>
                <div style={{ fontSize: "0.75rem" }}>{foramtCurrency(item?.price || 0)}</div>
            </div>
            <div>{foramtCurrency((item?.price || 0) * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item?.id || 0)} >&times;</Button>
        </Stack>
    )

}