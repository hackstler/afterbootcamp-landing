import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

type NotificationType = 'success' | 'error' | 'info';

type NotificationProps = {
  type: NotificationType;
  message: string;
  onClose: () => void;
  duration?: number;
};

const ICONS = {
  success: <CheckCircle2 className="size-5 text-[#10b981]" />,
  error: <XCircle className="size-5 text-[#ef4444]" />,
  info: <AlertCircle className="size-5 text-[#4768fa]" />
};

const BG_COLORS = {
  success: 'bg-[#d1fae5]',
  error: 'bg-[#fee2e2]',
  info: 'bg-[#e6e9f4]'
};

const TEXT_COLORS = {
  success: 'text-[#065f46]',
  error: 'text-[#991b1b]',
  info: 'text-[#0d0f1c]'
};

export const Notification = ({ type, message, onClose, duration = 5000 }: NotificationProps) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg ${BG_COLORS[type]}`}>
        {ICONS[type]}
        <p className={`text-sm font-medium ${TEXT_COLORS[type]}`}>{message}</p>
        <button
          onClick={onClose}
          className="ml-2 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar notificación"
        >
          <XCircle className="size-5" />
        </button>
      </div>
    </div>
  );
}; 