import { execSync } from "child_process";
import { lstatSync, readdirSync } from "fs";

import { LogService } from "./LogService";

export class TursoSyncService {
  constructor(private readonly logService = new LogService()) {}

  private async execute(command: string) {
    execSync(command, { stdio: "inherit" });
  }

  async create(dbName: string) {
    if (!dbName) {
      return this.logService.red("Name is required");
    }

    const str = dbName.toLowerCase().replace(/[^a-z0-9]/g, "-");

    this.logService.green(`Creating database: ${str}`);

    try {
      await this.execute(`turso db create ${str}`);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async show(dbName: string) {
    if (!dbName) {
      return this.logService.red("Name is required");
    }

    const str = dbName.toLowerCase().replace(/[^a-z0-9]/g, "-");

    this.logService.green(`Showing database: ${str}`);

    try {
      await this.execute(`turso db show ${str}`);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async list() {
    this.logService.green("Listing databases");

    try {
      await this.execute(`turso db list`);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async createToken(dbName: string) {
    if (!dbName) {
      return this.logService.red("Name is required");
    }

    const str = dbName.toLowerCase().replace(/[^a-z0-9]/g, "-");

    this.logService.green(`Creating tokens for database: ${str}`);

    try {
      await this.execute(`turso db tokens create ${str}`);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async migrate(dbName: string, migrationFolderPath: string) {
    const migrationDir = readdirSync(migrationFolderPath);

    for (const file of migrationDir) {
      const isDirectory = lstatSync(
        `${migrationFolderPath}/${file}`,
      ).isDirectory();

      if (isDirectory) {
        this.logService.green(`Apply migrations: ${file}`);

        const migrationFiles = readdirSync(`${migrationFolderPath}/${file}`);

        for (const migrationFile of migrationFiles) {
          try {
            await this.execute(
              `turso db shell ${dbName} < ${migrationFolderPath}/${file}/${migrationFile}`,
            );
          } catch (error: any) {
            console.log(error.message);
          }
        }
      }
    }
  }

  async destroy(dbName: string) {
    if (!dbName) {
      return this.logService.red("Name is required");
    }

    const str = dbName.toLowerCase().replace(/[^a-z0-9]/g, "-");

    this.logService.green(`Destroying database: ${str}`);

    try {
      await this.execute(`turso db destroy ${str}`);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
