"use client"
import { useState } from "react"

export default function WhoAmIButton({
    WhoAmIAction,
} : {
    WhoAmIAction: () => Promise<string>
}) {
    const [name, setName] = useState<string>("")
    return (
        <div>
            <button
                onClick={async () => {
                    setName(await WhoAmIAction())
                }}
            >
                Who am I? Click Me!
            </button>
            <div>
                {name && <div>You Are {name}</div>}
            </div>
        </div>
    )
}