import Layout from '../components/Layout';
import Triangle from '../components/Triangle';

export default () => (
  <Layout title="trzy kolory">
    <div className="vh-100 dt w-100 bg-image cover">
      <h1 className="dtc v-mid tc f2 f1-m f-subheadline-l fw6 bg-black-20 white">
        Hello ;)
      </h1>
    </div>
    <style jsx>{`
      .bg-image {
        background: url("https://images.unsplash.com/photo-1473181488821-2d23949a045a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=");
      }
    `}</style>
  </Layout>
);
