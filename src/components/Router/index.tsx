import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./style";
import pageRoutes from "../../constants/pagesRoutes";

export default function Router() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    {pageRoutes.map(({ path, Element }) => (
                        <Route path={path} key={path} element={<Element />} />
                    ))}
                </Routes>
            </BrowserRouter>
        </Container>
    );
}