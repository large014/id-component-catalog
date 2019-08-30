import { configure } from '@storybook/vue'
// import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import '../src/assets/css/formula.css';
// import Decorator from './Decorator.vue'


// addDecorator((story) => ({
//     components: { Decorator },
//     render(h) {
//         return (
//             <decorator>
//                 <story slot="story"></story>
//             </decorator>
//         )
//     }
// }))

const loadStories = () => {
    require("../src/stories/index")
    // require('./../src/stories')
}

configure(loadStories, module)