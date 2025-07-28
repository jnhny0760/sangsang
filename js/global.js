import { Search } from "./ui/Search.js";
import { Slide } from "./ui/Slide.js";
import { initGnb } from "./ui/Gnb.js";
import { Tab } from "./ui/Tab.js";
import { MainSlide } from "./ui/MainSlide.js";
import { Academy , AcademyHash} from "./ui/Academy.js"

Search("result.html");
initGnb();
Slide();
Tab('.tab-list');
MainSlide();
Academy();
AcademyHash();