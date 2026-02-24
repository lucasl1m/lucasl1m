import {
    BrowserRouter,
    Routes as RoutesContainer,
    Route,
} from "react-router-dom";

import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';

export function Routes() {
    return (
        <BrowserRouter>
            <RoutesContainer>
                <Route element={<Home />} path="/" />
                <Route element={<NotFound />} path="*" />
            </RoutesContainer>
        </BrowserRouter>
    );
}
