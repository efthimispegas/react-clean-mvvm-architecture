/*
 * Copyright (c) 2023 Efthimios Pegas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import BookHomeView from 'presentation/pages/books/BookHomeView';
import LoginView from 'presentation/pages/login/LoginView';
import React, {useState} from 'react';
import {STORAGE_KEYS} from 'constants/Constants';
import SharedPreferences from "app/utils/SharedPreferences";
import {ROUTE_ENDPOINTS} from "constants/RouteConstants";
import BookDetailView from "presentation/pages/books/BookDetailView";

export default function Router() {
    const getLoginToken = () => SharedPreferences.getString(STORAGE_KEYS.TOKEN) !== null

    const [isLoggedIn, setIsLoggedIn] = useState(getLoginToken());

    window.addEventListener(STORAGE_KEYS.TOKEN, () => {
        setIsLoggedIn(getLoginToken())
    })

    function PublicRoute(path: string, element: React.ReactNode) {
        return (
            <Route
                path={path}
                element={isLoggedIn ? <Navigate to={ROUTE_ENDPOINTS.HOME}/> : element}
            />
        );
    }

    function AuthRoute(path: string, element: React.ReactNode) {
        return (
            <Route
                path={path}
                element={isLoggedIn ? element : <Navigate to={ROUTE_ENDPOINTS.LOGIN}/>}
            />
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                {PublicRoute(ROUTE_ENDPOINTS.LOGIN, <LoginView/>)}
                {AuthRoute(ROUTE_ENDPOINTS.HOME, <BookHomeView/>)}
                {AuthRoute(ROUTE_ENDPOINTS.BOOK, <BookDetailView/>)}
                <Route path="*" element={<Navigate to={ROUTE_ENDPOINTS.LOGIN}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

