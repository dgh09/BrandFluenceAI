import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../common';
import type { ChatMessage } from '../../../types';
import styles from './ChatWindow.module.css';

interface ChatWindowProps {
  campaignId: string;
  currentUserId: string;
  otherUserName: string;
  otherUserAvatar?: string;
  messages: ChatMessage[];
  onSendMessage: (message: string, file?: File) => void;
  onMarkAsRead?: (messageIds: string[]) => void;
  isOtherUserTyping?: boolean;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  campaignId,
  currentUserId,
  otherUserName,
  otherUserAvatar,
  messages,
  onSendMessage,
  onMarkAsRead,
  isOtherUserTyping = false
}) => {
  const [messageText, setMessageText] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOtherUserTyping]);

  // Mark messages as read when they come into view
  useEffect(() => {
    const unreadMessages = messages
      .filter(m => !m.read && m.senderId !== currentUserId)
      .map(m => m.id);

    if (unreadMessages.length > 0 && onMarkAsRead) {
      onMarkAsRead(unreadMessages);
    }
  }, [messages, currentUserId, onMarkAsRead]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!messageText.trim() && !attachedFile) return;

    onSendMessage(messageText.trim(), attachedFile || undefined);
    setMessageText('');
    setAttachedFile(null);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('El archivo no debe superar los 10MB');
        return;
      }
      setAttachedFile(file);
    }
  };

  const removeAttachment = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 48) {
      return 'Ayer ' + date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }) +
             ' ' + date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    }
  };

  const filteredMessages = searchQuery
    ? messages.filter(m =>
        m.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.file?.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : messages;

  return (
    <div className={styles.chatWindow}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.avatar}>
            {otherUserAvatar ? (
              <img src={otherUserAvatar} alt={otherUserName} />
            ) : (
              <div className={styles.avatarPlaceholder}>
                {otherUserName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <h3>{otherUserName}</h3>
            <p className={styles.campaignLabel}>Campaña #{campaignId.slice(0, 8)}</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <button
            className={styles.iconButton}
            onClick={() => setShowSearch(!showSearch)}
            title="Buscar en conversación"
          >
            🔍
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar en la conversación..."
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              className={styles.clearSearch}
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </div>
      )}

      {/* Messages Container */}
      <div className={styles.messagesContainer}>
        {filteredMessages.length === 0 && searchQuery && (
          <div className={styles.noResults}>
            <p>No se encontraron mensajes que coincidan con "{searchQuery}"</p>
          </div>
        )}

        {filteredMessages.length === 0 && !searchQuery && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>💬</div>
            <h4>Inicia la conversación</h4>
            <p>Envía un mensaje para comenzar a coordinar los detalles de la campaña</p>
          </div>
        )}

        {filteredMessages.map((message) => {
          const isOwnMessage = message.senderId === currentUserId;

          return (
            <div
              key={message.id}
              className={`${styles.messageWrapper} ${
                isOwnMessage ? styles.ownMessage : styles.otherMessage
              }`}
            >
              <div className={styles.message}>
                {message.content && (
                  <div className={styles.messageContent}>{message.content}</div>
                )}

                {message.file && (
                  <div className={styles.fileAttachment}>
                    <div className={styles.fileIcon}>📎</div>
                    <div className={styles.fileInfo}>
                      <div className={styles.fileName}>{message.file.name}</div>
                      <div className={styles.fileSize}>
                        {(message.file.size / 1024).toFixed(2)} KB
                      </div>
                    </div>
                    <a
                      href={message.file.url}
                      download={message.file.name}
                      className={styles.downloadButton}
                    >
                      ⬇
                    </a>
                  </div>
                )}

                <div className={styles.messageFooter}>
                  <span className={styles.timestamp}>
                    {formatTimestamp(message.timestamp)}
                  </span>
                  {isOwnMessage && (
                    <span className={styles.readStatus}>
                      {message.read ? '✓✓' : '✓'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isOtherUserTyping && (
          <div className={styles.typingIndicator}>
            <div className={styles.typingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.typingText}>{otherUserName} está escribiendo...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className={styles.inputArea}>
        {attachedFile && (
          <div className={styles.attachmentPreview}>
            <div className={styles.attachmentInfo}>
              <span className={styles.attachmentIcon}>📎</span>
              <span className={styles.attachmentName}>{attachedFile.name}</span>
              <span className={styles.attachmentSize}>
                ({(attachedFile.size / 1024).toFixed(2)} KB)
              </span>
            </div>
            <button
              type="button"
              onClick={removeAttachment}
              className={styles.removeAttachment}
            >
              ✕
            </button>
          </div>
        )}

        <div className={styles.inputRow}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className={styles.fileInput}
            accept="image/*,.pdf,.doc,.docx"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={styles.attachButton}
            title="Adjuntar archivo"
          >
            📎
          </button>

          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Escribe un mensaje..."
            className={styles.messageInput}
          />

          <Button
            type="submit"
            variant="primary"
            disabled={!messageText.trim() && !attachedFile}
            className={styles.sendButton}
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};
