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
