import Header from '@components/Header';
import Sidebar from './Sidebar';
import Timeline from './Timeline';
// import Footer from '@components/Footer';

export default function Resume () {
    return (
        <>
            <Header/>
            <section className="flex mx-auto max-w-screen-md">
                <Sidebar/>
                <Timeline/>
            </section>
            {/* <Footer/> */}
        </>
    )
}
