import Header from './components/header';
import Footer from './components/Footer';
import Card from './components/card';
import moviesData from './api/CardData.json';
import './index.css';

const App = () => {
  const categories = ['Hindi Movies', 'Marathi Movies'];

  return (
    <div className="app">
      <Header />

      <div className="welcome-banner">
        <h1 className="welcome-text">🎉 Welcome to MovieFlix — Your Entertainment Hub 🎬</h1>
      </div>

      <main>
        {categories.map(category => (
          <section className="movie-category" key={category}>
            <h2>📦 {category}</h2>
            <div className="movie-container">
              {moviesData
                .filter(movie => movie.category === category)
                .slice(0, 6)
                .map(movie => (
                  <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default App;
