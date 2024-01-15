"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { UsermavenClient, usermavenClient } from "@usermaven/sdk-js"

function MavenAnalytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        const usermaven: UsermavenClient = usermavenClient({
            key: "UMHixXCh1k",
            tracking_host: "https://events.usermaven.com"
        })

        // Track page views called on each page load and on each route change
        usermaven.track("pageview")
        console.log("Usermaven pageview event sent for url: " + url)
    }, [pathname, searchParams])

    return null
}

export default MavenAnalytics