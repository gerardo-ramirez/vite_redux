import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { Index } from '../pages';
import { Cart } from '../pages/cart/cart';
import { Contador } from '../pages/contador/contador';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { useSelector } from 'react-redux';
import Form from '../pages/form/form';
import FormularioConFormik from '../pages/formik/formularioConFormik';


export const Layout = () => {
    const { totalCount } = useSelector(state => state.cart)
    return (
        <div className="py-4">
            <Link className="btn btn-info mx-2" to="/login">
                Login
            </Link>
            <Link className="btn btn-info mx-2" to="/">
                Inicio
            </Link>
            <Link className="btn btn-info mx-2" to="/home">
                Home
            </Link>
            <Link className="btn btn-info mx-2" to="/contador">
                Contador
            </Link>
            <Link className="btn btn-info mx-2" to="/form">
                From
            </Link>
            <Link className="btn btn-info mx-2" to="/formik">
                Fromulario con Formik
            </Link>
            <div className="ms-auto">
                <Link className="btn btn-primary position-relative" to="/cart">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mx-2">
                        {totalCount}
                        <span className="visually-hidden">products in cart</span>
                    </span>
                </Link>
            </div>

            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/contador' element={<Contador />} />
                <Route path='/form' element={<Form />} />
                <Route path='/formik' element={<FormularioConFormik />} />


            </Routes>
        </div>
    );
}
