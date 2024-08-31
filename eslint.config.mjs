import safeql from "@ts-safeql/eslint-plugin/config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.recommended,
  safeql.configs.connections({
    databaseUrl:
      "postgresql://postgres@localhost:5432/safeql-test?sslmode=disable",
    targets: [{ tag: "sql", transform: "{type}[]" }],
  })
);
