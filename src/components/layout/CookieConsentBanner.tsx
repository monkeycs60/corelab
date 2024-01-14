"use client"

import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import Link from "next/link";

const CookieConsentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consentCookie = cookie.get("cookieConsent");

        if (!consentCookie) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        setShowBanner(false);
        cookie.set("cookieConsent", "accepted", { expires: 365 });
    };

    const handleReject = () => {
        setShowBanner(false);
        cookie.set("cookieConsent", "rejected", { expires: 365 });
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed flex-col text-center md:text-left md:flex-row text-xs md:text-sm bottom-0 left-0 z-[999999] bg-primary/80 text-white w-full flex gap-4 justify-between px-8 py-4 items-center ">
            <p>Ce site utilise des cookies pour améliorer votre expérience de navigation.</p>
            <div className="flex gap-8">
            <button onClick={handleAccept} className="border-[1px] p-2 bg-white text-primary rounded-lg hover:bg-primary hover:text-white">Accepter les cookies</button>
            <button onClick={handleReject} className="hover:scale-105">Refuser</button>
            </div>
        </div>
    );
};

export default CookieConsentBanner;