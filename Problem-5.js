function generateLeaderboard(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return "Invalid";
  }

  for (const student of students) {
    if (
      typeof student !== "object" ||
      student === null ||
      !("name" in student) ||
      !("score" in student) ||
      typeof student.score !== "number"
    ) {
      return "Invalid";
    }
  }

  const qualified = students.filter((student) => student.score >= 70);

  const names = qualified.map(({ name }) => name.toUpperCase());

  return names.slice(0, 3);
}
