import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/juanc/OneDrive/Escritorio/Antigravity/Clientes/Datte.me/Web Propuesta/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'Hero.tsx'); // Skip Hero.tsx as it's already done manually

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Reemplazar colores Indigo
    content = content.replace(/indigo-600/g, 'primary');
    content = content.replace(/indigo-700/g, 'primary');
    content = content.replace(/indigo-800/g, 'primary');
    content = content.replace(/indigo-900/g, 'primary');
    content = content.replace(/indigo-500/g, 'datte-purple-500');
    content = content.replace(/indigo-400/g, 'datte-purple-400');
    content = content.replace(/indigo-200/g, 'datte-purple-200');
    content = content.replace(/indigo-100/g, 'datte-purple-100');
    content = content.replace(/indigo-50/g, 'datte-purple-100/50');

    // Reemplazar colores Slate text
    content = content.replace(/slate-950/g, 'dark');
    content = content.replace(/slate-900/g, 'dark');
    content = content.replace(/slate-800/g, 'secondary');
    content = content.replace(/slate-700/g, 'secondary/90');
    content = content.replace(/slate-600/g, 'secondary/80');
    content = content.replace(/slate-500/g, 'secondary/60');
    content = content.replace(/slate-400/g, 'secondary/40');

    // Agregar transitions y cursores a botones/enlaces (simplificado)
    // content = content.replace(/hover:-translate-y-2/g, 'hover:-translate-y-2 transition-transform duration-300 cursor-pointer');

    fs.writeFileSync(filePath, content);
}
console.log('Reemplazo completado en los componentes.');
