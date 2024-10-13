// src/global.d.ts

declare const navMenu: HTMLElement;
declare const navToggle: HTMLElement;
declare const navClose: HTMLElement;

declare function bgHeader(): void;

declare const themeButton: HTMLElement;
declare const darkTheme: string;
declare const iconTheme: string;
declare const selectedTheme: string | null;
declare const selectedIcon: string | null;
declare function getCurrentTheme(): string;
declare function getCurrentIcon(): string;

declare const scrollUp: () => void;

// src/global.d.ts

declare const modal: NodeListOf<HTMLElement>;
declare const modalButton: NodeListOf<HTMLElement>;
declare const modalClose: NodeListOf<HTMLElement>;
declare function activeModal(modalClick: number): void;

declare const contactForm: HTMLFormElement;
declare const contactMessage: HTMLElement;
declare function sendEmail(e: Event): void;
