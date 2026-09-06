import './styles/tokens.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/gate.css';
import './styles/street.css';
import './styles/house.css';
import './styles/quiz.css';

import { initAnalytics, trackPageview } from './analytics';
import { onRoute, route, startRouter } from './router';
import { mountNav } from './components/nav';
import { showSoundGate } from './components/sound-gate';
import { mountCredit } from './components/credit';
import { streetView } from './views/street';
import { houseView } from './views/house';
import { quizView } from './views/quiz';
import { HOUSES, HOUSE_ORDER } from './data/houses';

route('/', streetView);
HOUSE_ORDER.forEach((id) => route(HOUSES[id].path, () => houseView(HOUSES[id])));
route('/quiz', quizView);

initAnalytics();
onRoute((path) => trackPageview(path));

mountNav(document.getElementById('nav')!);
mountCredit(document.getElementById('credit')!);
startRouter();
void showSoundGate(document.getElementById('overlay')!);
