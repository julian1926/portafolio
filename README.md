# Portafolio - Julian David

Descripción
- Sitio web portfolio personal construido con HTML, CSS y JavaScript.
- Contiene secciones: Sobre mí, Habilidades, Proyectos y Contacto.

Estructura del proyecto
- `index.html` — Página principal.
- `style/main.css` — Estilos principales.
- `style/script/main.js` — JavaScript del sitio.
- `assets/` (opcional) — carpeta recomendada para imágenes (perfil, íconos personalizados).

Requisitos
- Navegador moderno (Chrome, Edge, Firefox).
- (Opcional) Python para servir localmente: `python -m http.server`.

Uso
1. Abrir el archivo `index.html` en el navegador.
2. (Alternativa: servir localmente desde la carpeta `portafolio`):

```powershell
# Abrir PowerShell en la carpeta c:\Users\USUARIO\Desktop\porta\portafolio
# Servir con Python (puede requerir Python instalado)
python -m http.server 8000; Start-Process http://localhost:8000
```

Cómo cambiar la foto de perfil
- Opción A — Sobrescribir el archivo actual:
  1. Reemplaza `WhatsApp Image 2025-07-18 at 11.24.33 AM.jpeg` en la raíz de `portafolio` por tu nueva foto (mismo nombre).

- Opción B — Usar una carpeta `assets` (recomendada):
  1. Crear la carpeta `assets` en `portafolio`.
  2. Renombrar la imagen a `profile.jpg` (evita espacios) y copiarla a `assets`.
  3. Editar `index.html` y actualizar el `src` del `<img>` a `assets/profile.jpg`.

Comandos PowerShell de ejemplo:
```powershell
# Crear carpeta assets
New-Item -ItemType Directory -Path .\assets
# Mover y renombrar imagen existente
Move-Item -Path ".\WhatsApp Image 2025-07-18 at 11.24.33 AM.jpeg" -Destination ".\assets\profile.jpg"
# O copiar una imagen desde Descargas
Copy-Item -Path "C:\Users\USUARIO\Downloads\mi-foto.jpg" -Destination ".\assets\profile.jpg"
```

Cómo añadir o editar habilidades
- Las habilidades están en `index.html` dentro de la sección con la clase `.skills`.
- Cada habilidad usa la estructura:
```html
<div class="skill-card">
  <div class="skill-icon"><i class="fas fa-icon"></i></div>
  <div class="skill-info"><h3>Nombre Habilidad</h3></div>
</div>
```
- Si agregas nuevas `skill-card`, ajusta los estilos en `style/main.css` si quieres colores específicos para los iconos (buscar reglas `.skill-card:nth-child(...) .skill-icon`).

Sugerencias y buenas prácticas
- Evita nombres de archivos con espacios y caracteres especiales.
- Mantén imágenes optimizadas (JPEG/WEBP) para mejor rendimiento.
- Para iconos, el proyecto usa Font Awesome (ya incluido). Para iconos personalizados, guarda imágenes en `assets/` y usa `<img>` dentro de `.skill-icon` en lugar de `<i>`.

Contacto
- Email: juliandavidgarciamoreno9@gmail.com
- GitHub: https://github.com/julian1926

Licencia
- Contenido propio. Usa y adapta según necesites (si planeas publicar, añade la licencia que prefieras).