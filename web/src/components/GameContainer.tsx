import { PropsWithChildren } from "react"

export const GameContainer = ({children}:PropsWithChildren) => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                {children}
            </div>
        </div>
    )
}