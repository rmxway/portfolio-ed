import type { AppTheme } from '@/types/theme';

export const tokens: Omit<AppTheme, 'breakpoints'> = {
    colors: {
        background: '#ffffff',
        backgroundSecondary: '#f5f5f7',
        text: '#201f1e',
        textMuted: '#6e6e73',
        textSecondary: '#8c8987',
        primary: '#5715e5',
        accent: '#5715e5',
        accentHover: '#723fde',
        success: '#34c759',
        glassBorder: 'rgba(0, 0, 0, 0.12)',
        glassBackground: 'rgba(255, 255, 255, 0.72)',
        gray50: '#fcf7f7',
        gray100: '#fbf4f4',
        gray200: '#f1eeee',
        gray300: '#e3dede',
        gray400: '#c4bfbf',
        gray500: '#a49d9d',
        gray600: '#7a7575',
        gray700: '#626060',
        gray800: '#464343',
        gray900: '#222020',
    },
    gradients: {
        hero: 'linear-gradient(180deg, #f5f5f7 0%, #ffffff 45%, #e8eef8 100%)',
        heroAccent: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 113, 227, 0.15), transparent)',
        card: 'linear-gradient(145deg, #ffffff 0%, #f5f5f7 100%)',
    },
    typography: {
        heroTitle: 'clamp(2rem, 8vw, 3.5rem)',
        sectionTitle: 'clamp(1.8rem, 5vw, 2.6rem)',
        lead: 'clamp(1.125rem, 2vw, 1.375rem)',
        body: '1.0625rem',
    },
    shadows: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.06)',
        md: '0 8px 24px rgba(0, 0, 0, 0.08)',
        cardHover: '0 16px 40px rgba(0, 0, 0, 0.12)',
    },
    space: ['0', '0.25rem', '0.5rem', '1rem', '1.5rem', '2rem', '3rem'],
    radii: {
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px',
        full: '9999px',
    },
    fonts: {
        body: 'var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        mono: 'var(--font-geist-mono), ui-monospace, monospace',
    },
    zIndex: {
        header: 100,
        modal: 200,
    },
};
