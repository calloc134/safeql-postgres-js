import postgres from "postgres";

const main = async () => {
  const sql = postgres(
    "postgresql://postgres@localhost:5432/safeql-test?sslmode=disable"
  );

  const result = await sql<{ id: number; name: string }[]>`SELECT id, name FROM users WHERE id = ${1}`;
  console.log(result);
};

main();
