create database Epilepsum;

use Epilepsum;

create table Usuario
(
    id int (11) primary key not null,
    nombre varchar (50) not null,
    telefono int (10) not null,
    edad int (2) not null,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

alter table Usuario MODIFY id int
(11) not null auto_increment, auto_increment = 1;

create table medico
(
    id int (11) primary key not null,
    nombre varchar (50) not null,
    telefono int (10) not null,
    edad int (2) not null,
    correo varchar (50) not null,
    contrasena varchar (50) not null
);

alter table medico MODIFY id int
(11) not null auto_increment, auto_increment = 1;

create table medicacion
(
    id int (11) primary key not null,
    nombre varchar (50) not null,
    dias varchar (50) not null,
    hora int (10) not null,
    medicamento int (2) not null,
    registro timestamp not null default current_timestamp
);

alter table medicacion MODIFY id int
(11) not null auto_increment, auto_increment = 1;

create table ataquesEpilepticos
(
    id int (11) primary key not null,
    dias varchar (50) not null,
    hora int (10) not null,
    duracion int (10) not null,
    registro timestamp not null default current_timestamp
);

alter table ataquesEpilepticos MODIFY id int
(11) not null auto_increment, auto_increment = 1;
