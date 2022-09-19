import {init} from "./framework";
import {User} from "./src/user";

const UserComponent = User({})()
console.log(`User component:`, UserComponent)

init('#app', UserComponent)
