import { Search } from "./ui/Search.js";
import { Slide } from "./ui/Slider.js";
import { initGnb } from "./ui/Gnb.js";
import { Tab } from "./ui/Tab.js";
import { MainSlide } from "./ui/MainSlide.js";
import { bindSlideData } from "./ui/bindSlideData.js";


Search("result.html");
initGnb();
Slide();
Tab('.tab-list');
MainSlide();
bindSlideData();