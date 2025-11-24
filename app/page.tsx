import Banner from '@/component/Banner';
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import LatestJobs from '@/component/LatestJobs';
import WorkWith from '@/component/WorkWith';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <WorkWith />
      <LatestJobs />
      <Footer />
    </div>
  );
}
