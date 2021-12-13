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
	* Se puede utilizar el comando `npm install` para instalar los paquetes que ya vienen indicados en el archivo `package.json`
3. El código para levantar el servicio de la API se encuentra en la carpeta `app` en el archivo `server.js`, para ejecutar dicho archivo se puede utilizar el siguiente comando: `node app/server.js`
	* *Se configuró el proyecto para correr en el puerto 8080, esto puede configurarse en la línea 5 del archivo server.js por si se quiere utilizar otro puerto*
4. Se puede probar la API directamente en el navegador o bien utilizando herramientas como Postman

---

### Uso con Docker ###
**Requisitos previos:** Para facilitar la instalación y manejo de los contenedores es necesario instalar docker.
1. Lo primero que se tiene que hacer es revisar el archivo Dockerfile (O crearlo si no existe), el cual tendrá las instrucciones necesarias para ejecutar y compilar nuestra aplicación
2. Luego vamos a abrir la terminar y vamos a crear una imagen basada en el archivo *Dockerfile*
	* Para crear la imagen podemos ejecutar el siguiente comando `docker build -t curso-nivelador/node .`
3. Podemos verificar que la imagen haya sido creada ingresando en la terminal el siguiente comando: `docker images`
4. Finalmente vamos a crear el contenedor ejecutando el siguiente comando:
	* `docker run -p 8000:8080 curso-nivelador/node`
5. Nuestra API Estara corriendo en la instancia de docker en el puerto 8000 que fue el que publicamos `localhost:8000/cowsay`