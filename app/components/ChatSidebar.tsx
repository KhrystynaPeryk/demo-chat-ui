// app/components/ChatSidebar.tsx
'use client';

import { useState } from 'react';

interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
    avatar: string;
    unread?: boolean;
    }

    interface ChatSidebarProps {
    selectedChatId: string | null;
    onChatSelect: (chatId: string) => void;
    }

    const chats: Chat[] = [
    {
        id: 'robert-fox',
        name: 'Robert Fox',
        lastMessage: 'I\'m just buying it',
        time: '10:00 AM',
        avatar: '👨‍💼'
    },
    {
        id: 'baxie-cooper',
        name: 'Baxie Cooper',
        lastMessage: 'Yeah, I know, right? Apparently, it uses advanced nanotechnology to...',
        time: '11:30 AM',
        avatar: '👩‍🔬'
    },
    {
        id: 'darrell',
        name: 'Darrell',
        lastMessage: 'Hmm, that\'s interesting, but I\'m a bit skeptical. Have there been any tests...',
        time: '10:00 AM',
        avatar: '👨‍🎓'
    },
    {
        id: 'designers',
        name: 'Designers',
        lastMessage: 'Successful trials in arid deserts where water...',
        time: '10:00 AM',
        avatar: '🎨'
    },
    {
        id: 'leslie-alexander',
        name: 'Leslie Alexander',
        lastMessage: 'They managed to produce enough water to fill several water bottles in just',
        time: '10:00 AM',
        avatar: '👩‍💼'
    },
    {
        id: 'guy-hawkins',
        name: 'Guy Hawkins',
        lastMessage: 'Well, if it\'s real, that could be a game-changer for areas with water...',
        time: '10:00 AM',
        avatar: '👨‍🔧'
    },
    {
        id: 'jacob-jones',
        name: 'Jacob Jones',
        lastMessage: 'Famous last words',
        time: '10:00 AM',
        avatar: '👨‍💻'
    },
    {
        id: 'esther-howard',
        name: 'Esther Howard',
        lastMessage: 'True, but I can\'t help but wonder about its potential downsides. What if...',
        time: '10:00 AM',
        avatar: '👩‍⚕️'
    }
    ];

    export default function ChatSidebar({ selectedChatId, onChatSelect }: ChatSidebarProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-full bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl mb-5 mt-5 font-bold text-[#5c5c5c]">My Chat</h1>
            <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => {
                // Toggle search functionality or implement search modal
                console.log('Search clicked');
                }}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            </div>
            
            {/* Search - only show on desktop */}
            <div className="relative hidden lg:block">
            <input
                id="chat-search"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </div>
        </div>

        {/* Messages header */}
        <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">ALL MESSAGES</span>
            <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">(18)</span>
            </div>
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
            {filteredChats.map((chat) => (
            <div
                key={chat.id}
                onClick={() => onChatSelect(chat.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedChatId === chat.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
            >
                <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                    {chat.avatar}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{chat.lastMessage}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}