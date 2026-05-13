# SOMOSSAYA — Portfolio Web

Portafolio oficial de SOMOSSAYA Marketing & Contenido.

## Deploy en Vercel (3 pasos)

### Opción A — Deploy directo desde ZIP (más fácil)
1. Descomprime este ZIP en tu computador
2. Ve a [vercel.com](https://vercel.com) y crea una cuenta gratuita
3. En el dashboard haz clic en **"Add New Project"**
4. Selecciona **"Import from your computer"** o sube la carpeta
5. Vercel detecta Next.js automáticamente → clic en **Deploy**
6. ¡Listo! Tu sitio estará en línea en ~2 minutos

### Opción B — Deploy desde GitHub (recomendado para actualizaciones)
1. Crea un repositorio en [github.com](https://github.com)
2. Sube esta carpeta al repositorio
3. En Vercel conecta tu cuenta de GitHub
4. Importa el repositorio → Deploy automático

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# Abre http://localhost:3000

# Build para producción
npm run build
```

## Estructura del proyecto

```
somossaya/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Layout principal + metadata SEO
│   │   └── page.tsx      # Página principal (todo el portafolio)
│   └── styles/
│       └── globals.css   # Estilos + variables de marca
├── public/               # Archivos estáticos
├── next.config.js        # Configuración Next.js
├── package.json
├── tsconfig.json
└── vercel.json           # Configuración Vercel
```

## Contacto
- somossaya@gmail.com
- hopp.bio/somossaya
- WhatsApp Nayeli: 310 338 5791
- WhatsApp Mariana: 300 744 9576
