// app/components/ChatWindow.tsx
'use client';

import { useState } from 'react';

interface Message {
    id: string;
    text: string;
    time: string;
    isOwn: boolean;
    sender?: string;
    }

    interface ChatWindowProps {
    selectedChatId: string | null;
    onMenuClick: () => void;
    }

    const messages: Record<string, Message[]> = {
    'robert-fox': [
        {
        id: '1',
        text: 'Hey, did you hear about the new invention? They\'ve created a device that lets you teleport anywhere instantly!',
        time: '11:29 AM',
        isOwn: false,
        sender: 'Robert Fox'
        },
        {
        id: '2',
        text: 'Seriously? That sounds too good to be true. How does it even work?',
        time: '11:29 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'It\'s wild! They use quantum-mechanical entanglement to disassemble your atoms and send the information to another location to reassemble you. Science fiction becoming reality!',
        time: '11:29 AM',
        isOwn: false,
        sender: 'Robert Fox'
        },
        {
        id: '4',
        text: 'Seriously? That sounds too good to be true. How does it even work?',
        time: '11:29 AM',
        isOwn: true
        }
    ],
    'baxie-cooper': [
        {
        id: '1',
        text: 'Yeah, I know, right? Apparently, it uses advanced nanotechnology to extract moisture from the air.',
        time: '11:30 AM',
        isOwn: false,
        sender: 'Baxie Cooper'
        },
        {
        id: '2',
        text: 'That sounds fascinating! How much water can it actually produce?',
        time: '11:31 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'From what I read, it can generate up to 10 liters per day in moderate humidity conditions.',
        time: '11:32 AM',
        isOwn: false,
        sender: 'Baxie Cooper'
        }
    ],
    'darrell': [
        {
        id: '1',
        text: 'Hmm, that\'s interesting, but I\'m a bit skeptical. Have there been any tests or peer-reviewed studies?',
        time: '10:00 AM',
        isOwn: false,
        sender: 'Darrell'
        },
        {
        id: '2',
        text: 'That\'s a valid concern. Scientific validation is crucial for these kinds of claims.',
        time: '10:02 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'Exactly! I\'d love to see some independent verification before getting too excited.',
        time: '10:03 AM',
        isOwn: false,
        sender: 'Darrell'
        }
    ],
    'designers': [
        {
        id: '1',
        text: 'Successful trials in arid deserts where water scarcity is a major issue have shown promising results.',
        time: '10:00 AM',
        isOwn: false,
        sender: 'Designers'
        },
        {
        id: '2',
        text: 'That\'s great news! Which desert regions were involved in the trials?',
        time: '10:01 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'The Sahara and parts of the Australian Outback were the primary testing locations.',
        time: '10:02 AM',
        isOwn: false,
        sender: 'Designers'
        }
    ],
    'leslie-alexander': [
        {
        id: '1',
        text: 'They managed to produce enough water to fill several water bottles in just a few hours.',
        time: '10:00 AM',
        isOwn: false,
        sender: 'Leslie Alexander'
        },
        {
        id: '2',
        text: 'That\'s impressive! What\'s the energy requirement for the device?',
        time: '10:01 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'It runs on solar power, which makes it perfect for remote areas.',
        time: '10:02 AM',
        isOwn: false,
        sender: 'Leslie Alexander'
        }
    ],
    'guy-hawkins': [
        {
        id: '1',
        text: 'Well, if it\'s real, that could be a game-changer for areas with water scarcity.',
        time: '10:00 AM',
        isOwn: false,
        sender: 'Guy Hawkins'
        },
        {
        id: '2',
        text: 'Absolutely! The potential impact on humanitarian efforts could be enormous.',
        time: '10:01 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'I wonder about the cost and scalability though. Can it be mass-produced?',
        time: '10:02 AM',
        isOwn: false,
        sender: 'Guy Hawkins'
        }
    ],
    'jacob-jones': [
        {
        id: '1',
        text: 'Famous last words... I\'ve heard too many "revolutionary" inventions that turned out to be nothing.',
        time: '10:00 AM',
        isOwn: false,
        sender: 'Jacob Jones'
        },
        {
        id: '2',
        text: 'I understand the skepticism, but we should keep an open mind.',
        time: '10:01 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'Fair enough. I just prefer to see concrete evidence before getting excited.',
        time: '10:02 AM',
        isOwn: false,
        sender: 'Jacob Jones'
        }
    ],
    'esther-howard': [
        {
        id: '1',
        text: 'True, but I can\'t help but wonder about its potential downsides. What if it disrupts local ecosystems?',
        time: '10:00 AM',
        isOwn: false,
        sender: 'Esther Howard'
        },
        {
        id: '2',
        text: 'That\'s a really important consideration. Environmental impact should definitely be studied.',
        time: '10:01 AM',
        isOwn: true
        },
        {
        id: '3',
        text: 'Exactly. We need to think about long-term consequences, not just immediate benefits.',
        time: '10:02 AM',
        isOwn: false,
        sender: 'Esther Howard'
        }
    ]
    };

    export default function ChatWindow({ selectedChatId, onMenuClick }: ChatWindowProps) {
    const [messageText, setMessageText] = useState('');
    
    const currentMessages = selectedChatId ? messages[selectedChatId] || [] : [];

    // Chat data for display names
    const chats = [
        { id: 'robert-fox', name: 'Robert Fox', avatar: '👨‍💼' },
        { id: 'baxie-cooper', name: 'Baxie Cooper', avatar: '👩‍🔬' },
        { id: 'darrell', name: 'Darrell', avatar: '👨‍🎓' },
        { id: 'designers', name: 'Designers', avatar: '🎨' },
        { id: 'leslie-alexander', name: 'Leslie Alexander', avatar: '👩‍💼' },
        { id: 'guy-hawkins', name: 'Guy Hawkins', avatar: '👨‍🔧' },
        { id: 'jacob-jones', name: 'Jacob Jones', avatar: '👨‍💻' },
        { id: 'esther-howard', name: 'Esther Howard', avatar: '👩‍⚕️' }
    ];

    const handleSendMessage = () => {
        if (messageText.trim()) {
        // In a real app, this would send the message
        console.log('Sending message:', messageText);
        setMessageText('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
        }
    };

    if (!selectedChatId) {
        return (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
            <h3 className="text-lg font-medium text-[#5c5c5c] mb-2">Select a conversation</h3>
            <p className="text-[#5c5c5c]">Choose a chat from the sidebar to start messaging</p>
            </div>
        </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={onMenuClick}
                >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            
            {/* "Inbox" title - centered on mobile/tablet, centered in chat window on desktop */}
            <h2 className="text-lg font-semibold text-[#5c5c5c] lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none mt-5 mb-5">
                Inbox
            </h2>
            
            <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
            </div>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {currentMessages.map((message) => (
            <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
                <div className={`flex flex-col ${message.isOwn ? 'items-end' : 'items-start'} max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl`}>
                    <div className={`flex items-start space-x-2 ${
                        message.isOwn ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                        {!message.isOwn && (
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                            {chats.find(chat => chat.id === selectedChatId)?.avatar || '👤'}
                        </div>
                        )}
                        <div className={`rounded-lg p-4 ${
                        message.isOwn 
                            ? 'bg-[#dee6f2] text-[#5c5c5c]' 
                            : 'bg-gray-100 text-[#5c5c5c]'
                        }`}>
                        <p className="text-sm">{message.text}</p>
                        </div>
                    </div>
                    <p className='text-xs mt-1 text-[#242424] self-end'>{message.time}</p>
                </div>
            </div>
            ))}
        </div>

        {/* Message input */}
        <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 relative flex items-center justify-center">
                    <textarea
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type something..."
                        rows={1}
                        className="w-full resize-none border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        style={{ minHeight: '40px', maxHeight: '120px' }}
                    />
                    <button className="absolute right-2 top-2 p-1 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    </button>
                </div>
                <button
                    onClick={handleSendMessage}
                    disabled={!messageText.trim()}
                    className="bg-[#2165d1] hover:bg-blue-700 text-white rounded-lg transition-colors px-3 md:px-14 py-3 self-center"
                >
                    {/* Show "Send" text on iPad and desktop, arrow icon on iPhone */}
                    <span className="md:inline hidden">Send</span>
                    <svg className="w-6 h-6 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" transform="rotate(90)">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
        </div>
    );
}