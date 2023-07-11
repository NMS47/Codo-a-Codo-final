import os
from flask import Flask, jsonify, request, render_template, url_for, redirect
from flask_cors import CORS
from formulario import FormularioInscripcion
from flask_bootstrap import Bootstrap4
from tablas import create_database
from objetos import InscripcionADeporte, AdministracionDeSocios
from datetime import datetime

#Crear la base de datos si no existe
create_database()

# -------------------------------------------------------------------
# Configuración y rutas de la API Flask
# -------------------------------------------------------------------

app = Flask(__name__)
CORS(app)
Bootstrap4(app)

SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY

inscripcion = InscripcionADeporte()         # Instanciamos una inscripcion
administracion = AdministracionDeSocios()   # Instanciamos una administracion

@app.route('/', methods=["GET", "POST"])
def index():
    return render_template("index.html")

@app.route('/deportes', methods=["GET"])
def deportes():
    return render_template("deportes.html")

@app.route('/institucional', methods=["GET"])
def institucional():
    return render_template("institucional.html")

@app.route('/consultas', methods=["GET"])
def consultas():
    return render_template("consultas.html")

# Ruta para obtener los datos de un socio según su DNI
@app.route('/socios/<int:dni>', methods=['GET'])
def obtener_socio(dni):
    socio = administracion.consultar_socio(dni)
    if socio:
        return jsonify({
            'dni': socio.dni,
            'nombreyapellido': socio.nombreyapellido,
            'sexo': socio.sexo,
            'fechanacimiento': socio.fechanacimiento
        }), 200
    return jsonify({'message': 'Socio no encontrado.'}), 404

# Ruta para obtener la lista de socios dados de alta
@app.route('/lista_socios', methods=['GET'])
def obtener_socios():
    return administracion.listar_socios()

# Ruta para dar de alta un socio
# COMENTE ESTO PORQUE YA YA FUNCION fomulario_socio hace esto!!!
# @app.route('/socios', methods=['POST'])
# def dar_alta_socio():
#     dni = request.json.get('dni')
#     nombreyapellido = request.json.get('nombreyapellido')
#     sexo = request.json.get('sexo')
#     fechanacimiento = request.json.get('fechanacimieno')
#     return administracion.dar_alta_socio(dni, nombreyapellido, sexo, fechanacimiento)

# Ruta para modificar la informacion de un socio -- CREO QUE ESTO QUEDARÍA SIN EFECTO --
# @app.route('/socios/<int:codigo>', methods=['PUT'])
# def modificar_socio(dni):
#     nuevo_nombreyapellido = request.json.get('nombreyapellido')
#     nuevo_sexo = request.json.get('sexo')
#     nuevo_fechanacimiento = request.json.get('fechanacimiento')
#     return administracion.actualizar_socio(dni, nuevo_nombreyapellido, nuevo_sexo, nuevo_fechanacimiento)

# Ruta para dar de baja un socio


# Ruta para agregar inscribir un socio a un deporte
@app.route('/inscribir_deporte', methods=['GET','POST'])
def agregar_inscripcion():
    if request.method == 'POST':
        dni = request.form.get('dni')
        id_d = request.form.get('sports')
        print(dni, id_d, type(request.form))
        inscripcion.inscribir(dni, id_d)
        print('Inscripcion exitosaaaaaaaaaaaaaaaa')
        return redirect(url_for("accion_exitosa", metodo='inscripccion'))
    return render_template('inscribir_deporte.html')

# Ruta para dar de baja un socio de un deporte
@app.route('/inscripciones', methods=['DELETE'])
def quitar_inscripcion():
    dni_socio = request.json.get('dni_socio')
    id_d = request.json.get('id_d')
    return inscripcion.desinscribir(dni_socio, id_d)

# Ruta para obtener el contenido de las incripciones
@app.route('/ver_inscripciones', methods=['GET'])
def obtener_inscripciones():
    return inscripcion.mostrar()

# Ruta para obtener la lista de socios de la administracion
# @app.route('/socios')
# def obtener_socios():
#     return administracion.listar_socios()


#CREAR SOCIOS
@app.route('/crear_socio', methods=["GET", "POST"])
def formulario_socio():
    form = FormularioInscripcion()
    if request.method == 'POST':
        if form.validate_on_submit():
            dni = form.dni.data
            nomyape = form.nombreyapellido.data
            email = form.email.data
            sexo = form.sexo.data
            categoria = 1
            fechanacimiento = form.fechanacimiento.data
            edad = form.edad.data
            tel = form.telefono.data
            direccylocalidad = "CABA"
            administracion.dar_alta_socio(dni, nomyape, sexo, categoria, email, tel, direccylocalidad)
            return redirect(url_for("accion_exitosa", metodo='agregar'))
    return render_template("formulario.html", form=form)

@app.route('/accion_exitosa/<string:metodo>', methods=["GET", "POST"])
def accion_exitosa(metodo):
    accion_realizada = metodo
    print(accion_realizada)
    if accion_realizada == 'agregar':
        accion = 'agregado'
        simbolo = '➕'
    elif accion_realizada == 'modificar':
        accion = 'modificado'
        simbolo = '✏️'
    else:
        accion = 'borrado'
        simbolo = '❌'
    return render_template("formulario_exitoso.html", accion=accion, metodo=metodo, simbolo=simbolo)
#-------------------------

#BORRAR SOCIO --------------------------------------
@app.route('/borrar_socio', methods=["GET", "POST"])
def borrar_socio():
    mensaje= ''
    if request.method == "POST":
        dni = request.form.get('dni')
        print(dni)
        if administracion.dar_baja_socio(dni):
            return redirect(url_for("accion_exitosa", metodo='borrar'))
        mensaje = "Socio no encontrado, prueba con otro DNI."
    return render_template("borrar_socio.html", mensaje=mensaje)

#Modificar Socio -----------------------------------
@app.route('/modificar_socio', methods=["GET", "POST"])
def modificacion_socio():
    mensaje= ''
    if request.method == "POST":
        dni = request.form.get('dni')
        if administracion.consultar_socio(dni) != None:
            return redirect(url_for("modificar_socio_dni", dni=dni))
        mensaje = "Socio no encontrado, prueba con otro DNI."
    return render_template("modificar_socio.html", mensaje=mensaje)
#----------------------------
@app.route('/modificar_socio/<int:dni>', methods=["GET", "POST"])
def modificar_socio_dni(dni):
    socio = administracion.consultar_socio(dni)
    print(socio)
    form = FormularioInscripcion(dni= dni, 
                                nombreyapellido=socio.nomyape, 
                                sexo= socio.sexo,
                                fechanacimiento= datetime(1993,8,12),
                                email= socio.email,
                                tel= 1138588855,
                                direccylocalidad= socio.direccylocalidad
    )
    if request.method == "POST":
        if form.validate_on_submit():
            dni = form.dni.data
            nomyape = form.nombreyapellido.data
            email = form.email.data
            sexo = form.sexo.data
            categoria = 1
            fechanacimiento = form.fechanacimiento.data
            edad = form.edad.data
            tel = form.telefono.data
            direccylocalidad = "CABA"
            administracion.actualizar_socio(dni, nomyape, sexo, categoria, email, tel, direccylocalidad)
            print("actualizacion exitosa")
            return redirect(url_for("accion_exitosa", metodo='modificar'))
    return render_template("formulario.html", form=form)


# Finalmente, si estamos ejecutando este archivo, lanzamos app.
if __name__ == '__main__':
    app.run(debug=True)


# INSERT INTO tabla_destino (columna1, columna2, columna3, ...)
#-- ESTO DEBERÍA IR EN ALGUNA PARTE ESPECIFICA DEL CODIGO PARA QUE CUANDO VAYA A BUSCAR LOS DATOS EN LAS TABLAS
#   PARA PEGARLOS EN inscripciones, EFECTIVAMENTE HAYA DATOS PARA RECUPERAR.  --#

# conn = conectar()
# cursor = conn.cursor()
# cursor.execute("""INSERT INTO inscripciones
#                (dni_socio, id_d)
#                VALUES((?), (SELECT dni_socio FROM socios), (SELECT id_d FROM deportes))""")
# conn.commit()
# cursor.close()
# conn.close()

# SELECT columna1, columna2, columna3, ...
# FROM tabla_origen
# WHERE condicion;
