import {
    BrowserRouter,
    Routes as RoutesContainer,
    Route,
} from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

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
