/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                surface: "#f8fafc", // Very light slate
                primary: "#3869d3", // Logo Blue
                secondary: "#09b070", // Logo Green
                accent: "#1c929a", // Logo Teal
                dark: "#0f172a", // Logo Text Slate
                "text-main": "#334155", // Slate 700
                "text-muted": "#64748b", // Slate 500
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, #3869d3 0%, #09b070 100%)',
                'brand-gradient-hover': 'linear-gradient(135deg, #315kb8 0%, #07965f 100%)',
            }
        },
    },
    plugins: [],
};
