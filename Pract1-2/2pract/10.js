const today = new Date();

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

const formattedDate = today.toLocaleDateString('ru-RU', options);

console.log("Актуальная дата: " + formattedDate + " года"); 