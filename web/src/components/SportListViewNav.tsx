import { ReactNode } from "react";

interface SportData {
    children: ReactNode | ReactNode[]
}

export const SportListViewNav: React.FC<SportData> = ({children}) => {
    return (
        <div className="flex flex-row overflow-x-auto w-full border-none text-white bg-slate-400 font-semibold text-sm md:justify-center">
            {children}
        </div>
    )
}