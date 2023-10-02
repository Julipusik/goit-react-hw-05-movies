import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <div>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Navigation>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}