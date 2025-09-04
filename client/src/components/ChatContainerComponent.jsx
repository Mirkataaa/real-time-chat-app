import { useChatStore } from '../store/useChatStore'
import { useEffect } from 'react';
import ChatHeaderComponent from './ChatHeaderComponent';
import MessageInputComponent from './MessageInputComponents';

export default function ChatContainerComponent() {

    const { messages, getMessages, isMesagesLoading, selectedUser } = useChatStore();

    useEffect(() => {
        getMessages(selectedUser._id)
    }, [selectedUser._id, getMessages])

    if (isMesagesLoading) return <div>Loading...</div>


    return (
        <div className='flex-1 flex flex-col overflow-auto'>
            <ChatHeaderComponent />

            <p>messages...</p>

            <MessageInputComponent />
        </div>
    );
};