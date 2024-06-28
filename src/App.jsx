import HeaderComponent from "./header-component"
import MainSlider from "./mainSlider";
import CircleCardList from "./CircleCardList";
import CardList from "./CardList"
import CardListSeason from "./CardListSeason";
import Footer from "./footer";
import './scss/App.scss'; 
import "./scss/card.scss";

function App(){
return<>

    <HeaderComponent/>
    <MainSlider/>
    <CircleCardList/>
    <CardList/>
    <CardListSeason/>
    
    <Footer/>
</> 
}


export default App;
