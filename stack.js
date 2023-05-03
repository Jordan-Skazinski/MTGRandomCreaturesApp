import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './screens/home'
import About from './screens/about'
import ZeroCost from './screens/creatureCards/zeroCost'
import OneCost from './screens/creatureCards/oneCost'
import TwoCost from './screens/creatureCards/twoCost'
import ThreeCost from './screens/creatureCards/threeCost'
import FourCost from './screens/creatureCards/fourCost'
import FiveCost from './screens/creatureCards/fiveCost'
import SixCost from './screens/creatureCards/sixCost'
import SevenCost from './screens/creatureCards/sevenCost'
import EightCost from './screens/creatureCards/eightCost'
import NineCost from './screens/creatureCards/nineCost'


const screens = {
    Home: {
        screen: Home
    },
    About: {
        screen: About
    },
    OneCost: {
        screen: OneCost
    },
    TwoCost: {
        screen: TwoCost
    },
    ThreeCost: {
        screen: ThreeCost
    },
    FourCost: {
        screen: FourCost
    },
    FiveCost: {
        screen: FiveCost
    },
    SixCost: {
        screen: SixCost
    },
    SevenCost: {
        screen: SevenCost
    },
    EightCost: {
        screen: EightCost
    },
    NineCost: {
        screen: NineCost
    },
    ZeroCost: {
        screen: ZeroCost
    },

}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)