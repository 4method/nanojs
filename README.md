# 🚀 NanoJS

Una librería minimalista para el manejo eficiente del DOM, inspirada en jQuery pero con un enfoque moderno y ligero.

## 📦 Instalación

```bash
npm install @crobf/nano
```

## 🎯 Características

- ✨ API simple y familiar
- 🪶 Ultra ligero (~3KB minificado)
- 🔗 Encadenamiento de métodos (method chaining)
- 📱 Compatible con navegadores modernos
- 🔧 Escrito en TypeScript
- 🎯 Sin dependencias

## 🚀 Uso Básico

### Importación

```javascript
// ES6 Modules
import $n from "@crobf/nano";

// CommonJS
const $n = require("@crobf/nano");

// Uso directo en el navegador (global)
// La función $n estará disponible globalmente
```

### DOM Ready

```javascript
$n(() => {
  console.log("DOM está listo!");
});
```

## 📚 API Reference

### Selección de Elementos

```javascript
// Seleccionar por CSS selector
const elementos = $n(".mi-clase");
const elemento = $n("#mi-id");
const divs = $n("div");

// Envolver un elemento DOM existente
const elemento = $n(document.getElementById("mi-elemento"));
```

### Manipulación de Clases

```javascript
$n(".mi-elemento")
  .addClass("nueva-clase")
  .removeClass("clase-vieja")
  .toggleClass("activo");

// Verificar si tiene una clase
if ($n(".mi-elemento").hasClass("activo")) {
  // hacer algo
}
```

### Manejo de Eventos

```javascript
// Agregar event listener
$n(".boton").on("click", (e) => {
  console.log("Botón clickeado!");
});

// Remover event listener
$n(".boton").off("click", handler);

// Disparar evento
$n(".boton").trigger("click");
```

### Manipulación de Contenido

```javascript
// Obtener/establecer HTML
const html = $n(".elemento").html();
$n(".elemento").html("<p>Nuevo contenido</p>");

// Obtener/establecer texto
const texto = $n(".elemento").text();
$n(".elemento").text("Nuevo texto");

// Obtener/establecer valor de input
const valor = $n("input").val();
$n("input").val("nuevo valor");
```

### Atributos y Datos

```javascript
// Obtener/establecer atributos
const src = $n("img").attr("src");
$n("img").attr("src", "nueva-imagen.jpg");

// Verificar si tiene atributo
if ($n("img").hasAttr("alt")) {
  // hacer algo
}

// Trabajar con data attributes
$n(".elemento").data("id", "123");
const id = $n(".elemento").data("id");
```

### Estilos CSS

```javascript
// Obtener/establecer propiedades CSS
const color = $n(".elemento").css("color");
$n(".elemento").css("color", "red");

// Mostrar/ocultar elementos
$n(".elemento").hide();
$n(".elemento").show();
```

### Manipulación del DOM

```javascript
// Agregar contenido
$n(".contenedor").append("<p>Al final</p>");
$n(".contenedor").prepend("<p>Al inicio</p>");

// Remover elementos
$n(".elemento").remove();

// Vaciar contenido
$n(".contenedor").empty();
```

### Navegación del DOM

```javascript
// Obtener padre
const padre = $n(".hijo").parent();

// Obtener hijos
const hijos = $n(".padre").children();

// Buscar dentro del elemento
const encontrados = $n(".contenedor").find(".item");

// Primer y último elemento
const primero = $n(".lista li").first();
const ultimo = $n(".lista li").last();
```

### Filtrado

```javascript
// Filtrar elementos que coincidan con selector
const activos = $n(".item").filter(".activo");

// Filtrar elementos que NO coincidan con selector
const inactivos = $n(".item").not(".activo");
```

### Iteración

```javascript
$n(".item").each((elemento, indice) => {
  console.log(`Elemento ${indice}:`, elemento);
});
```

## 💡 Ejemplos Prácticos

### Formulario Interactivo

```javascript
$n(() => {
  $n("#mi-formulario").on("submit", (e) => {
    e.preventDefault();

    const nombre = $n("#nombre").val();
    const email = $n("#email").val();

    if (!nombre || !email) {
      $n(".error").text("Por favor completa todos los campos").show();
      return;
    }

    $n(".success").text("Formulario enviado correctamente!").show();
    $n(".error").hide();
  });
});
```

### Toggle de Contenido

```javascript
$n(".toggle-btn").on("click", () => {
  $n(".contenido")
    .toggleClass("visible")
    .css("display", $n(".contenido").hasClass("visible") ? "block" : "none");
});
```

### Lista Dinámica

```javascript
$n(".agregar-item").on("click", () => {
  const texto = $n("#nuevo-item").val();
  if (texto) {
    $n(".lista").append(`<li>${texto}</li>`);
    $n("#nuevo-item").val("");
  }
});

$n(".lista").on("click", "li", (e) => {
  $n(e.target).toggleClass("completado");
});
```

## 🔗 Encadenamiento

Todos los métodos que modifican elementos retornan la instancia de NanoWrapper, permitiendo encadenar operaciones:

```javascript
$n(".mi-elemento")
  .addClass("activo")
  .css("color", "blue")
  .text("Texto actualizado")
  .on("click", () => alert("Clickeado!"));
```

## 📊 Propiedades

```javascript
// Obtener número de elementos seleccionados
const cantidad = $n(".items").length;
```

## 🌐 Compatibilidad

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 Licencia

ISC

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor abre un issue o pull request en nuestro [repositorio de GitHub](https://github.com/CROBF-tech/nanojs).

---

Hecho con ❤️ por CROBF
