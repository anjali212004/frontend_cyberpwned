#!/bin/bash

# Make the script executable
chmod +x structure.sh

echo "KeyScore API Documentation Project Structure"
echo "==========================================="

tree -I 'node_modules|dist|.git' --dirsfirst -a -C << EOF
.
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── [shadcn components]
│   │   └── EndpointCard.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
EOF

echo ""
echo "Note: This structure shows the main project files and directories."
echo "The 'node_modules' directory and build outputs are excluded for clarity."