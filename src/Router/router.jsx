import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedLayout from "../Layouts/ProtectedLayout/ProtectedLayout";
import PublicLayout from "../Layouts/PublicLayout/PublicLayout";
import Home from '../Pages/Home/Home'
import Page1 from "../Pages/LandingPage/Page1/Page1";
import Page2 from "../Pages/LandingPage/Page2/Page2";
import Page6 from "../Pages/LandingPage/Page6/Page6";
import Page3 from "../Pages/LandingPage/Page3/Page3";
import Page4 from "../Pages/LandingPage/Page4/Page4";
import Page5 from "../Pages/LandingPage/Page5/Page5";
import Page7 from "../Pages/LandingPage/Page7/Page7";
import Page8 from "../Pages/LandingPage/Page8/Page8";
import Page9 from "../Pages/LandingPage/Page9/Page9";
import Page10 from "../Pages/LandingPage/Page10/Page10";
import Page11 from "../Pages/LandingPage/Page11/Page11";
import Page12 from "../Pages/LandingPage/Page12/Page12";
import Page13 from "../Pages/LandingPage/Page12/Page12";
import PCgamerMain from "../componets/Home/PcGamerDropDownPages/PCgamerMain";



const router = createBrowserRouter(
    [
        {
            path: '/',
            element : <PublicLayout />,
            children : [
                {
                    path : '/',
                    element : <Home />
                },
                // home hero carousel landing pages
                {
                    path : '/nvidia-rtx-40-super',
                    element : <Page6 /> //done
                },
                {
                    path : '/ki-pc',
                    element : <Page7 />
                },
                {
                    path : '/intel-core-14-generation',
                    element : <Page8 /> //done
                },
                {
                    path : '/paiement-en-plusieurs-fois-alma',
                    element : <Page9 /> //done
                },
                {
                    path : '/amd-ryzen-7000',
                    element : <Page10 /> //done
                },
                {
                    path : '/corsair-icue-murals',
                    element : <Page11 /> //done
                },
                {
                    path : '/en-securite-avec-windows-11',
                    element : <Page12 /> //done
                },
                {
                    path : '/xbox-game-pass-ultimate',
                    element : <Page5 /> //done
                },
                {
                    path : '/nvidia-rtx-ai-pcs',
                    element : <Page4 /> //done
                },
                {
                    path : '/amd-ryzen-9000',
                    element : <Page3 /> //done
                },
                {
                    path : '/powered-by-msi',
                    element : <Page2 /> //done
                },
                {
                    path : '/amd-radeon-rx-7800xt-7700xt-game-bundle',
                    element : <Page1 /> //done
                },
                {
                    path : '/nvidia-rtx-40-star-wars-outlaws',
                    element : <Page13 />
                },
                // PC Gamer navbar pages
                {
                    path : '/pc-gamer',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/intel/',
                    element : <PCgamerMain />
                },
                {
                    path : '/intel/intel-core-i5/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/intel/intel-core-i5/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/intel/intel-core-i9/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/amd/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gameramd/amd-ryzen-5/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/amd/amd-ryzen-7/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/amd/amd-ryzen-9/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/pc-gamer-complet/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/pc-gamer-fixe/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/pc-premium-gaming/',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer-800-euro',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer-1000-euro',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer-1500-euro',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer-2000-euro',
                    element : <PCgamerMain />
                },
                {
                    path : '/windows-11',
                    element : <PCgamerMain />
                },
                {
                    path : '/windows-11-pc-gaming',
                    element : <PCgamerMain />
                },
                {
                    path : '/xbox-game-pass-ultimate',
                    element : <PCgamerMain />
                },
                // configurateur-pc navbar pages
                {
                    path : '/configurateur-pc',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/amdam5',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/intel1700',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-gamer',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-gamer/amdam5',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-gamer/intel1700',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-multimedia',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-de-bureau/',
                    element : <PCgamerMain />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-de-bureau/',
                    element : <PCgamerMain />
                },
                // ordinateur-de-bureau navbar pages
                {
                    path : '/ordinateur-de-bureau',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-bureautique/office-pc-intel',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-bureautique/office-pc-amd',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-de-streaming/streaming-pc-intel',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-de-streaming/streaming-pc-amd',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-de-streaming',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/workstations',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/workstations/nvidia-geforce-rtx-studio-pc',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/workstations/',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-multimedia',
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/mini-pc',
                    element : <PCgamerMain />
                },
                // pc-editions-speciales navbar pages
                {
                    path : '/pc-editions-speciales',
                    element : <PCgamerMain />
                },
                {
                    path : '/corsair-icue-murals',
                    element : <PCgamerMain />
                },
                {
                    path : '/c-pour-jouer',
                    element : <PCgamerMain />
                },
                {
                    path : '/wukong',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-editions-speciales/pc-pour-jouer/fortnite',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-editions-speciales/pc-pour-jouer/counter-strike-2',
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-pour-jouer',
                    element : <PCgamerMain />
                },
                {
                    path : '/catalog/category/view/s/nvidia-geforce-rtx/id/67/',
                    element : <PCgamerMain />
                },
                {
                    path : '/nvidia-rtx-40-series',
                    element : <PCgamerMain />
                },
                // accessoires navbar pages
                {
                    path : '/accessoires-pc',
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/ecrans',
                    element : <PCgamerMain />
                },
                {
                    path : '/accessoires-pc/clavier',
                    element : <PCgamerMain />
                },
                {
                    path : '/accessoires-pc/souris',
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/casque-audio',
                    element : <PCgamerMain />
                },
                {
                    path : '/accessoires-pc/webcam',
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/manettes',
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/micros',
                    element : <PCgamerMain />
                },
                // reductions navbar pages
                {
                    path : '/reductions',
                    element : <PCgamerMain />
                },
                {
                    path : '/nvidia-rtx-deals',
                    element : <PCgamerMain />
                },
                {
                    path : '/md-deals',
                    element : <PCgamerMain />
                },
                {
                    path : '/french-days',
                    element : <PCgamerMain />
                },
                {
                    path : '/rentree-scolaire',
                    element : <PCgamerMain />
                },
                  // promotions navbar pages
                {
                    path : '/promotions',
                    element : <PCgamerMain />
                },
            ]
        },
    ]

)


export default router;