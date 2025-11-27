import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your GLP-1 nutrition assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('protein')) {
      return 'Great question about protein! For GLP-1 users, aim for 20-30g of protein per meal to support muscle maintenance and satiety. Good sources include lean meats, fish, eggs, tofu, and Greek yoghurt.';
    } else if (input.includes('nausea') || input.includes('sick')) {
      return 'I understand nausea can be challenging. Try eating smaller, more frequent meals, avoid strong-smelling foods, and choose bland options like crackers or toast. Check our Education section for more tips!';
    } else if (input.includes('recipe')) {
      return 'I can help you find recipes! What type of meal are you looking for? You can browse our Recipes section for GLP-1-friendly options with proper portion sizes and protein content.';
    } else if (input.includes('water') || input.includes('hydration')) {
      return 'Staying hydrated is crucial! Aim for 6-8 glasses of water daily. Our Hydration tracker in the Education section can help you monitor your intake.';
    } else if (input.includes('side effect')) {
      return 'Side effects are common with GLP-1 treatment. Visit our Education section for detailed guidance on managing nausea, constipation, diarrhoea, and more. If symptoms persist, please consult your healthcare provider.';
    } else {
      return 'I\'m here to help with GLP-1 nutrition guidance, recipe suggestions, meal planning, and managing side effects. What would you like to know more about?';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 lg:right-8 w-full max-w-md z-50">
      <div className="bg-white border border-[#465E5A]/15 shadow-xl flex flex-col" style={{ height: '500px' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#465E5A]/15 bg-[#6264A1] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm">Nutrition Assistant</h3>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F4F6F7]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-[#6264A1] text-white'
                    : 'bg-white border border-[#465E5A]/15 text-[#465E5A]'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-[#465E5A]/60'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#465E5A]/15 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-[#465E5A]/20 text-[#465E5A] placeholder:text-[#465E5A]/40 focus:outline-none focus:border-[#6264A1] transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="px-4 py-2 bg-[#6264A1] text-white hover:bg-[#6264A1]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
