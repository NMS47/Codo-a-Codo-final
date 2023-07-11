from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, DateField, IntegerField, RadioField, TelField
from wtforms.validators import InputRequired, Length, Email, NumberRange
from wtforms.widgets import html_params

class FormularioInscripcion(FlaskForm):
    dni = IntegerField('DNI:', validators=[InputRequired(),NumberRange(min=1, max=99999999, message='Introduce una edad valida') ])
    nombreyapellido = StringField('Nombre y Apellido:', validators=[InputRequired(), Length(min=2, max=50)])
    email = StringField('Email:', validators=[InputRequired(), Length(min=6, max=50), Email()])
    sexo = RadioField('Genero:', choices=[('hombre','Hombre'), ('mujer','Mujer'), ('otro', 'Otro')], validators=[InputRequired(), Length(min=2, max=20)])
    fechanacimiento = DateField('Fecha de Nacimiento:', validators =[InputRequired()])
    edad = IntegerField('Edad:', validators=[InputRequired(),NumberRange(min=1, max=110, message='Introduce una edad valida') ])
    telefono = TelField('Telefono', validators=[InputRequired()], description='Introduce correctamente, Ej: 1138383833') 
    submit = SubmitField('Agregar')