import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

type NotificationType = 'success' | 'error' | 'info';

type NotificationProps = {
  type: NotificationType;
  message: string;
  onClose: () => void;
  duration?: number;
};

const config = {
  success: { icon: <CheckCircle2 className="size-5 text-success" />, bg: 'bg-success/10 border-success/20' },
  error: { icon: <XCircle className="size-5 text-error" />, bg: 'bg-error/10 border-error/20' },
  info: { icon: <AlertCircle className="size-5 text-brand" />, bg: 'bg-brand-muted border-brand/20' },
};

export const Notification = ({ type, message, onClose, duration = 5000 }: NotificationProps) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const { icon, bg } = config[type];

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`flex items-center gap-3 rounded-radius-xl px-5 py-4 shadow-card border ${bg} backdrop-blur-sm`}>
        {icon}
        <p className="text-sm font-medium text-text-primary">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Cerrar notificación"
        >
          <XCircle className="size-4" />
        </button>
      </div>
    </div>
  );
};
