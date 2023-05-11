import {  Routes, Route, } from 'react-router-dom';

import HomePage from "../page/homepage/HomePage";
import RegistrationPage from "../page/registrationPage/registrationPage";
import MyModal from "../components/modal/modal";
import OtpPage from "../page/otp/otp";

export function HomePageRoute() {
    return (
        <div>
        <Routes>
            {/* GeneralPages(Limited) */}
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route

                path="/register"
                element={<MyModal><RegistrationPage /></MyModal>}
            />
            <Route

                path="/otp"
                element={<MyModal><OtpPage /></MyModal>}
            />

        </Routes>


        </div>
    )
}