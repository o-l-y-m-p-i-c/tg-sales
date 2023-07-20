import { Route, Routes, useNavigate } from "react-router-dom"
import { CartPage } from "./pages/CartPage";
import { CategoriePage } from "./pages/CategoriePage"
import { ProductListPage } from "./pages/ProductListPage";
import { ProductPage } from './pages/ProductPage/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// eslint-disable-next-line
const fetchResult = {
    Categories: [
        {
            Categories: [
                {
                    Categories: [
                        {
                            // id: 0,
                            title: '',
                            Categories: [
                                {
                                    // id: 0,
                                    title: '',
                                    Categories: [
                                        {
                                            // id: 0,
                                            title: 'ProductName1',
                                            Categories: [

                                            ],
                                            categorySlug: false,
                                            price: 1,
                                            salePrice: 0,
                                            description: 'Product Description',
                                            haveChilds: false
                                        }
                                    ],
                                    categorySlug: 'Cat1-1-1-1',
                                    price: 1,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }, {
                                    // id: 1,
                                    title: 'ProductName2',
                                    Categories: [],
                                    categorySlug: 'Cat1-1-1-2',
                                    price: 2,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }
                            ],
                            categorySlug: 'Cat1-1-1',
                            price: 1,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: true
                        }, {
                            // id: 1,
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat1-1-2',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }, {
                            // id: 3,
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat1-1-3',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }
                    ],
                    haveChilds: true,
                    categorySlug: 'Cat1-1'
                },
                {
                    Categories: [
                        {
                            // id: 0,
                            title: 'ProductName1',
                            Categories: [
                                {
                                    // id: 0,
                                    title: 'ProductName1',
                                    Categories: [

                                    ],
                                    categorySlug: false,
                                    price: 1,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }, {
                                    // id: 1,
                                    title: 'ProductName2',
                                    Categories: [],
                                    categorySlug: false,
                                    price: 2,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }
                            ],
                            categorySlug: 'Cat1-2-1',
                            price: 1,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }, {
                            // id: 1,
                            title: 'ProductName2',
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat1-2-2',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }, {
                            // id: 3,
                            title: 'ProductName3',
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat1-2-3',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }
                    ],
                    haveChilds: true,
                    categorySlug: 'Cat1-2'
                },
            ],
            haveChilds: true,
            categorySlug: 'Cat1'
        },
        {
            Categories: [
                {
                    Categories: [
                        {
                            // id: 0,
                            title: 'ProductName1',
                            Categories: [
                                {
                                    // id: 0,
                                    title: 'ProductName1',
                                    Categories: [

                                    ],
                                    categorySlug: false,
                                    price: 1,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }, {
                                    // id: 1,
                                    title: 'ProductName2',
                                    Categories: [],
                                    categorySlug: false,
                                    price: 2,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }
                            ],
                            categorySlug: 'Cat2-1-1',
                            price: 1,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }, {
                            // id: 1,
                            title: 'ProductName2',
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat2-1-2',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }, {
                            // id: 3,
                            title: 'ProductName3',
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat2-1-3',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }
                    ],
                    haveChilds: true,
                    categorySlug: 'Cat2-1'
                },
                {
                    Categories: [
                        {
                            // id: 0,
                            title: 'ProductName1',
                            Categories: [
                                {
                                    // id: 0,
                                    title: 'ProductName1',
                                    Categories: [

                                    ],
                                    categorySlug: false,
                                    price: 1,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }, {
                                    // id: 1,
                                    title: 'ProductName2',
                                    Categories: [],
                                    categorySlug: false,
                                    price: 2,
                                    salePrice: 0,
                                    description: 'Product Description',
                                    haveChilds: false
                                }
                            ],
                            categorySlug: 'Cat1-2-1',
                            price: 1,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }, {
                            // id: 1,
                            title: 'ProductName2',
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat1-2-2',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }, {
                            // id: 3,
                            title: 'ProductName3',
                            Categories: [{
                                // id: 0,
                                title: 'ProductName1',
                                Categories: [

                                ],
                                categorySlug: false,
                                price: 1,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }, {
                                // id: 1,
                                title: 'ProductName2',
                                Categories: [],
                                categorySlug: false,
                                price: 2,
                                salePrice: 0,
                                description: 'Product Description',
                                haveChilds: false
                            }],
                            categorySlug: 'Cat1-2-3',
                            price: 2,
                            salePrice: 0,
                            description: 'Product Description',
                            haveChilds: false
                        }
                    ],
                    haveChilds: true,
                    categorySlug: 'Cat2-2'
                },
            ],
            haveChilds: true,
            categorySlug: 'Cat2'
        },
        {
            Categories: [
                {
                    // id: 6,
                    title: 'ProductName1',
                    Categories: [],
                    categorySlug: false,
                    price: 1,
                    salePrice: 0,
                    description: 'Product Description',
                    haveChilds: false
                }, {
                    // id: 7,
                    title: 'ProductName2',
                    Categories: [],
                    categorySlug: false,
                    price: 2,
                    salePrice: 0,
                    description: 'Product Description',
                    haveChilds: false
                }
            ],
            haveChilds: false,
            categorySlug: 'Cat3'

        }
    ],
    haveChilds: true,
    categorySlug: 'Parent'
}

// eslint-disable-next-line
const fetchResult2 = {
    Categories: [
        {
            // id: 6,
            title: 'ProductName1',
            Categories: [],
            categorySlug: false,
            price: 1,
            salePrice: 0,
            description: 'Product Description',
            haveChilds: false
        }, {
            // id: 7,
            title: 'ProductName2',
            Categories: [],
            categorySlug: false,
            price: 2,
            salePrice: 0,
            description: 'Product Description',
            haveChilds: false
        }
    ],
    haveChilds: false,
    categorySlug: ''
}

export const Routing = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const data = useSelector(state => state.ApplicationReducer.fetchedShop)


    const init = () => {

        if (data && data.haveChilds) {
            navigate('/Categories')
        } else if (data) {
            navigate('/ProductList')
        }
        dispatch({ type: 'INIT_SHOP', payload: fetchResult })
    }


    useEffect(() => {
        window.Telegram.WebApp.ready();
        init()
        // eslint-disable-next-line
    }, [data])



    return (
        <>
            <Routes>

                {(data && data.haveChilds) ? (
                    <>
                        <Route path="*" element={<CategoriePage />} />
                        <Route path="/" element={<CategoriePage />} />
                        <Route path="/Categories" element={<CategoriePage />} />
                        <Route path="/Categories/:id" element={<CategoriePage />} />
                        <Route path="/Product/:id/:category" element={<ProductPage />} />
                        <Route path="/ProductList/:id" element={<ProductListPage />} />
                    </>
                ) : (
                    <>
                        <Route path="*" element={<ProductListPage />} />
                        <Route path="/" element={<ProductListPage />} />
                        <Route path="/Product/:id" element={<ProductPage />} />
                    </>
                )}

                <Route path="/ProductList" element={<ProductListPage />} />
                <Route path="/Cart" element={<CartPage />} />

            </Routes>
        </>
    )
}

