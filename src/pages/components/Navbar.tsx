import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark" | "31st">(() => {
        if (typeof window === "undefined") return "light";

        const storedTheme = window.localStorage.getItem("theme");
        if (storedTheme === "dark" || storedTheme === "31st") {
            return storedTheme;
        }

        return "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.classList.toggle("theme-new", theme === "31st");
        document.documentElement.style.colorScheme = theme === "dark" || theme === "31st" ? "dark" : "light";
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const links = [
        { href: "#Page1", label: "Advert / Logos" },
        { href: "#Page2", label: "Digital Art" },
        { href: "#Page3", label: "Sketches" },
        { href: "#About", label: "Hire me!" },
    ];

    const themeOptions = [
        { value: "light", label: "Light", icon: "○" },
        { value: "dark", label: "Dark", icon: "●" },
        { value: "31st", label: "31st", icon: "+" },
    ] as const;

    const activeTheme = themeOptions.find((option) => option.value === theme) ?? themeOptions[0];

    return (
        <nav className="relative top-0 w-full text-md shrink-0 transition-all duration-300 darkgreen text-white">
            <div className="relative shadow-xl">
                <div className="flex flex-wrap items-center justify-between  px-2 py- md:px-4 md:py-0 md:h-20 text-md transition-all duration-300">
                    <div className="flex items-center">
                        <a href="/">
                            <div>
                                <p><img src="/WebP/tags/white name.webp" className="max-h-16 sm:max-h-16 md:max-h-20" /></p>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center ">
                        <div className="hidden md:flex items-center gap-2 sm:gap-3 md:gap-6 pr-0 md:pr-4 text-[10px] sm:text-xs md:text-sm">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`tracking-[0.2em] transition-colors duration-300 ${link.label === "Hire me!" ? "bg-blue-400 hover:bg-blue-700 text-white py-1.5 px-2 sm:py-2 sm:px-4 rounded" : "text-gray-300 hover:text-white"}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsThemeMenuOpen((prev) => !prev)}
                                    className="flex h-8 w-8 items-center justify-center rounded border border-white/40 bg-white/10 p-1 text-gray-100"
                                    aria-label="Choose appearance mode"
                                >
                                    {activeTheme.icon}
                                </button>

                                {isThemeMenuOpen && (
                                    <div className="absolute right-0 top-full z-50 mt-1 min-w-24 rounded border border-slate-300 bg-white p-1 shadow-lg">
                                        {themeOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setTheme(option.value as "light" | "dark" | "31st");
                                                    setIsThemeMenuOpen(false);
                                                }}
                                                className={`flex w-full items-center justify-center rounded px-2 py-1 text-sm ${theme === option.value ? "bg-white text-slate-900" : "text-slate-800 hover:bg-slate-50"}`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="flex h-10 w-10 items-center justify-center rounded border border-white/40 bg-white/10"
                                aria-label="Toggle navigation menu"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 text-gray-100"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="4" y1="7" x2="20" y2="7" />
                                    <line x1="4" y1="12" x2="20" y2="12" />
                                    <line x1="4" y1="17" x2="20" y2="17" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="absolute left-0 right-0 top-full z-50 mt-1 border border-gray-200 bg-white px-3 py-3 shadow-xl md:hidden">
                        <div className="flex flex-col gap-2 text-sm">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded px-2 py-2 text-center tracking-[0.2em] ${link.label === "Hire me!" ? "bg-blue-400 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="rounded border border-slate-300 bg-slate-100 px-2 py-2 text-center text-sm text-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsThemeMenuOpen((prev) => !prev)}
                                    className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-slate-800"
                                >
                                    <span>Theme</span>
                                    <span>{activeTheme.icon}</span>
                                </button>

                                {isThemeMenuOpen && (
                                    <div className="mt-1 rounded  bg-gray-100 p-1">
                                        {themeOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setTheme(option.value as "light" | "dark" | "31st");
                                                    setIsThemeMenuOpen(false);
                                                }}
                                                className={`flex w-full items-center justify-center rounded px-2 py-1 text-sm ${theme === option.value ? "bg-slate-300 text-gray-800" : "text-slate-700"}`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}