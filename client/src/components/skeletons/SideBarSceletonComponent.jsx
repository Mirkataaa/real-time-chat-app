import { Users } from "lucide-react";

export default function SideBarSceletonComponent() {

    const skeletonContacts = Array(8).fill(null);

    return (
        <aside
            className="h-full w-16 sm:w-20 md:w-56 lg:w-72 border-r border-base-300 
  flex flex-col transition-all duration-200"
        >
            <div className="border-b border-base-300 w-full p-4 md:p-5">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-medium hidden md:block">Contacts</span>
                </div>
            </div>

            <div className="overflow-y-auto w-full py-2 md:py-3">
                {skeletonContacts.map((_, i) => (
                    <div
                        key={i}
                        className="w-full px-2 md:px-3 py-2 md:py-3 flex items-center gap-2 md:gap-3"
                    >
                        <div className="relative mx-auto md:mx-0">
                            <div className="skeleton size-10 md:size-12 rounded-full" />
                        </div>

                        <div className="hidden md:block text-left min-w-0 flex-1">
                            <div className="skeleton h-3 md:h-4 w-20 md:w-32 mb-1 md:mb-2" />
                            <div className="skeleton h-2.5 md:h-3 w-12 md:w-16" />
                        </div>
                    </div>
                ))}
            </div>
        </aside>

    );
};