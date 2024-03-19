
USE huellitasdb;


INSERT INTO roles(tipo_rol)VALUES('Admin');
INSERT INTO roles(tipo_rol)VALUES('Usuario');

INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('Balam Balcaraza','5588062943','balcaraza@gmail.com','Huellitas_123', 1);
INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('Carolina Pineda','5575265435','gpinedacarolina@gmail.com','Huellitas_123', 1);
INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('Hugo Castañeda','5583429615','hugocastanedahernadez1@gmail.com','Huellitas_123', 1);
INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('Monserrat Cervantes','3331777101','dianaranda2408@gmail.com','Huellitas_123', 1);
INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('Fernanda Jimenez','5633809918','ferjro24@gmail.com','Huellitas_123', 1);
INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('Amparo Garibay','3318432057','s121820095@gmail.com','Huellitas_123', 1);
INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('Andrea Cervantes','3311784157','andreaacs@me.com','Huellitas_123', 1);
INSERT INTO usuarios(nombre,telefono,correo_electronico,password_usuario,roles_id_rol)VALUES('fulanito desconocido','3318425601','fulanito@gmail.com','Huellitas_123', 2);

INSERT INTO productos(imagen,nombre_producto,descripcion,precio)
VALUES('RopaMinie.jpg','Ropa Minie','Ropa para mascota, disney minnie mouse, camisa textil, rosa y grande',145.80);
INSERT INTO productos(imagen,nombre_producto,descripcion,precio)
VALUES('CepilloLimpieza.jpg','Cepillo','Cepillo de limpieza para mascotas sintético azul 19.7x10.6x5 Cm',79.90);
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('tazonpanda.png', 'tazon panda', 'Tazón para mascota, panda animal de plástico y color blanco',99);
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('PelucheDinosaurio.jpg', 'Peluche Dinosaurio', 'Peluche para mascota de dinosaurio, 100% Poliéster 35.5x13 Cm',129.90);
INSERT INTO productos(imagen, nombre_producto, descripcion, precio) VALUES('JugueteFutbol.jpg', 'Juguete de Futbol', 'Juguete para mascota con sonido', 29.90);
INSERT INTO productos(imagen, nombre_producto, descripcion, precio) VALUES('toallitaAzul.jpg', 'Toallita', 'Toalla de baño con capucha, absorbente de alta calidad', 150);
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('casaGatos.jpg','casa Gatos','Casa para gatos, color morada con rascadero',350);
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('ChalecoArnes.jpg','Chaleco Arnes', 'Chaleco con arnés para mascotas 100% poliéster azul 25x35',99.90);
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('DisfrazLaGarra.jpg','Disfraz para mascota','Disfraz para mascota, de disney alíen toy story, textil de color verde y grande',149.90); 
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('TazonRosa.jpg','Tazón para mascota','Tazón para mascota de disney minnie mouse, plástico y de color rosa, textil de color verde y grande',99.90);
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('cama.jpg', 'cama', 'Cama resistente y suave color cafe', 299);
INSERT INTO productos (imagen,nombre_producto,descripcion,precio)VALUES('collarPerro.jpg', 'collarPerro',' Collar de piel, color cafe, grabado', 250);

INSERT INTO pedidos(fechaPedido, `status`,usuarios_no_usuario )VALUES(current_date, 'enviado',8);
INSERT INTO pedidos(fechaPedido, `status`,usuarios_no_usuario )VALUES(current_date, 'enviado',8);
INSERT INTO pedidos(fechaPedido, `status`,usuarios_no_usuario )VALUES(current_date, 'enviado',8);
INSERT INTO pedidos(fechaPedido, `status`,usuarios_no_usuario )VALUES(current_date, 'enviado',8);
INSERT INTO pedidos(fechaPedido, `status`,usuarios_no_usuario )VALUES(current_date, 'enviado',8);
INSERT INTO pedidos(fechaPedido, `status`,usuarios_no_usuario )VALUES('2024-02-19', 'enviado',8);

INSERT INTO detalle_pedido (cantidad,pedidos_id_pedido,productos_id_producto) VALUES (1,1,4);
INSERT INTO detalle_pedido (cantidad,pedidos_id_pedido,productos_id_producto) VALUES (3,2,7);
INSERT INTO detalle_pedido (cantidad,pedidos_id_pedido,productos_id_producto) VALUES (7,5,12);
INSERT INTO detalle_pedido (cantidad,pedidos_id_pedido,productos_id_producto) VALUES (3,4,6);
INSERT INTO detalle_pedido (cantidad,pedidos_id_pedido,productos_id_producto) VALUES(4,5,11);
INSERT INTO detalle_pedido (cantidad,pedidos_id_pedido,productos_id_producto) VALUES(2,6,12);

 
 INSERT INTO detalle_envio(nombre_completo,calle,municipio,estado,codigo_postal,num_int_ext,telefono,instrucciones,usuarios_no_usuario,usuarios_roles_id_rol)
	VALUES ('Amparo Sonia Garibay ortiz', 'Gonzalez Ortega', 'Tlajomjulco de Zuñiga', 'Jalisco', '45650','145A','379605462', 'Entregar frente la puerta de barrotes' ,8,2);
INSERT INTO detalle_envio(nombre_completo, calle, municipio, estado, codigo_postal, num_int_ext, telefono, instrucciones,  usuarios_no_usuario, usuarios_roles_id_rol)
	VALUES ('Balam Alcaraz', 'Nilo', 'Azcapotzalco', 'Ciudad de México', '02080', '117', '5588062943', 'Zaguan negro',8,2);
INSERT INTO detalle_envio(nombre_completo,calle,municipio,estado,codigo_postal,num_int_ext,telefono,instrucciones,usuarios_no_usuario,usuarios_roles_id_rol)
VALUES ('Juan Perez Cruz', 'Canal de la Sangría', 'Tláhuac', 'Ciudad de México', '13529', 041, '5575265435', 'Zaguán negro al lado de una Papeleria', 8, 2);
INSERT INTO detalle_envio(nombre_completo,calle,municipio,estado,codigo_postal,num_int_ext,telefono,instrucciones,usuarios_no_usuario,usuarios_roles_id_rol)
 VALUES ('Fulanito Desconocido','Sanchez Colín','Ecatepec','Estado de México','55339','22-44','5633809918','casa azul, zaguan rústico',8,2);
INSERT INTO detalle_envio(nombre_completo,calle,municipio,estado,codigo_postal,num_int_ext,telefono,instrucciones,usuarios_no_usuario,usuarios_roles_id_rol)
VALUES ('Hugo Castaneda Hernandez','Progreso','Ecatepec','Estado de México','55270','33-44','5583429615','casa negra',8,2);



INSERT INTO detalle_tarjeta (nombre_tarjeta,no_tarjeta,mes,anio,codigo_seguridad,usuarios_no_usuario)VALUES ('Sonia Garibay','1225252625258522', '05','2025','142',8);
INSERT INTO detalle_tarjeta (nombre_tarjeta,no_tarjeta,mes,anio,codigo_seguridad,usuarios_no_usuario)VALUES ('Chanchito Feliz','1234432156780978','06', '2029', '198',8 );
INSERT INTO detalle_tarjeta (nombre_tarjeta,no_tarjeta,mes,anio,codigo_seguridad,usuarios_no_usuario)VALUES ('Fulanito Desconocido','3296738554499111','08','2029','194',8);
INSERT INTO detalle_tarjeta (nombre_tarjeta,no_tarjeta,mes,anio,codigo_seguridad,usuarios_no_usuario)VALUES ('Carolina Pineda','8923456712419231', 03, 2027, 321, 8);
INSERT INTO detalle_tarjeta (nombre_tarjeta,no_tarjeta,mes,anio,codigo_seguridad,usuarios_no_usuario)VALUES ('Balam Alcaraz', '9608745213698152', '06', '2027', '365', 8);
INSERT INTO detalle_tarjeta (nombre_tarjeta,no_tarjeta,mes,anio,codigo_seguridad,usuarios_no_usuario)VALUES ('Andrea Cervantes','4517456191112221', 04, '2029', 157, 8);

SELECT*FROM roles;
SELECT*FROM usuarios;
SELECT*FROM productos;
SELECT*FROM pedidos;
SELECT*FROM detalle_pedido;
SELECT *FROM detalle_envio;
SELECT 
    *
FROM
    huellitasdb.detalle_tarjeta;