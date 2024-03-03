const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The best way to predict the future is to invent it. - Alan Kay",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "It always seems impossible until it is done. - Nelson Mandela",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "In three words I can sum up everything I've learned about life: It goes on. - Robert Frost",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "You must be the change you wish to see in the world. - Mahatma Gandhi",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "We may encounter many defeats but we must not be defeated. - Maya Angelou",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
];
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
module.exports = { generateRandomQuote };
