import ChatContainerComponent from "../components/ChatContainerComponent";
import NoChatSelectedComponent from "../components/NoChatSelectedComponent";
import SidebarComponent from "../components/SidebarComponent";
import { useChatStore } from "../store/useChatStore";

export default function HomePage() {

    const { selectedUser } = useChatStore();

    return (
        <div className="h-screen bg-base-200">
            <div className="flex items-center justify-center pt-20 px-4">
                <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
                    <div className="flex h-full rounded-lg overflow-hidden">
                        <SidebarComponent />

                        {!selectedUser ? <NoChatSelectedComponent /> : <ChatContainerComponent />}
                    </div>
                </div>
            </div>
        </div>
    );
};