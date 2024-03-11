import React, { useEffect, useState } from 'react'
import { useCart } from './CartContext'
import Header from '../components/Header';
import Table from 'react-bootstrap/Table';
import SubHead from '../components/SubHead';

const CartPage = () => {
    const { cartItems } = useCart();
    const { deleteCarts } = useCart();

    const [cartData, setcartData] = useState([]);


    useEffect(() => {
        setcartData(cartItems);
    }, [cartItems])

    const handleDelete = (id) => {
        deleteCarts(id);
    }

    return (
        <>
            <Header />
            <SubHead pageTitle={'Cartpage'} anotherTitle={true} />
            <Table responsive>
                <thead>
                    <tr>

                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.length > 0 && cartData.map((items) => {
                            const { id, title, image, category, price } = items
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td><img src={image} style={{ height: '40px' }} /></td>
                                    <td>{category}</td>
                                    <td>{price}</td>
                                    <td><button onClick={() => handleDelete(items.id)}>Delete</button></td>
                                </tr>
                            )
                        }

                        )
                    }

                </tbody>
            </Table >

        </>
    )
}

export default CartPage