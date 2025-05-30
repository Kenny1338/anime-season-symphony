
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, Send, X, Minimize2, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hallo! Ich bin dein persönlicher Anime Sales Agent. Wie kann ich dir bei der Suche nach dem perfekten Merchandise helfen? 🎌',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI response with more varied responses
    setTimeout(() => {
      const responses = [
        'Perfekt! Ich habe einige großartige Artikel für dich gefunden. Welchen Anime-Stil bevorzugst du? 🌸',
        'Das ist eine fantastische Wahl! Diese Items sind sehr beliebt in der Community. Soll ich dir ähnliche Produkte zeigen? ✨',
        'Lass mich dir die besten Merchandise-Artikel zeigen! Bist du mehr interessiert an limitierten Editionen oder Alltagsgegenständen? 🎯',
        'Wow, diese Artikel sind gerade sehr gefragt! Ich kann sie für dich reservieren. Möchtest du mehr Details? 🔥',
        'Ich kenne die perfekten Sachen für Anime-Fans wie dich! Welche Charaktere oder Serien magst du am liebsten? 💫'
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl bg-slate-700 hover:bg-slate-600 z-50 transition-all duration-300 hover:scale-110"
        size="lg"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 w-96 shadow-2xl z-50 transition-all duration-500 ease-in-out transform ${
      isMinimized ? 'h-16' : 'h-[32rem]'
    } bg-slate-800 border-slate-600 overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-700 text-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">AI Sales Agent</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-xs opacity-90">Online</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-slate-600 transition-colors duration-200"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-slate-600 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Container */}
          <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4 bg-slate-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${message.isUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-500`}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm transition-all duration-300 hover:shadow-md ${
                    message.isUser
                      ? 'bg-blue-600 text-white rounded-br-md shadow-lg'
                      : 'bg-slate-700 text-slate-100 rounded-bl-md shadow-md border border-slate-600'
                  }`}
                >
                  <p className="leading-relaxed">{message.text}</p>
                  <span className={`text-xs mt-1 block ${message.isUser ? 'opacity-70' : 'text-slate-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {message.isUser && (
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start space-x-2 justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-700 text-slate-100 p-3 rounded-2xl rounded-bl-md shadow-md border border-slate-600">
                  <div className="flex space-x-1 items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-xs text-slate-400 ml-2">tippt...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800 border-t border-slate-600">
            <div className="flex space-x-3 items-end">
              <div className="flex-1 relative">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Frage mich nach Anime Merchandise..."
                  className="w-full rounded-2xl border-slate-600 focus:border-blue-500 bg-slate-900 text-white placeholder:text-slate-400 transition-colors duration-200 pr-12 py-3"
                  disabled={isTyping}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || isTyping}
                className="rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all duration-200 px-4 py-3 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              Powered by AI • Drücke Enter zum Senden
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default AIChat;
