import sqlite3

# Configurar la conexión a la base de datos SQLite
DATABASE = 'administracion.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

# Crear la/s tabla/s si no existe/n
def create_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS socios (
            dni int (8) NOT NULL,
            nomyape varchar (45) NOT NULL,
            sexo varchar (10) NOT NULL,
            categoria varchar (10) NOT NULL,
            email varchar(20) NOT NULL,
            tel int(12) NOT NULL,
            direccylocalidad varchar(50) NOT NULL,
            PRIMARY KEY (dni)
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS deportes (
            id_d INTEGER PRIMARY KEY,
            nombre VARCHAR(30) NOT NULL,
            arancel INT(5) NOT NULL
        )
    ''')

    # cursor.execute('''
    #     INSERT INTO deportes (id_d, nombre, arancel) VALUES (
    #         (1, "Crossfit", 5600),
    #         (2, "Atletismo", 5400),
    #         (3, "Futbol", 6200),
    #         (4, "Hockey", 5900),
    #         (5, "Basketball", 6100),
    #         (6, "Artes Marciales", 5800),
    #         (7, "Pin Pong", 4800),
    #         (8, "Natacion", 6000),
    #         (9, "Ciclismo", 6100),
    #         (10, "Voley", 5900),
    #         (11, "Tenis", 6100),
    #         (12, "Box Recreativo", 5800),
    #         (13, "Gimnasia Artistica", 6200),
    #         (14, "Ajedrez", 4500)
    #     )
    # ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS inscripciones (
            id int auto_increment (4) NOT NULL,
            dni_socio int (4) NOT NULL,
            id_deporte int (4) NOT NULL,
            PRIMARY KEY (`id`),
            FOREIGN KEY (`dni_socio`) REFERENCES socios (`dni`),
            FOREIGN KEY (`id_deporte`) REFERENCES deportes (`id_d`)
        )
    ''')

    conn.commit()
    cursor.close()
    conn.close()

# Verificar si la base de datos existe, si no, crearla y crear la/s tabla/s
def create_database():
    conn = sqlite3.connect(DATABASE, check_same_thread=False)
    conn.close()
    create_table()
