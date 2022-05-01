import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import SlicedItems from '../InventoryItems/SlicedItems';
import Speciality from '../Speciality/Speciality';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Speciality></Speciality>
            <SlicedItems></SlicedItems>
            <Contact></Contact>
        </div>
    );
};

export default Home;