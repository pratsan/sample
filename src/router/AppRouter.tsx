
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

import { HomePageRoute } from './HomePageRoute';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/*" element={<HomePageRoute />} />
            </Routes>
        </BrowserRouter>
    );
};
