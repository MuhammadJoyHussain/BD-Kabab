import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const HomeMenu = () => {
    const [product, setProduct] = useState([]);
    const history = useHistory();
    const [ orderDate, setOrderDate ] = useState(new Date);

    useEffect(() => {
        fetch(`https://bd-kebab-bangla.herokuapp.com/api/products`)
            .then(res => res.json())
            .then(data => setProduct(data.slice(0, 6)))
    }, [])

    return (
        <Menu className="text-center">
            <Services className="pb-5">
                <div className="container">
                    <div className="row g-0">
                        <h1 className="mt-5 mb-3">Food Menu</h1>
                        {
                            product.map(products => {
                                
                                const book = () => {
                                    const url = `/booking/${products._id}`;
                                    history.push(url);
                                    setOrderDate();
                                }

                                return (
                                    <div key={products._id} className="col-md-4 col-sm-6 text-center">
                                        <div className="box">
                                            <div className="avtar">
                                                <img className="img-fluid" src={products.image} alt="" />
                                            </div>
                                            <BoxContent>
                                                <h3>Name: {products.productName}</h3>
                                                <span>Price: {products.price} zł</span>
                                            </BoxContent>
                                            <Button onClick={book} variant="primary">Order Now</Button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <Link to="/menu" className="btn btn-outline-primary mt-5">See More Foods</Link>
                </div>
            </Services>
        </Menu>
    )
};

export default HomeMenu;

const Menu = styled.div`
    background: #e7e3d8;
`
const Services = styled.div`
    .box {
        background-color: #f4f2ed;
        padding: 20px 10px;
        position: relative;
        z-index: 0;
        transition: 0.2s all;
    }

    .box:hover {
        background-color: white;
        z-index: 1;
        box-shadow: 50px 50px 15px 5px rgba(0, 0, 0, 0.2);
    }

    .avtar {
        width: 300px;
        height: 250px;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 auto 100px;
        }

        .img-fluid {
            width:  300px;
            height: 250px;
        }

        @media(max-width: 992px) {
            .avtar {
                margin: 0 -40px 50px;
            }
    
            .img-fluid {
                width: 200px;
                height: 200px;
            }
    
            @media(max-width: 580px) {
                .avtar {
                    width: 300px;
                    height: 250px;
                    border-radius: 10px;
                    overflow: hidden;
                    margin: 0 auto 100px;
                    }
                    
                .img-fluid {
                    width:  350px;
                    height: 250px;
                }
            }
        }

`
const BoxContent = styled.div`
    margin: 10px 0;
    h3 {
        height: 80px;
        color: #313435;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.4rem;
        margin: 0;
        text-transform: capitalize;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        line-height: 2rem;
        color: #6F808A;
    }
`