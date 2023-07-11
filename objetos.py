from flask import jsonify
from tablas import get_db_connection

# -------------------------------------------------------------------
# Definimos la clase "Socio"
# -------------------------------------------------------------------
class Socio:
    def __init__(self, dni, nomyape, sexo, categoria, email, tel, direccylocalidad):
        self.dni = dni
        self.nomyape = nomyape
        self.sexo = sexo
        self.categoria = categoria
        self.email = email
        self.tel = tel
        self.direccylocalidad = direccylocalidad

    def modificar(self, n_nomyape = "", n_sexo = "", n_categoria = "", n_email ="", n_tel ="", n_direccylocalidad = ""): # INCOMPLETO
        if n_nomyape:
            self.nombreyapellido = n_nomyape
        if n_sexo:
            self.sexo = n_sexo
        self.categoria = n_categoria
        self.email = n_email
        self.tel = n_tel
        self.direccylocalidad = n_direccylocalidad

# -------------------------------------------------------------------
# Definimos la clase "Deportes"
# -------------------------------------------------------------------
class Deportes: #-- CREO QUE FALTA CONECTAR CON BASE DE DATOS --#
    def __init__(self, id_d, nombre, arancel):
        self.id_d = id_d
        self.nombre = nombre
        self.arancel = arancel

    def consultar_deporte(self, id_d):  # VER SI BORRAR O NO
        self.cursor.execute("SELECT * FROM deportes WHERE id_d = ?", (id_d,))
        row = self.cursor.fetchone()
        if row:
            id_d, nombre, arancel = row
            return Deportes(id_d, nombre, arancel)
        return None

# -------------------------------------------------------------------
# Definimos la clase "Inscripciones"
# -------------------------------------------------------------------
class Inscripcion:
    def __init__(self, dni_socio, id_d):
        self.dni_socio = dni_socio
        self.id_d = id_d


# -------------------------------------------------------------------
# Definimos la clase "Administracion"
# -------------------------------------------------------------------
class AdministracionDeSocios:
    def __init__(self):
        self.conexion = get_db_connection()
        self.cursor = self.conexion.cursor()

    def dar_alta_socio(self, dni, nomyape, sexo, categoria, email, tel, direccylocalidad):
        socio_existente = self.consultar_socio(dni)
        if socio_existente:
            return jsonify({'message': 'Ya existe un socio con ese DNI.'}), 400

        self.cursor.execute("INSERT INTO socios VALUES (?, ?, ?, ?, ?, ?, ?)", (dni, nomyape, sexo, categoria, email, tel, direccylocalidad))
        self.conexion.commit()
        return jsonify({'message': 'Socio dado de alta correctamente.'}), 200

    def consultar_socio(self, dni):
        self.cursor.execute("SELECT * FROM socios WHERE dni = ?", (dni,))
        row = self.cursor.fetchone()
        if row:
            dni, nomyape, sexo, categoria, email, tel, direccylocalidad = row
            return Socio(dni, nomyape, sexo, categoria, email, tel, direccylocalidad)
        return None

    def actualizar_socio(self, dni, nomyape, sexo, categoria, email, tel, direccylocalidad):
        socio = self.consultar_socio(dni)
        if socio:
            socio.modificar(nomyape, sexo, categoria, email, tel, direccylocalidad)
            self.cursor.execute("UPDATE socios SET nomyape = ?, sexo = ?, categoria = ?, email = ?, tel = ?, direccylocalidad = ? WHERE dni = ?",
                                (nomyape, sexo, categoria, email, tel, direccylocalidad, dni))
            self.conexion.commit()
            return True
            # return jsonify({'message': 'Socio modificado correctamente.'}), 200
        return False
        # return jsonify({'message': 'Socio no encontrado.'}), 404

    def listar_socios(self):
        self.cursor.execute("SELECT * FROM socios")
        rows = self.cursor.fetchall()
        socios = []
        for row in rows:
            dni, nomyape, sexo, categoria, email, tel, direccylocalidad = row
            producto = {'dni': dni, 'nomyape': nomyape, 'sexo': sexo, 'categoria': categoria, 'email': email, 'tel': tel, 'direccion': direccylocalidad}
            socios.append(producto)
        return jsonify(socios), 200

    def dar_baja_socio(self, dni):
        # InscripcionADeporte.desincribir_todos_los_deportes(dni)

        self.cursor.execute("DELETE FROM socios WHERE dni = ?", (dni,))
        if self.cursor.rowcount > 0:
            self.conexion.commit()
            # return jsonify({'message': 'Socio dado de baja correctamente.'}), 200
            return True
        # return jsonify({'message': 'Socio no encontrado.'}), 404
        return False


# -------------------------------------------------------------------
# Definimos la clase "Inscripcion"
# -------------------------------------------------------------------
class InscripcionADeporte:
    def __init__(self):
        self.conexion = get_db_connection()
        self.cursor = self.conexion.cursor()

    def consultar_inscripcion(self, dni, id_d):
        self.cursor.execute("SELECT * FROM inscripciones WHERE dni_socio = ? AND id_deporte = ?", (dni, id_d))
        row = self.cursor.fetchone()
        if row:
            dni_socio, id_d = row
            return Inscripcion(dni_socio, id_d)
        return None

    def inscribir(self, dni, id_d):
        socio = AdministracionDeSocios.consultar_socio(dni)
        if socio is None:
            return jsonify({'message': 'El socio no existe.'}), 404

        inscripcion = InscripcionADeporte.consultar_inscripcion(dni, id_d)
        if inscripcion is None:
            self.cursor.execute("INSERT INTO inscripciones VALUES (?, ?)", (dni, id_d))
            self.conexion.commit()
            return jsonify({'message': 'Socio inscripto correctamente.'}), 200
        return jsonify({'message': 'El socio ya se encuentra inscripto en este deporte'}), 404

    def desinscribir(self, dni, id_d):
        self.cursor.execute("DELETE FROM inscripciones WHERE dni = ? AND id_deporte = ?", (dni, id_d))
        if self.cursor.rowcount > 0:
            self.conexion.commit()
            return jsonify({'message': 'Socio desinscripto correctamente.'}), 200
        return jsonify({'message': 'Inscripcion no encontrada.'}), 404

    def desincribir_todos_los_deportes(self, dni):
        self.cursor.execute("DELETE FROM inscripciones WHERE dni = ?", (dni,))
        if self.cursor.rowcount > 0:
            self.conexion.commit()
            return jsonify({'message': 'Socio desinscripto correctamente.'}), 200
        return jsonify({'message': 'Inscripcion no encontrada.'}), 404

    def mostrar_inscripciones_socio(self, dni):
        self.cursor.execute("SELECT dni_socio, id_deporte FROM inscripciones WHERE dni_socio = ?", (dni,))
        inscripciones_procesadas = {}
        inscripciones = self.cursor.fetchall()
        for inscripcion in inscripciones:
            dni_socio, id_deporte = inscripcion

            self.cursor.execute("SELECT * FROM socios WHERE dni = ?", (dni_socio,))
            dni, nomyape, sexo, categoria, email, tel, direccylocalidad = self.cursor.fetchone()

            self.cursor.execute("SELECT nombre, arancel FROM deportes WHERE id_d = ?", (id_deporte,))
            nombre_deporte, arancel = self.cursor.fetchone()

            if dni not in inscripciones_procesadas.keys:
                inscripciones_procesadas[dni] = [nomyape, sexo, categoria, email, tel, direccylocalidad [nombre_deporte], arancel]
            else:
                inscripciones_procesadas[dni][3].append(nombre_deporte)
                inscripciones_procesadas[dni][4] += arancel 

        return jsonify(inscripciones_procesadas), 200

    def mostrar_todas_inscripciones(self):
        self.cursor.execute("SELECT dni_socio, id_deporte FROM inscripciones")
        inscripciones_procesadas = {}
        inscripciones = self.cursor.fetchall()
        for inscripcion in inscripciones:
            dni_socio, id_deporte = inscripcion

            self.cursor.execute("SELECT * FROM socios WHERE dni = ?", (dni_socio,))
            dni, nomyape, sexo, categoria, email, tel, direccylocalidad = self.cursor.fetchone()

            self.cursor.execute("SELECT nombre, arancel FROM deportes WHERE id_d = ?", (id_deporte,))
            nombre_deporte, arancel = self.cursor.fetchone()

            if dni not in inscripciones_procesadas.keys:
                inscripciones_procesadas[dni] = [nomyape, sexo, categoria, email, tel, direccylocalidad, [nombre_deporte], arancel]
            else:
                inscripciones_procesadas[dni][3].append(nombre_deporte)
                inscripciones_procesadas[dni][4] += arancel 

        return jsonify(inscripciones_procesadas), 200
