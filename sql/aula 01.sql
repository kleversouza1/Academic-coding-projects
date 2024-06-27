create database  meubanco
default character set utf8
default collate utf8mb3_general_ci;
use cadastro;
create table pessoas (
id int not null auto_increment,
nome varchar(30) not null,
nascimento date,
sexo enum('m','f'),
peso decimal(5,2),
altura decimal(3,2),
nacionalidade varchar(20) default 'brasil',
primary key(id)
)default charset = utf8;
insert into pessoas
values
(default,'mairazinha','1888-08-01','f','78.5','1.85','brasil'),
(default,'maira','2000-03-08','f','78.5','1.83','mexico'),
(default,'pablo','1999-02-09','m','81.5','1.80','argentina');

select * from pessoas;