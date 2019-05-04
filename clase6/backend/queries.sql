/*
First kind of syntax

insert into users values (null,'Alejandro','Villafane',null,'info@alezvi.com.ar','qwerty',NOW(),null,null,null,'1987-02-25',null);

*/

/* complete unordered syntax */

INSERT INTO users (
    `email`,
    `first_name`,
    `last_name`,
    `nickname`,
    `password`,
    `birthdate`,
    `created_at`
) VALUES (
    'brilla@lenovo.com.ar',
    'Bruno',
    'Rilla',
    'urd',
    'zabeca',
    '1990-07-07',
    NOW()
);

/* ¿Cómo se activaría el usuario?

    Habría que realizar un update al usuario

*/

UPDATE `users`
SET `activated_at` = NOW()
WHERE id = 1;


/*

DELETE

para borrar una fila entera en este caso.

Nunca es conveniente borrar usar DELETE.
*/

DELETE FROM users WHERE id = 1;


/* OPERACIÓN COMBINADA */

SELECT * FROM users
WHERE activated_at is not null AND deleted_at is not null;


/* INSERT INTO ARTISTS */

INSERT INTO artists (`full_name`) VALUES ('Tupac Shakur');

/* SELECT LIKE */

SELECT * FROM artists
WHERE full_name LIKE '%TU%';


/* likear */

INSERT INTO `likes`(`user_id`,`table_id`,`table_name`) VALUES(1,1,'playlists');