document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'c3f45bde1c024b29ada275138b0aba94'; // Replace 'YOUR_API_KEY' with your actual API key from News API
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const newsList = document.getElementById('news-list');
      data.articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsList.appendChild(newsItem);
      });
    })
    .catch(error => {
      console.error('Error fetching news:', error);
    });
});
