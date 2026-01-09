# Guía de Deployment - Cabañas Temístocles

## Archivos de SEO y Configuración

Este proyecto incluye todos los archivos necesarios para un SEO potente y un build correcto:

### Archivos Incluidos

1. **index.html** - Optimizado con:
   - Meta tags completos (Open Graph, Twitter Cards)
   - JSON-LD structured data (LodgingBusiness, LocalBusiness, BreadcrumbList)
   - Preconnect y DNS prefetch para performance
   - Geo tags para ubicación

2. **robots.txt** - Configurado para:
   - Permitir indexación de todas las páginas
   - Incluir sitemap
   - Configuración para diferentes bots

3. **sitemap.xml** - Incluye todas las páginas principales:
   - Página principal
   - Reservas
   - Ubicación
   - Actividades
   - Cabañas individuales
   - Políticas y Términos

4. **.htaccess** - Configuración para Apache:
   - Redirección HTTP a HTTPS
   - Manejo de rutas de React Router
   - Compresión GZIP
   - Cache control
   - Headers de seguridad

5. **site.webmanifest** - PWA manifest para instalación como app

## Build del Proyecto

### Desarrollo
```bash
npm run dev
```

### Build de Producción
```bash
npm run build
```

El build generará una carpeta `dist/` con todos los archivos optimizados.

## Deployment

### Pasos para Deploy

1. **Build del proyecto:**
   ```bash
   npm run build
   ```

2. **Subir archivos:**
   - Subir todo el contenido de la carpeta `dist/` al servidor
   - Asegurarse de que el `.htaccess` se copie correctamente

3. **Configuración del servidor:**
   - Asegurar que Apache tenga habilitado `mod_rewrite`
   - Verificar que HTTPS esté configurado
   - Configurar el dominio correcto en el `.htaccess` si es necesario

4. **Verificaciones post-deploy:**
   - Verificar que `robots.txt` sea accesible: `https://www.temistoclesesquel.com.ar/robots.txt`
   - Verificar que `sitemap.xml` sea accesible: `https://www.temistoclesesquel.com.ar/sitemap.xml`
   - Verificar que todas las rutas funcionen correctamente
   - Probar redirección HTTP a HTTPS

## SEO Checklist

- [x] Meta tags completos en index.html
- [x] Open Graph tags configurados
- [x] Twitter Cards configurados
- [x] JSON-LD structured data (LodgingBusiness, LocalBusiness)
- [x] Canonical URLs
- [x] robots.txt configurado
- [x] sitemap.xml creado
- [x] .htaccess para Apache
- [x] Favicons y manifest
- [x] Geo tags para ubicación
- [x] Headers de seguridad

## Notas Importantes

1. **Actualizar fechas en sitemap.xml:** Cambiar `<lastmod>` cuando actualices contenido
2. **URLs absolutas:** Asegurarse de que todas las URLs en los archivos usen el dominio completo
3. **Imágenes:** Asegurarse de tener las imágenes referenciadas (cabanas-temistocles.jpg, logo.png)
4. **Google Search Console:** Enviar el sitemap a Google Search Console después del deploy

## Variables de Entorno

Si usas variables de entorno para Google Calendar API, asegúrate de configurarlas en el servidor:
- `VITE_GOOGLE_CALENDAR_ID`
- `VITE_GOOGLE_API_KEY`
- `VITE_GOOGLE_CLIENT_ID`
