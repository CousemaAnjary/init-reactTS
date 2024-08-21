import { cn } from "@/lib/utils"
import Navbar from "@/components/dashboard/Navbar"
import Sidebar from "@/components/dashboard/Sidebar"
import { useSidebarToggle } from "@/hooks/useSidebarToggle"


export default function Dashboard({ children }: { children: React.ReactNode }): JSX.Element {
    /**
     * ! STATE (état, données) de l'application
     */
    const { isOpen } = useSidebarToggle()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            {/* Sidebar */}
            <Sidebar />

            {/* Conteneur principal */}
            <div
                className={cn(
                    "flex flex-col flex-grow bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
                    isOpen ? "lg:ml-72" : "lg:ml-[90px]"
                )}
            >
                {/* Navbar */}
                <Navbar />

                {/* Main content */}
                <main className="container">
                    {children}
                </main>
            </div>
        </>
    )
}
