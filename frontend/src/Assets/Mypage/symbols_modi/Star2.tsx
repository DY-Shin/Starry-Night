/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { motion } from 'framer-motion';
import Andromeda from './Andromeda';
import Aquarius from './Aquarius';
import Aquila from './Aquila';
import Aries from './Aries';
import Auriga from './Auriga';
import Lyra from './Lyra';
import Cancer from './Cancer';
import Cetus from './Cetus';
import Camelopardalis from './Camelopardalis';
import Sagittarius from './Sagittarius';
import Corvus from './Corvus';
import PiscisAustrinus from './PiscisAustrinus';
import Lacerta from './Lacerta';
import Delphinus from './Delphinus';
import ComaBerenices from './ComaBerenices';
import Bootes from './Bootes';
import Pisces from './Pisces';
import Hydra from './Hydra';
import Scutum from './Scutum';
import Cygnus from './Cygnus';
import Serpens from './Serpens';
import Ophiuchus from './Ophiuchus';
import CoronaBorealis from './CoronaBorealis';
import CanesVenatici from './CanesVenatici';
import Leo from './Leo';
import Lynx from './Lynx';
import Triangulum from './Triangulum';
import Cepheus from './Cepheus';
import Gemini from './Gemini';
import Eridanus from './Eridanus';
import Orion from './Orion';
import Monoceros from './Monoceros';
import Draco from './Draco';
import Sextans from './Sextans';
import CanisMinor from './CanisMinor';
import UrsaMinor from './UrsaMinor';
import LeoMinor from './LeoMinor';
import Vulpecula from './Vulpecula';
import Scorpius from './Scorpius';
import Equulues from './Equuleus';
import Virgo from './Virgo';
import Libra from './Libra';
import Crater from './Crater';
import Cassiopeia from './Cassiopeia';
import CanisMajor from './CanisMajor';
import UrsaMajor from './UrsaMajor';
import Pegasus from './Pegasus';
import Perseus from './Perseus';
import Hercules from './Hercules';
import Taurus from './Taurus';
import Lupus from './Lupus';
import Sagitta from './Sagitta';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 0)',
  },
};

function Star2({ id }: any) {
  switch (id) {
    case 1:
      return <Lyra />;
    case 2:
      return <Cancer />;
    case 3:
      return <Cetus />;
    case 4:
      return <Camelopardalis />;
    case 5:
      return <Sagittarius />;
    case 6:
      return <Corvus />;
    case 7:
      return <PiscisAustrinus />;
    case 8:
      return <Lacerta />;
    case 9:
      return <Aquila />;
    case 10:
      return <Delphinus />;
    case 11:
      return <Auriga />;
    case 12:
      return <ComaBerenices />;
    case 13:
      return <Bootes />;
    case 14:
      return <Pisces />;
    case 15:
      return <Aquarius />;
    case 16:
      return <Hydra />;
    case 17:
      return <Aquila />;
    case 18:
      return <Scutum />;
    case 19:
      return <Cygnus />;
    case 20:
      return <Serpens />;
    case 21:
      return <Ophiuchus />;
    case 22:
      return <CoronaBorealis />;
    case 23:
      return <CanesVenatici />;
    case 24:
      return <Leo />;
    case 25:
      return <Lynx />;
    case 26:
      return <Triangulum />;
    case 27:
      return <Cepheus />;
    case 28:
      return <Gemini />;
    case 29:
      return <Andromeda />;
    case 30:
      return <Aries />;
    case 31:
      return <Eridanus />;
    case 32:
      return <Orion />;
    case 33:
      return <Monoceros />;
    case 34:
      return <Draco />;
    case 35:
      return <Sextans />;
    case 36:
      return <CanisMinor />;
    case 37:
      return <UrsaMinor />;
    case 38:
      return <LeoMinor />;
    case 39:
      return <Vulpecula />;
    case 40:
      return <Scorpius />;
    case 41:
      return <Equulues />;
    case 42:
      return <Virgo />;
    case 43:
      return <Libra />;
    case 44:
      return <Crater />;
    case 45:
      return <Cassiopeia />;
    case 46:
      return <CanisMajor />;
    case 47:
      return <UrsaMajor />;
    case 48:
      return <Lupus />;
    case 49:
      return <Pegasus />;
    case 50:
      return <Perseus />;
    case 51:
      return <Hercules />;
    case 52:
      return <Sagitta />;
    case 53:
      return <Taurus />;
    default:
      return <div>123</div>;
  }
}

export default Star2;
