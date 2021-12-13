# Curso Nivelador #
## Actividad de evaluación ##

---

### Presentación de la actividad y objetivos ###

**Ejercicios a realizar**
1. **Instalar un IDE en vuestra máquina.** De acuerdo con las preferencias del
profesorado del Máster, recomienda Visual Studio Code, pero se permite
flexibilidad en la elección. (1 punto)
2. **Crear una API sencilla** con Nodejs que haga que cowsay muestre el mensaje
que desee el alumno a través de una petición post o get. Para ello, tendréis
que instalar y usar las librerías *express* y *cowsay*. (2 puntos)
3. **Crearse un perfil de GitHub.** (1 punto)
4. **Crearse un repo personal en GitHub** para que aparezca como perfil público. (1
punto)
5. Subir a un repo público de GitHub el repositorio creado en el ejercicio 2,
acompañado de un simple *README.md* que contenga una breve descripción e
instrucciones para poder usar el código en otra máquina. (1 punto)
6. Dockerizar el código creado en el ejercicio 2. (2 puntos)
7. Realizar un nuevo *commit* al repositorio de *GitHub* con los cambios realizados.
Añadir al *README.md* una sección explicando cómo hacer uso de la solución
dockerizada. (2 puntos)

---

### Descripción e instrucciones de uso ###
- [x] Instalar un IDE
	* Se instaló Sublime Text 4
	* Se instaló Visual Studio Code
- [x] Crear API con Node.js
	* Se configuraron 4 rutas/endpoints en la API (2 para peticiones GET y 2 para peticiones POST), todas cuentan con la misma respuesta.
	* Endpoints:
		* `'/'`
		* `'/cowsay'`
		* Ejemplo: `(POST) localhost:8080/cowsay`
- [x] Perfil de GitHub
	* No se creó ningún perfil nuevo de GitHub, se está utilizando una cuenta personal ya existente
	* [Jaime Rodriguez](https://github.com/JimmyRdzS)
- [x] Repositorio público de GitHub
	* [Curso Nivelador](https://github.com/JimmyRdzS/curso-nivelador)
- [x] Creación de README.md con la descripción e instrucciones del ejercicio.
	* [Instrucciones](https://github.com/JimmyRdzS/curso-nivelador#instrucciones-de-uso)
- [x] Dockerizar el código del proyecto
- [x] Añadir sección al README.md para explicar la solución
	* [Sección de explicación](https://github.com/JimmyRdzS/curso-nivelador#uso-con-docker)

---

### Instrucciones de uso ###
1. Clonar el repositorio
2. Instalar las librerías que requiere el proyecto
	* Se puede utilizar el comando `npm instal` para instalar los paquetes que ya vienen indicados en el archivo `package.json`
3. El código para levantar el servicio de la API se encuentra en la carpeta `app` en el archivo `server.js` por lo que podemos ejecutar el proyecto con el siguiente comando `node app/server.js`

---

### Uso con Docker ###
