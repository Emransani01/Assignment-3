// <<<<<---- Problem - 1 ----->>>>>

function studentIntroduction(student) {
  if (
    typeof student !== "object" ||
    student === null ||
    student.name === undefined ||
    student.age === undefined ||
    student.course === undefined
  ) {
    return "Invalid";
  }
  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

// <<<<<---- Problem - 2 ----->>>>>

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  for (const user of users) {
    if (typeof user !== "object" || user === null || !("isActive" in user)) {
      return "Invalid";
    }
  }

  return users.filter((user) => user.isActive === true);
}

// <<<<<---- Problem - 3 ----->>>>>

function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");
  let hashtagCount = 0;
  let longestTag = "";

  for (const word of words) {
    if (word.startsWith("#")) {
      const tag = word.slice(1);

      hashtagCount++;

      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }

  return {
    hashtagCount,
    longestTag,
  };
}

// <<<<<---- Problem - 4 ----->>>>>

function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  if (!scores.every((score) => typeof score === "number")) {
    return "Invalid";
  }

  const updatedScores = scores.map((score) => score + 10);

  return updatedScores.reduce((total, score) => total + score, 0);
}

// <<<<<---- Problem - 5 ----->>>>>

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
