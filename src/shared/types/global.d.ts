interface Window {
  gtag: (
    command: 'config' | 'js' | 'event',
    targetId: string,
    config?: {
      page_path?: string;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
} 