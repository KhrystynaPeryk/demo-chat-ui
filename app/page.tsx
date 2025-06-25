// app/page.tsx
'use client';

import { useState } from 'react';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';

export default function Home() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>('robert-fox');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        ${isSidebarOpen ? 'fixed' : 'hidden'} lg:relative z-50 lg:z-auto lg:block
        w-full lg:w-80 xl:w-96 h-full
      `}>
        <ChatSidebar 
          selectedChatId={selectedChatId}
          onChatSelect={handleChatSelect}
        />
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <ChatWindow 
          selectedChatId={selectedChatId}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
      </div>
    </div>
  );
}