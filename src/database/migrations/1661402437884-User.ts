import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1661402437884 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE tenants (
              id int(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
              name varchar(50) NOT NULL
            )`,
            ) ;
    await queryRunner.query(
      `CREATE TABLE users (
        id int(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
        tenantId int(10) NOT NULL,
        fullname varchar(10) NOT NULL,
        password varchar(50) NOT NULL,
        code varchar(50),
        note varchar(50),
        isEnabled int(2),
        CONSTRAINT FK_user_tenants FOREIGN KEY (tenantId) REFERENCES tenants(id) ON UPDATE CASCADE ON DELETE CASCADE
      )`,
      ) ;
      await queryRunner.query(
        `CREATE TABLE roles (
          id int(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
          tenantId int(10) NOT NULL,
          name varchar(10) NOT NULL,
          description varchar(50),
          isEnabled int(2),
          CONSTRAINT FK_role_tenants FOREIGN KEY (tenantId) REFERENCES tenants(id) ON UPDATE CASCADE ON DELETE CASCADE
        )`,
      );
      await queryRunner.query(
      `CREATE TABLE rights (
        id int(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name varchar(10) NOT NULL,
        description varchar(50),
        isEnabled int(2)
      )`,
      ) ;
      await queryRunner.query(
        `CREATE TABLE user2roles (
          id int(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
          userId int(11)  NOT NULL,
          roleId int(11)  NOT NULL,
          name varchar(50) NOT NULL,
          CONSTRAINT FK_user_role FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
          CONSTRAINT FK_role_user FOREIGN KEY (roleId) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE
                )`,
    );
    await queryRunner.query(
      `CREATE TABLE role2rights (
                userId int(11)  PRIMARY KEY NOT NULL,
                roleId int(11)   NOT NULL,
                name varchar(50) NOT NULL,
                CONSTRAINT FK_role_right FOREIGN KEY (roleId) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
                CONSTRAINT FK_right_role FOREIGN KEY (userId) REFERENCES rights(id) ON UPDATE CASCADE ON DELETE CASCADE
              )`,
  );
  }



  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE role2rights;`);
    await queryRunner.query(`DROP TABLE user2roles;`);
    await queryRunner.query(`DROP TABLE rights;`);
    await queryRunner.query(`DROP TABLE roles;`);
    await queryRunner.query(`DROP TABLE users;`);
    await queryRunner.query(`DROP TABLE tenants;`);
  }
}
