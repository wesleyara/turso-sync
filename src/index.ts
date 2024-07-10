import { LogService } from "./services/LogService";
import { QuestionService } from "./services/QuestionsService";
import { TursoSyncService } from "./services/TursoSyncService";

const cliCommand = process.argv[2];
const args = process.argv.slice(3);

(async () => {
  const tursoSyncService = new TursoSyncService();
  const logService = new LogService();
  const questionService = new QuestionService();

  if (cliCommand) {
    switch (cliCommand) {
      case "create":
        await tursoSyncService.create(args[0]);
        break;
      case "show":
        await tursoSyncService.show(args[0]);
        break;
      case "create-token":
        await tursoSyncService.createToken(args[0]);
        break;
      case "list":
        await tursoSyncService.list();
        break;
      case "migrate":
        await tursoSyncService.migrate(args[0], args[1]);
        break;
      case "destroy":
        await tursoSyncService.destroy(args[0]);
        break;
      case "help":
        logService.green("Commands:");
        logService.empty();
        logService.yellow("create <NAME>");
        logService.yellow("show <NAME>");
        logService.yellow("create-token <NAME>");
        logService.yellow("list");
        logService.yellow("migrate <NAME> <MIGRATION_FOLDER_PATH>");
        logService.yellow("destroy <NAME>");
        break;
      default:
        logService.red("Command not found");
    }
  } else {
    logService.green("Welcome to the turso-sync CLI");
    logService.empty();

    const { command } = await questionService.make({
      questions: [
        {
          type: "list",
          name: "command",
          message: "What do you want to do?",
          choices: [
            {
              name: "Create a database",
              value: "create",
            },
            {
              name: "Show a database",
              value: "show",
            },
            {
              name: "Create a new token for database",
              value: "createtoken",
            },
            {
              name: "List databases",
              value: "list",
            },
            {
              name: "Migrate a database",
              value: "migrate",
            },
            {
              name: "Destroy a database",
              value: "destroy",
            },
          ],
        },
      ],
    });

    if (!command) {
      return logService.red("Command is required");
    }

    if (
      command === "create" ||
      command === "show" ||
      command === "createtoken" ||
      command === "destroy"
    ) {
      const { name } = await questionService.make({
        questions: [
          {
            type: "input",
            name: "name",
            message: "What is the name of the database?",
          },
        ],
      });

      if (!name) {
        return logService.red("Name is required");
      }

      if (command === "create") {
        return await tursoSyncService.create(name);
      }

      if (command === "createtoken") {
        return await tursoSyncService.createToken(name);
      }

      if (command === "destroy") {
        return await tursoSyncService.destroy(name);
      }

      return await tursoSyncService.show(name);
    }

    if (command === "list") {
      return await tursoSyncService.list();
    }

    if (command === "migrate") {
      const { dbName, migrationFolderPath } = await questionService.make({
        questions: [
          {
            type: "input",
            name: "dbName",
            message: "What is the name of the database?",
          },
          {
            type: "input",
            name: "migrationFolderPath",
            message: "What is the path of the migration folder?",
          },
        ],
      });

      if (!dbName) {
        return logService.red("Database name is required");
      }

      if (!migrationFolderPath) {
        return logService.red("Migration folder path is required");
      }

      return await tursoSyncService.migrate(dbName, migrationFolderPath);
    }
  }
})();
