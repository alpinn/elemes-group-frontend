import Hero from '../containers/Hero';
import Category from '../containers/Category';
import Trending from '../containers/Trending';

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Trending />
    </main>
  );
}
