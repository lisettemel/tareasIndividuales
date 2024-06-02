DROP database pokemon_tcg;
CREATE DATABASE pokemon_tcg;
USE pokemon_tcg;

CREATE TABLE Jugador (
    id_jugador INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    fecha_registro DATE
);

CREATE TABLE Entrenador (
    id_entrenador INT AUTO_INCREMENT PRIMARY KEY,
    rango VARCHAR(50),
    id_jugador INT,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Partida (
    id_partida INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    id_jugador1 INT,
    id_jugador2 INT,
    ganador INT,
    FOREIGN KEY (id_jugador1) REFERENCES Jugador(id_jugador),
    FOREIGN KEY (id_jugador2) REFERENCES Jugador(id_jugador),
    FOREIGN KEY (ganador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Baraja (
    id_baraja INT AUTO_INCREMENT PRIMARY KEY,
    id_jugador INT,
    nombre VARCHAR(100),
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Tipo_Carta (
    id_tipo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Carta (
    id_carta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    tipo INT,
    poder INT,
    rareza VARCHAR(50),
    FOREIGN KEY (tipo) REFERENCES Tipo_Carta(id_tipo)
);

CREATE TABLE Elemento (
    id_elemento INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Habilidad (
    id_habilidad INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT
);

CREATE TABLE Carta_Baraja (
    id_baraja INT,
    id_carta INT,
    cantidad INT,
    PRIMARY KEY (id_baraja, id_carta),
    FOREIGN KEY (id_baraja) REFERENCES Baraja(id_baraja),
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta)
);

CREATE TABLE Carta_Habilidad (
    id_carta INT,
    id_habilidad INT,
    PRIMARY KEY (id_carta, id_habilidad),
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta),
    FOREIGN KEY (id_habilidad) REFERENCES Habilidad(id_habilidad)
);


-- Insertar datos en la tabla Jugador
INSERT INTO Jugador (nombre, email, fecha_registro) VALUES 
('Ash Ketchum', 'ash@pokemon.com', '2020-01-01'),
('Misty Waterflower', 'misty@pokemon.com', '2020-01-02');

-- Insertar datos en la tabla Entrenador
INSERT INTO Entrenador (rango, id_jugador) VALUES 
('Master', 1),
('Expert', 2);

-- Insertar datos en la tabla Partida
INSERT INTO Partida (fecha, id_jugador1, id_jugador2, ganador) VALUES 
('2023-05-01', 1, 2, 1);

-- Insertar datos en la tabla Baraja
INSERT INTO Baraja (id_jugador, nombre) VALUES 
(1, 'Pikachu Deck'),
(2, 'Water Deck');

-- Insertar datos en la tabla Tipo_Carta
INSERT INTO Tipo_Carta (nombre) VALUES 
('Electric'),
('Water');

-- Insertar datos en la tabla Carta
INSERT INTO Carta (nombre, tipo, poder, rareza) VALUES 
('Pikachu', 1, 50, 'Common'),
('Squirtle', 2, 40, 'Rare');

-- Insertar datos en la tabla Elemento
INSERT INTO Elemento (nombre) VALUES 
('Electric'),
('Water');

-- Insertar datos en la tabla Habilidad
INSERT INTO Habilidad (nombre, descripcion) VALUES 
('Thunder Shock', 'Paralyzes the opponent'),
('Water Gun', 'Shoots water at the opponent');

-- Insertar datos en la tabla Carta_Baraja
INSERT INTO Carta_Baraja (id_baraja, id_carta, cantidad) VALUES 
(1, 1, 3),
(2, 2, 2);

-- Insertar datos en la tabla Carta_Habilidad
INSERT INTO Carta_Habilidad (id_carta, id_habilidad) VALUES 
(1, 1),
(2, 2);


SELECT * FROM Jugador;

SELECT * FROM Partida;

SELECT c.nombre, cb.cantidad 
FROM Carta c
JOIN Carta_Baraja cb ON c.id_carta = cb.id_carta
WHERE cb.id_baraja = 1;  -- Cambia 1 por el id_baraja que deseas consultar

SELECT h.nombre, h.descripcion 
FROM Habilidad h
JOIN Carta_Habilidad ch ON h.id_habilidad = ch.id_habilidad
WHERE ch.id_carta = 1;  -- Cambia 1 por el id_carta que deseas consultar

SELECT b.nombre 
FROM Baraja b
WHERE b.id_jugador = 1;  -- Cambia 1 por el id_jugador que deseas consultar


SELECT c.nombre AS Carta, tc.nombre AS Tipo, c.poder, c.rareza
FROM Carta c
JOIN Tipo_Carta tc ON c.tipo = tc.id_tipo;


SELECT * 
FROM Partida 
WHERE ganador = 1;  -- Cambia 1 por el id_jugador que deseas consultar


SELECT c.nombre 
FROM Carta c
WHERE c.tipo = (SELECT id_tipo FROM Tipo_Carta WHERE nombre = 'Electric');  -- Cambia 'Electric' por el tipo que deseas consultar

