# Assignment-3

Assignment-3 is a JavaScript practice project containing five problem-solving tasks focused on object validation, array filtering, string processing, array methods, and data transformation.

---

## 📚 Problems Included

### 1. Student Introduction

Creates a formatted introduction message from a student object.

The function validates the input and requires:

- Name
- Age
- Course

```js
studentIntroduction(student)
```

If the input is invalid or required properties are missing, the function returns `"Invalid"`.

---

### 2. Filter Active Users

Filters an array of users and returns only the users whose `isActive` property is `true`.

```js
filterActiveUsers(users)
```

The function validates the input array and user objects before filtering.

---

### 3. Count Hashtags

Counts hashtags from a caption and finds the longest hashtag.

The function returns:

- `hashtagCount`
- `longestTag`

```js
countHashtags(caption)
```

Example result:

```js
{
  hashtagCount: 3,
  longestTag: "JavaScript"
}
```

---

### 4. Bonus Score

Adds a bonus of `10` points to every score and calculates the total updated score.

```js
bonusScore(scores)
```

The function uses array methods such as:

- `map()`
- `reduce()`

Invalid or empty arrays return `"Invalid"`.

---

### 5. Generate Leaderboard

Generates a leaderboard from a list of students.

Students with scores of `70` or above qualify for the leaderboard. Their names are converted to uppercase, and the first three qualified students are returned.

```js
generateLeaderboard(students)
```

The function also validates the input student data.

---

## 🛠️ Technologies Used

- JavaScript
- Functions
- Objects
- Arrays
- Array Methods
- Conditional Statements
- Input Validation
- String Methods
- `filter()`
- `map()`
- `reduce()`

---

## 🎯 Learning Objectives

This assignment focuses on practicing:

- Writing reusable JavaScript functions
- Validating function inputs
- Working with objects
- Working with arrays of objects
- Using `filter()`
- Using `map()`
- Using `reduce()`
- Processing strings
- Transforming data
- Handling invalid inputs
- Solving programming problems logically

---

## 📂 Project Structure

```text
Assignment-3/
│
├── Assignment-3.js
├── Problem-1.js
├── Problem-2.js
├── Problem-3.js
├── Problem-4.js
├── Problem-5.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Emransani01/Assignment-3.git
```

### 2. Go to the project directory

```bash
cd Assignment-3
```

### 3. Run the JavaScript files

You can run the individual JavaScript files using Node.js:

```bash
node Problem-1.js
```

Replace `Problem-1.js` with any of the other problem files.

---

## 👨‍💻 Author

**Md. Emran Hossain**

GitHub: [@Emransani01](https://github.com/Emransani01)

---

## 📄 License

This project was created for learning and practice purposes.
