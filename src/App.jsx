import Nav from './components/Nav'
import {
  Hero,
  Service,
  Footer,
  Subscribe,
  CustomerReview,
  PopularProduct,
  SuperQuality,
  Offer
} from './sections/index'

export default function App() {
  return (
    <main className=" relative">
        <Nav/>
        <section className=" xl:padding-l wide:padding-r padding-b">
          <Hero/>
        </section>
        <section className=" padding">
          <PopularProduct/>
        </section>
        <section className=" padding">
          <SuperQuality/>
        </section>
        <section className=" padding-x py-10">
          <Service/>
        </section>
        <section className=" padding">
          <Offer/>
        </section>
        <section className=" padding bg-pale-blue">
          <CustomerReview/>
        </section>
        <section className=" padding-x w-full py-16 sm:py-32">
          <Subscribe/>
        </section>
        <section className=" bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
    </main>
  )
}